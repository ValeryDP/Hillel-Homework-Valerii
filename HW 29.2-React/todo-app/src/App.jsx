import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './features/todoSlice';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  const handleAdd = () => {
    if (input.trim() === '') return;
    dispatch(addTodo(input.trim()));
    setInput('');
  };

  return (
    <div className="app">
      <h1>TODO</h1>
      <div className="form">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Введіть завдання"
        />
        <button onClick={handleAdd}>Додати</button>
      </div>

      <h2>TODOS</h2>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <div className="footer">Всього завдань: {todos.length}</div>
    </div>
  );
}

export default App;
