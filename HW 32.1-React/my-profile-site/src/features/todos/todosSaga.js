import { call, put, takeEvery } from 'redux-saga/effects';
import { loadTodos, loadTodosSuccess, loadTodosFailure, addTodo, addTodoSuccess } from './todosSlice';
import { fetchTodosAPI, addTodoAPI } from './todosAPI';

function* handleLoadTodos() {
    try {
        const todos = yield call(fetchTodosAPI);
        yield put(loadTodosSuccess(todos));
    } catch (error) {
        yield put(loadTodosFailure(error.toString()));
    }
    }

    function* handleAddTodo(action) {
    try {
        const newTodo = yield call(addTodoAPI, action.payload);
        yield put(addTodoSuccess(newTodo));
    } catch (error) {
        console.error(error);
    }
    }

    export function* todosSaga() {
    yield takeEvery(loadTodos.type, handleLoadTodos);
    yield takeEvery(addTodo.type, handleAddTodo);
}
