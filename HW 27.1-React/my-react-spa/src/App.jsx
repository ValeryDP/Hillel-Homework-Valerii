import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import ErrorBoundary from './components/ErrorBoundary'
import './styles/main.css'

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App
