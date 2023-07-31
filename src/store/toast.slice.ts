import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IToastState {
    message: string;
    variant: 'error' | 'warning' | 'info' | 'success';
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'right';
    open: boolean;
}

const initialState: IToastState = {
    message: '',
    variant: 'success',
    vertical: 'top',
    horizontal: 'left',
    open: false,
};

export const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        showToast: (state, action: PayloadAction<IToastState>) => {
            state.open = true;
            state.message = action.payload.message;
            state.variant = action.payload.variant;
            state.vertical = action.payload.vertical;
            state.horizontal = action.payload.horizontal;
        },
        hideToast: (state) => {
            state.open = false;
        },
    },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
