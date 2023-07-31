import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { hideToast } from '../../store/toast.slice';

type Props = {
    message: string;
    variant: 'error' | 'warning' | 'info' | 'success';
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
    open: boolean;
    handleClose: Function;
};

const Toast: React.FC = () => {
    const dispatch = useAppDispatch();

    const toast = useAppSelector((state) => state.toast);

    const handleClose = () => {
        dispatch(hideToast());
    };
    return (
        <Snackbar
            anchorOrigin={{
                vertical: toast.vertical ? toast.vertical : 'top',
                horizontal: toast.horizontal ? toast.horizontal : 'left',
            }}
            autoHideDuration={3000}
            open={toast.open}
            onClose={handleClose}
        >
            <Alert
                severity={toast.variant}
                onClose={handleClose}
                sx={{ width: '300px' }}
            >
                {toast.message}
            </Alert>
        </Snackbar>
    );
};

export default Toast;
