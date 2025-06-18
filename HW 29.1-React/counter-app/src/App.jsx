import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';
import './App.css'; // Подключаем стили

function App() {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <div className="counter-value">Value: {value}</div>
      <button className="counter-button" onClick={() => dispatch(increment())}>+</button>
      <button className="counter-button" onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
