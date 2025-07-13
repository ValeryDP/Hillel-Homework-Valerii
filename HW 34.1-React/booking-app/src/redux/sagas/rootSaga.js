import { all } from 'redux-saga/effects';
import { bookingSaga } from './bookingSaga';

export default function* rootSaga() {
    yield all([bookingSaga()]);
}
