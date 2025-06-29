import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TodoPage from './pages/TodoPage';
import SwapiPage from './pages/SwapiPage';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
        <Container sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/swapi" element={<SwapiPage />} />
          </Routes>
        </Container>
      <Footer />
    </>
  );
}
