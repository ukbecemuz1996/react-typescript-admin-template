import React from 'react';
import {
    RouteObject,
    NonIndexRouteObject,
    IndexRouteObject,
} from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';

// Lazy loading for icons
const DashboardIcon = React.lazy(() => import('@mui/icons-material/Dashboard'));
const DynamicFormIcon = React.lazy(
    () => import('@mui/icons-material/DynamicForm')
);
const DensityMediumIcon = React.lazy(
    () => import('@mui/icons-material/DensityMedium')
);

// Lazy loading for views
const Dashboard = React.lazy(() => import('./views/dashboard'));
const Form = React.lazy(() => import('./views/form/Form'));

// RouteObject addtional attributes
type RouteAdditionalProps = {
    sidebarTitle?: string;
    layout?: boolean;
    icon?: JSX.Element;
};

// Inherit NonIndexRouteObject type To Edit children attribute`s type
interface AppNonIndexRouteObject extends Omit<NonIndexRouteObject, 'children'> {
    children?: AppRouteObject[];
}

// New RouteObject type
type NewRouteObject = AppNonIndexRouteObject | IndexRouteObject;

// Combine NewRouteObject and RouteAdditionalProps in AppRouteObject type
export type AppRouteObject = NewRouteObject & RouteAdditionalProps;

// routes object is used for useRoutes hook and for sidebar
const routes: AppRouteObject[] = [
    {
        element: <AdminLayout />,
        layout: true,
        children: [
            {
                path: '/',
                element: <Dashboard />,
                sidebarTitle: 'Dashboard dewd edew',
                icon: <DashboardIcon />,
                children: [
                    {
                        element: <Dashboard />,
                        index: true,
                        sidebarTitle: 'One',
                        icon: <DensityMediumIcon />,
                    },
                ],
            },
            {
                path: '/form',
                sidebarTitle: 'Form',
                element: <Form />,
                icon: <DynamicFormIcon />,
                children: [
                    {
                        index: true,
                        element: <Form />,
                        sidebarTitle: 'Form one',
                        icon: <DensityMediumIcon />,
                    },
                    {
                        path: 'two',
                        element: <Form />,
                        sidebarTitle: 'Form Two',
                        icon: <DensityMediumIcon />,
                    },
                ],
            },
        ],
    },
];

export default routes;
