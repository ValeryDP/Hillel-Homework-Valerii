const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataFile = path.join(__dirname, '../data/todos.json');

function readTodos() {
    const data = fs.readFileSync(dataFile);
    return JSON.parse(data);
}

function writeTodos(todos) {
    fs.writeFileSync(dataFile, JSON.stringify(todos, null, 2));
}

router.get('/', (req, res) => {
    const todos = readTodos();
    res.json(todos);
});


router.post('/', (req, res) => {
  const todos = readTodos();
  const newTodo = { id: Date.now(), text: req.body.text, done: false };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
});


router.put('/:id', (req, res) => {
    const todos = readTodos();
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos[index] = { ...todos[index], ...req.body };
        writeTodos(todos);
        res.json(todos[index]);
    } else {
        res.status(404).json({ error: 'Помилка, задача не знайдена' });
    }
});


router.delete('/:id', (req, res) => {
    let todos = readTodos();
    const id = parseInt(req.params.id);
    const newTodos = todos.filter(todo => todo.id !== id);
    if (todos.length === newTodos.length) {
        res.status(404).json({ error: 'Помилка, задача не знайдена' });
    } else {
        writeTodos(newTodos);
        res.json({ message: 'Задача видалена' });
    }
});

module.exports = router;
