import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {
        loadTodos: (state) => { state.loading = true; },
        loadTodosSuccess: (state, action) => {
        state.loading = false;
        state.items = action.payload;
        },
        loadTodosFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        },
        addTodo: (state, action) => { state.loading = true; },
        addTodoSuccess: (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
        },
        deleteTodo: (state, action) => { state.items = state.items.filter(todo => todo.id !== action.payload); },
        toggleTodo: (state, action) => {
        const todo = state.items.find(todo => todo.id === action.payload);
        if (todo) todo.completed = !todo.completed;
        },
        editTodo: (state, action) => {
        const { id, text } = action.payload;
        const todo = state.items.find(todo => todo.id === id);
        if (todo) todo.text = text;
        },
        clearTodos: (state) => { state.items = []; }
    }
    });

    export const {
    loadTodos, loadTodosSuccess, loadTodosFailure,
    addTodo, addTodoSuccess, deleteTodo, toggleTodo, editTodo, clearTodos
    } = todosSlice.actions;

export default todosSlice.reducer;
