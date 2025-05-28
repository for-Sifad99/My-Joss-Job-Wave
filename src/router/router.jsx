import React from 'react';
import Home from '../pages/Home/Home'
import {
    createBrowserRouter,
} from "react-router";
import Root from '../layouts/Root';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index: true, Component: Home}
        ]
    },
]);

export default router;