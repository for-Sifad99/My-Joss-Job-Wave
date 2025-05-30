import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddJob = () => {
    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Add a Job - Job Wave</title>
                <meta name="description" content="Post a new job on Job Wave and connect with the right candidates in minutes." />
            </Helmet>

            {/* Content */}
            <section className='py-10'>
                <h1 className=' dark:text-[var(--color-dark-primary)]'>Add Job!!</h1>
            </section>
        </>
    );
};

export default AddJob;