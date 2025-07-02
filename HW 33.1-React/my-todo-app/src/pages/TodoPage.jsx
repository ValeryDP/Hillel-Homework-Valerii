import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos, addTodo, deleteTodo, toggleTodo, clearTodos } from '../features/todos/todosSlice';
import { Container, TextField, Button, List, ListItem, ListItemText, Checkbox, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoPage() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const { items, loading } = useSelector(state => state.todos);

    useEffect(() => { dispatch(loadTodos()); }, [dispatch]);

    const handleAdd = () => {
        if (text.trim() === '') {
        alert('Не можна додати порожнє завдання');
        return;
        }
        dispatch(addTodo({ id: Date.now(), text, completed: false }));
        setText('');
    };

    return (
        <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>Мій TODO лист</Typography>
        <TextField
        label="Нове завдання"
        value={text}
        onChange={e => setText(e.target.value)}
        size="small"
        sx={{ mr: 2 }}
      />
      <Button variant="contained" onClick={handleAdd}>Додати</Button>
      <Button variant="outlined" color="error" sx={{ ml: 2 }} onClick={() => dispatch(clearTodos())}>
        Очистити все
      </Button>

      {loading && <Typography>Завантаження...</Typography>}

      <List>
        {items.map(todo => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => dispatch(deleteTodo(todo.id))}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <Checkbox checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
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
