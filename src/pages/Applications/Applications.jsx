import React from 'react';
import { Helmet } from 'react-helmet-async';

const Applications = () => {
    return (
        <>
        {/* Helmet */}
            <Helmet>
                <title>My Applications - Job Wave</title>
                <meta name="description" content="View all your job applications submitted through Job Wave. Track your career journey!" />
            </Helmet>

            {/* Content */}
            <section className='py-10'>
                <h1 className=' dark:text-[var(--color-dark-primary)]'>My Applications!!</h1>
            </section>
        </>
    );
};

export default Applications;