import React from 'react';
import Home from '../pages/Home/Home'
import {
    createBrowserRouter,
} from "react-router";
import Root from '../layouts/Root';
import AllJobs from '../pages/AllJobs/AllJobs';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index: true, Component: Home},
            {path : '/jobs', Component: AllJobs}
        ]
    },
]);

export default router;