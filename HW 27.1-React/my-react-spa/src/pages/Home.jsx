import { useState } from 'react'

export default function Home() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')

    const addTask = () => {
        if (input.trim()) {
        setTasks([...tasks, input.trim()])
        setInput('')
        }
    }

    return (
        <div className="page">
        <h1>Мій TODO лист</h1>
        <div className="todo-form">
            <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Моє завдання"
            />
            <button onClick={addTask}>Додати</button>
        </div>
        <ul className="todo-list">
            {tasks.map((task, index) => (
            <li key={index}>{task}</li>
            ))}
        </ul>
        </div>
    )
}

