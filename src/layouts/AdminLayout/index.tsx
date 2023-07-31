import { Box, Collapse } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';


const AdminLayout: React.FunctionComponent = () => {



    const sidebarClosed = useAppSelector((state) => state.sidebar.closed);

    return (
        <>
            <Box
                minHeight={'100vh'}
                display={"grid"}
                columnGap={0.5}
                gridTemplateColumns={"min-content 1fr"}
            >
                <Box gridColumn={'1/2'}>
                    <Collapse orientation={'horizontal'} in={sidebarClosed}>
                        <Sidebar />
                    </Collapse>
                </Box>

                <Box gridColumn={'2/3'} display={"grid"} gridTemplateRows={"minmax(100px,auto) 1fr minmax(200px,auto)"}>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </Box>
            </Box>
        </>
    );
};

export default AdminLayout;