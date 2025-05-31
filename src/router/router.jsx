import React from 'react';
import {
    createBrowserRouter,
} from "react-router";
import PrivetRouter from '../router/PrivetRouter';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import JobDetails from '../pages/JobDetails/JobDetails';
import ApplyJob from '../pages/ApplyJob/ApplyJob';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import AllJobs from '../pages/AllJobs/AllJobs';
import AddJob from '../pages/AddJob/AddJob';
import Applications from '../pages/Applications/Applications';
import MyJobs from '../pages/MyJobs/MyJobs';
import Contact from '../pages/Contact/Contact';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Loader from '../pages/Shared/Loader';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/jobs/:id',
                Component: JobDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
                hydrateFallbackElement: <Loader />
            },
            {
                path: '/apply-job/:id',
                element: <PrivetRouter><ApplyJob /></PrivetRouter>,
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/jobs',
                Component: AllJobs
            },
            {
                path: '/add-job',
                Component: AddJob
            },
            {
                path: '/application/me',
                Component: Applications
            },
            {
                path: '/my-jobs',
                Component: MyJobs
            },
            {
                path: '/contact',
                Component: Contact
            },
        ]
    },
    {
        path: '/*',
        Component: ErrorPage
    },
]);

export default router;