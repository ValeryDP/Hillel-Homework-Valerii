import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import '../styles/header.css' 

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-links">
        <Link to="/">Головна</Link>
        <Link to="/contact">Контакти</Link>
        <Link to="/about">Про нас</Link>
      </nav>
      <ThemeToggle />
    </header>
  )
}
