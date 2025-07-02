import { call, put, takeEvery } from 'redux-saga/effects';
import { loadTodos, loadTodosSuccess } from './todosSlice';
import { fetchTodosAPI } from './todosAPI';

function* handleLoadTodos() {
    const todos = yield call(fetchTodosAPI);
    yield put(loadTodosSuccess(todos));
}

export function* todosSaga() {
    yield takeEvery(loadTodos.type, handleLoadTodos);
}
