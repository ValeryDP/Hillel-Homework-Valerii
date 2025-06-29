import { call, put, takeEvery } from 'redux-saga/effects';
import { loadPeople, loadPeopleSuccess, loadPeopleFailure } from './swapiSlice';
import { fetchPeopleAPI } from './swapiAPI';

function* handleLoadPeople() {
    try {
        const people = yield call(fetchPeopleAPI);
        yield put(loadPeopleSuccess(people));
    } catch (error) {
        yield put(loadPeopleFailure(error.toString()));
    }
    }

    export function* swapiSaga() {
    yield takeEvery(loadPeople.type, handleLoadPeople);
}
