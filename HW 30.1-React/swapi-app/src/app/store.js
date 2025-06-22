import { configureStore } from '@reduxjs/toolkit';
import swapiReducer from '../features/swapiSlice';

export const store = configureStore({
    reducer: {
        swapi: swapiReducer,
    }
});
