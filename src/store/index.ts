import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch