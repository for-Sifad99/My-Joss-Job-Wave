import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router';

const ViewApplications = () => {
    const { job_id } = useParams();
    const applications = useLoaderData();

    return <>
        {/* Helmet */}
        <Helmet>
            <title>View Applications | Job Wave</title>
            <meta name="description" content="Check how many posts you posted for this application. View post counts." />
        </Helmet>


        {/* Content */}
        <section className='max-w-7xl mx-auto text-[var(--color-text-primary)] dark:text-white gap-6 px-6 lg:px-4 md:px-24 sm:px-10 md:py-8 py-6'>
            <h1 className='lg:text-5xl sm:text-3xl text-xl font-bold'>A<span className='text-blue-400'>PP</span>LICATION- <br /><span className='lg:text-5xl sm:text-3xl text-base'>{job_id}</span></h1>
            <h1 className='md:tex-xl text-base'>Total Posts - <span className='text-blue-300 font-extrabold'>{applications.length}</span></h1>
        </section>
    </>

};

export default ViewApplications;