import { call, put, takeEvery, delay } from 'redux-saga/effects';
import { 
    loadTodos, loadTodosSuccess, loadTodosFailure,
    addTodo, addTodoSuccess
} from './todosSlice';
import { fetchTodos, createTodo } from './todosAPI';

function* loadTodosWorker() {
    try {
        const data = yield call(fetchTodos);
        yield delay(500);
        yield put(loadTodosSuccess(data));
    } catch (error) {
        yield put(loadTodosFailure(error.message));
    }
}

function* addTodoWorker(action) {
    const newTodo = yield call(createTodo, action.payload);
    yield delay(300);
    yield put(addTodoSuccess(newTodo));
}

export function* todosSaga() {
    yield takeEvery(loadTodos.type, loadTodosWorker);
    yield takeEvery(addTodo.type, addTodoWorker);
}
