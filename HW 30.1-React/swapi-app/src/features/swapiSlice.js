import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFromUrl = (url) => async dispatch => {
    try {
        dispatch(fetchStart());
        const res = await axios.get(url);
        dispatch(fetchSuccess(res.data));
    } catch (err) {
        dispatch(fetchError(err.message));
    }
};

export const swapiSlice = createSlice({
    name: 'swapi',
        initialState: {
        data: null,
        loading: false,
        error: null,
        },
    reducers: {
        fetchStart: state => { state.loading = true },
        fetchSuccess: (state, action) => {
        state.data = action.payload;
        state.loading = false;
        },
        fetchError: (state, action) => {
        state.error = action.payload;
        state.loading = false;
        },
        clearData: state => {
        state.data = null;
        state.error = null;
        },
    },
});

export const { fetchStart, fetchSuccess, fetchError, clearData } = swapiSlice.actions;

export const fetchPeople = () => async dispatch => {
    try {
        dispatch(fetchStart());
        const res = await axios.get('https://swapi.tech/api/people');
        dispatch(fetchSuccess(res.data.results));
    } catch (err) {
        dispatch(fetchError(err.message));
    }
};

export default swapiSlice.reducer;
