import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadTodos, addTodo, deleteTodo,
    toggleTodo, editTodo, clearTodos
} from '../features/todos/todosSlice';

import {
    Container, TextField, Button, List, ListItem,
    ListItemText, Checkbox, IconButton, Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function TodoPage() {
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
        <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Мій TODO лист</Typography>

        <TextField
            label="Новая задача"
            value={text}
            onChange={e => setText(e.target.value)}
            size="small"
            sx={{ mr: 2 }}
        />
        <Button variant="contained" onClick={handleAdd}>Додати</Button>
        <Button variant="outlined" color="error" sx={{ ml: 2 }} onClick={() => dispatch(clearTodos())}>
            Очистити
        </Button>

        {loading && <Typography>Завантаження...</Typography>}

        <List>
            {items.map(todo => (
            <ListItem
                key={todo.id}
                secondaryAction={
                <>
                    <IconButton
                    edge="end"
                    onClick={() => {
                        const newText = prompt('Нове завдання:', todo.text);
                        if (newText) dispatch(editTodo({ id: todo.id, text: newText }));
                    }}
                    >
                    <EditIcon sx={{ color: '#ff9800' }} />
                    </IconButton>
                    <IconButton
                    edge="end"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    >
                    <DeleteIcon sx={{ color: '#f44336' }} />
                    </IconButton>
                </>
                }
            >
                <Checkbox
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                />
                <ListItemText
                    primary={
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        </span>
                    }
                />
            </ListItem>
            ))}
        </List>
        </Container>
    );
}
