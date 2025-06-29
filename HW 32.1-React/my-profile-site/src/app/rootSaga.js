import { all } from 'redux-saga/effects';
import { todosSaga } from '../features/todos/todosSaga';
import { swapiSaga } from '../features/swapi/swapiSaga';

export default function* rootSaga() {
    yield all([
        todosSaga(),
        swapiSaga()
    ]);
}
