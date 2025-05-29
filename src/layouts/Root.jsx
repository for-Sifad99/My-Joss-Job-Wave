import React from 'react';
import { Outlet } from 'react-router';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { ThemeProvider } from '../contexts/ThemeContexts/ThemeContext';


const Root = () => {
    return (
        <ThemeProvider>
            <section className='dark:bg-[var(--color-bg)]'>
                <Header />
                <section className='dark:bg-[var(--color-section-bg)]'>
                    <Outlet />
                </section>
                <Footer />
            </section>
       
        </ThemeProvider>
    );
};

export default Root;