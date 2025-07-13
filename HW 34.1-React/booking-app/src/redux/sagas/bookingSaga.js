import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    sendBookingRequest,
    sendBookingSuccess,
    sendBookingFailure,
} from '../slices/bookingSlice';
import { push } from 'redux-first-history';

const API_URL = process.env.REACT_APP_API_URL;

function* handleBookingRequest(action) {
    try {
        const { destination } = action.payload;

        const response = yield call(
        axios.get,
        `${API_URL}/hotels?city=${destination}`
        );

        yield put(sendBookingSuccess(response.data));

        yield put(push('/hotels'));
    } catch (error) {
        yield put(sendBookingFailure(error.message));
    }
}

export function* bookingSaga() {
    yield takeLatest(sendBookingRequest.type, handleBookingRequest);
}
