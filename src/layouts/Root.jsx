import React from 'react';
import { Outlet } from 'react-router';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { ThemeProvider } from '../contexts/ThemeContext';


const Root = () => {
    return (
        <ThemeProvider>
            <section className='dark:bg-[var(--color-bg)]'>
                <Header />
                <Outlet />
                <Footer />
            </section>
       
        </ThemeProvider>
    );
};

export default Root;