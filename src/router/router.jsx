import React from 'react';
import Home from '../pages/Home/Home'
import {
    createBrowserRouter,
} from "react-router";
import Root from '../layouts/Root';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import AllJobs from '../pages/AllJobs/AllJobs';
import AddJob from '../pages/AddJob/AddJob';
import Applications from '../pages/Applications/Applications';
import MyJobs from '../pages/MyJobs/MyJobs';
import Contact from '../pages/Contact/Contact';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: '/register', Component: Register },
            { path: '/login', Component: Login },
            { path: '/jobs', Component: AllJobs },
            { path: '/add-job', Component: AddJob },
            { path: '/application/me', Component: Applications },
            { path: '/my-jobs', Component: MyJobs },
            { path: '/contact', Component: Contact},
        ]
    },
    { path: '/*', Component: ErrorPage },
]);

export default router;