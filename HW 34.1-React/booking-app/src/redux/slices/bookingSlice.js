import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formData: null,
    hotels: [],
    loading: false,
    error: null,
};

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        sendBookingRequest: (state, action) => {
        state.loading = true;
        state.formData = action.payload;
        state.error = null;
        },
        sendBookingSuccess: (state, action) => {
        state.loading = false;
        state.hotels = action.payload;
        },
        sendBookingFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        },
        clearBooking: () => initialState,
    },
});

export const {
    sendBookingRequest,
    sendBookingSuccess,
    sendBookingFailure,
    clearBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
