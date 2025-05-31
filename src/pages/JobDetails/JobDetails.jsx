import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const { _id, company_logo, title, company, location, applicationDeadline, jobType, category, salaryRange, description, requirements, responsibilities, status, hr_email,he_name } = useLoaderData();
    
    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Job Details - Job Wave</title>
                <meta name="description" content="Explore detailed job information, responsibilities, requirements, and how to apply on Job Wave." />
            </Helmet>


            {/* Content */}
            <section className='py-10'>
                <h1 className='text-center dark:text-[var(--color-dark-primary)]'>Job Details!!</h1>
                <div className='flex justify-center items-center text-3xl text-center dark:text-[var(--color-dark-primary)]'>
                    <img src={company_logo} alt={company} />
                    <h1 className=' dark:text-[var(--color-dark-primary)]'>{title}</h1>
                </div>
            </section>
        </>
    );
};

export default JobDetails;