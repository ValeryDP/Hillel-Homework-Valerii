import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import HotelsPage from './pages/HotelsPage';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
