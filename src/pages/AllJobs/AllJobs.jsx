import React from 'react';
import { Helmet } from 'react-helmet-async';

const AllJobs = () => {
    return (
        <>
        {/* Helmet */}
            <Helmet>
                <title>All Job - Job Wave</title>
                <meta name="description" content="Browse all available job listings on Job Wave. Filter, search, and find your perfect match!" />
            </Helmet>

            {/* Content */}
            <section className='my-10 h-[500px]'>
                <h1 className=' dark:text-[var(--color-dark-primary)]'>All Jobs!!</h1>
            </section>
        </>
    );
};

export default AllJobs;