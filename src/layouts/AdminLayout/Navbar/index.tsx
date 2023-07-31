// Default imports
import React from 'react';

// Not default imports
import { Dashboard, Menu, Notifications } from '@mui/icons-material';
import { IconButton, Stack, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// <!-- imports inside project --!>
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { closeSidebar, openSidebar } from '../../../store/sidebar.slice';

// Navbar component of type FunctionComponent
const Navbar: React.FunctionComponent = () => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const sidebarClosed = useAppSelector((state) => state.sidebar.closed);

    const toggleSidebar = () => {
        if (sidebarClosed) {
            dispatch(openSidebar());
        } else {
            dispatch(closeSidebar());
        }
    }

    return (
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Stack direction={'row'} spacing={1}>
                <IconButton onClick={() => toggleSidebar()}>
                    <Menu />
                </IconButton>

                <Link component="button" onClick={() => navigate('/')}>Home</Link>
                <Link component="button" onClick={() => navigate('/form')}>Form</Link>
            </Stack>
            <Stack direction={'row'} spacing={1}>
                <IconButton>
                    <Notifications />
                </IconButton>
                <IconButton>
                    <Dashboard />
                </IconButton>
            </Stack>
        </Stack >
    );
};

export default Navbar;