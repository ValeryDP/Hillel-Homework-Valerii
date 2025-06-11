import { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error('Помилка:', error, info)
    }

    render() {
        if (this.state.hasError) {
        return <h2>Отакої! Щось пішло не так.</h2>
        }

        return this.props.children
    }
}
