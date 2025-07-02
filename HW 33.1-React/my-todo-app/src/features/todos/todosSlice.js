import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: { items: [], loading: false },
    reducers: {
        loadTodos: (state) => { state.loading = true; },
        loadTodosSuccess: (state, action) => {
        state.loading = false;
        state.items = action.payload;
        },
        addTodo: (state, action) => {
        state.items.push(action.payload);
        },
        deleteTodo: (state, action) => {
        state.items = state.items.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
        const todo = state.items.find(todo => todo.id === action.payload);
        if (todo) todo.completed = !todo.completed;
        },
        clearTodos: (state) => { state.items = []; },
    }
});

export const { loadTodos, loadTodosSuccess, addTodo, deleteTodo, toggleTodo, clearTodos } = todosSlice.actions;
export default todosSlice.reducer;
