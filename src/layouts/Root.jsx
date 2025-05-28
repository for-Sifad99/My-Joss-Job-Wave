import React from 'react';
import { Outlet } from 'react-router';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';


const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;