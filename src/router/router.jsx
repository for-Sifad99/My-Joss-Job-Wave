import React from 'react';
import Home from '../pages/Home/Home'
import {
    createBrowserRouter,
} from "react-router";
import Root from '../layouts/Root';
import AllJobs from '../pages/AllJobs/AllJobs';
import Register from '../pages/Register/Register';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index: true, Component: Home},
            { path: '/register', Component: Register },
            {path : '/jobs', Component: AllJobs},

        ]
    },
]);

export default router;