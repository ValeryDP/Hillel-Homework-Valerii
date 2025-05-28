const API_URL = 'http://localhost:3000/api/todos';

async function fetchTodos() {
    const res = await fetch(API_URL);
    const todos = await res.json();
    const list = document.getElementById('todoList');
    list.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = todo.text;
        span.style.cursor = 'pointer';
        span.style.textDecoration = todo.done ? 'line-through' : 'none';
        span.onclick = () => toggleDone(todo.id, !todo.done);

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Видалити';
        delBtn.style.marginLeft = '10px';
        delBtn.onclick = () => deleteTodo(todo.id);

        li.appendChild(span);
        if (todo.done) {
        const checkmark = document.createTextNode(' ✅');
        li.appendChild(checkmark);
        }
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

async function addTodo() {
    const input = document.getElementById('newTodo');
    if (!input.value.trim()) return;
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input.value })
    });
    input.value = '';
    fetchTodos();
}

async function toggleDone(id, done) {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done })
    });
    fetchTodos();
}

async function deleteTodo(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    fetchTodos();
}

window.onload = fetchTodos;
