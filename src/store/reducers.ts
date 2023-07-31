import { combineReducers } from 'redux';
import sidebarReducer from './sidebar.slice';
import toastReducer from './toast.slice';

export const reducers = combineReducers({
    sidebar: sidebarReducer,
    toast: toastReducer,
});
