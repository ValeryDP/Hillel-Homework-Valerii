const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());               
app.use(express.json());

const todosRoutes = require('./routes/todos');
app.use('/api/todos', todosRoutes);

app.listen(PORT, () => {
    console.log(`Сервер запущений на http://localhost:${PORT}`);
});
