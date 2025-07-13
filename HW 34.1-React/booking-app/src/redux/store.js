import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import bookingReducer from './slices/bookingSlice';
import rootSaga from './sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer,
    } = createReduxHistoryContext({
    history: createBrowserHistory(),
    });

    const rootReducer = combineReducers({
    router: routerReducer,
    booking: bookingReducer,
    });

    export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(routerMiddleware, sagaMiddleware),
});

export const history = createReduxHistory(store);

sagaMiddleware.run(rootSaga);

