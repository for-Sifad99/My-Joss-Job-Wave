import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
        {/* Helmet */}
            <Helmet>
                <title>Find Your Dream Job - Job Wave</title>
                <meta name="description" content="Job Wave is a modern job portal for job seekers and employers. Discover opportunities, apply instantly, and surf your career forward!" />
            </Helmet>


            {/* Content */}
            <section className='my-10 h-[500px]'>
                <h1 className=' dark:text-[var(--color-dark-primary)]'>Home!!</h1>
            </section>
        </>
    );
};

export default Home;