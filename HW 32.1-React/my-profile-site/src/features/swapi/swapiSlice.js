import { createSlice } from '@reduxjs/toolkit';

const swapiSlice = createSlice({
    name: 'swapi',
    initialState: {
        people: [],
        loading: false,
        error: null
    },
    reducers: {
        loadPeople: (state) => {
        state.loading = true;
        state.error = null;
        },
        loadPeopleSuccess: (state, action) => {
        state.loading = false;
        state.people = action.payload;
        },
        loadPeopleFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        }
    }
});

export const { loadPeople, loadPeopleSuccess, loadPeopleFailure } = swapiSlice.actions;
export default swapiSlice.reducer;
