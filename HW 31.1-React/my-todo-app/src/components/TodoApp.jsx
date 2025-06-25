// components/TodoApp.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadTodos, addTodo,
    deleteTodo, toggleTodo, editTodo, clearTodos
    } from '../features/todos/todosSlice';

    export default function TodoApp() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const { items, loading } = useSelector(state => state.todos);

    useEffect(() => {
        dispatch(loadTodos());
    }, [dispatch]);

    const handleAdd = () => {
        if (text.trim().length > 0) {
        dispatch(addTodo(text));
        setText('');
        }
    };

    return (
        <div style={{ padding: 20 }}>
        <h1>Мій TODO лист</h1>

        <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Нове завдання"
        />
        <button onClick={handleAdd}>Додати</button>
        <button onClick={() => dispatch(clearTodos())}>Очистити</button>

        {loading && <p>Завантаження...</p>}

        <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map(todo => (
            <li
                key={todo.id}
                style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px'
                }}
            >
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                />
                <span
                style={{
                    marginLeft: 10,
                    marginRight: 20,
                    textDecoration: todo.completed ? 'line-through' : 'none'
                }}
                >
                {todo.text}
                </span>

                <button
                style={{
                    backgroundColor: '#fff3cd',
                    border: '1px solid #ffeeba',
                    color: '#856404',
                    borderRadius: '4px',
                    marginLeft: '5px',
                    padding: '4px 8px',
                    cursor: 'pointer'
                }}
                onClick={() => {
                    const newText = prompt('Нове завдання:', todo.text);
                    if (newText) dispatch(editTodo({ id: todo.id, text: newText }));
                }}
                >
                Редагувати
                </button>

                <button
                style={{
                    backgroundColor: '#f8d7da',
                    border: '1px solid #f5c6cb',
                    color: '#721c24',
                    borderRadius: '4px',
                    marginLeft: '5px',
                    padding: '4px 8px',
                    cursor: 'pointer'
                }}
                onClick={() => dispatch(deleteTodo(todo.id))}
                >
                Видалити
                </button>
            </li>
            ))}
        </ul>
        </div>
    );
}
