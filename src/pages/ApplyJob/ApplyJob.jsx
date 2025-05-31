import React from 'react';
import { Helmet } from 'react-helmet-async';

const ApplyJob = () => {
    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Apply for Job - Job Wave</title>
                <meta name="description" content="Submit your job application through Job Wave and take the next step in your career journey. Apply now with confidence!" />
            </Helmet>


            {/* Content */}
            <section className='py-10'>
                <h1 className=' dark:text-[var(--color-dark-primary)]'>Apply Job!!</h1>
            </section>
        </>
    );
};

export default ApplyJob;