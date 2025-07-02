import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Мій TODO лист</Typography>
          <Button color="inherit" component={Link} to="/">TODO</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<TodoPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
