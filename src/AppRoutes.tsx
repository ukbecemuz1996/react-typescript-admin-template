import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import routes from './routes';

const AppRoutes = () => {
    let element = useRoutes(routes);
    return (
        <Suspense fallback={<Loader />}>
            {element}
        </Suspense>
    )
};

export default AppRoutes;