import './App.css';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import AppRoutes from './AppRoutes';
import Toast from './components/Toast';

const App: React.FunctionComponent = () => {
    return (
        <>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
            <Toast />
        </>
    );
};

export default App;
