
const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

let todos = [];

function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
    }

function loadFromLocalStorage() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos = JSON.parse(savedTodos); 
        renderTodos();
    }
}

function createTodoElement(todo, index) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if (todo.completed) {
        li.classList.add('todo-item--checked');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function() {
        toggleTodo(index);
    });

    const span = document.createElement('span');
    span.className = 'todo-item__description';
    span.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'todo-item__delete';
    deleteBtn.textContent = 'Видалити';
    deleteBtn.addEventListener('click', function() {
        deleteTodo(index);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
    }

function renderTodos() {
    todosWrapper.innerHTML = '';

    todos.forEach((todo, index) => {
        const todoElement = createTodoElement(todo, index);
        todosWrapper.appendChild(todoElement);
    });
    }

function addTodo(text) {
    const newTodo = {
        text: text,
        completed: false
    };
    todos.push(newTodo);
    saveToLocalStorage();
    renderTodos();
    }

function deleteTodo(index) {
    todos.splice(index, 1);
    saveToLocalStorage();
    renderTodos();
    }

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveToLocalStorage();
    renderTodos();
    }

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
    }
});

loadFromLocalStorage();

