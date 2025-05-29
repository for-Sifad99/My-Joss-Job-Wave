import React from 'react';
import Home from '../pages/Home/Home'
import {
    createBrowserRouter,
} from "react-router";
import Root from '../layouts/Root';
import AllJobs from '../pages/AllJobs/AllJobs';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: '/register', Component: Register },
            { path: '/login', Component: Login },
            { path: '/jobs', Component: AllJobs },

        ]
    },
]);

export default router;