import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    function toggleTheme() {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙 Темніємо' : '☀️ Світлішаємо'}
        </button>
    )
}



