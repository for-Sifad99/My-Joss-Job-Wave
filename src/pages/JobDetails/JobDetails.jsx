import React from 'react';
import { Helmet } from 'react-helmet-async';
import { GiClick } from 'react-icons/gi';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const { _id, company_logo, title, company, location, applicationDeadline, jobType, category, salaryRange, description, requirements, responsibilities, status, hr_email, he_name } = useLoaderData();

    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>{`${title} || 'Job Details'`} - Job Wave</title>
                <meta name="description" content="Explore detailed job information, responsibilities, requirements, and how to apply on Job Wave." />
            </Helmet>


            {/* Content */}
            <section className='py-10'>
                <h1 className='text-center dark:text-[var(--color-dark-primary)]'>Job Details!!</h1>
                <div className='flex justify-center items-center sm:text-3xl text-xl text-center dark:text-[var(--color-dark-primary)]'>
                    <img src={company_logo} className='sm:w-14 w-10' alt={company} />
                    <h1 className=' dark:text-[var(--color-dark-primary)]'>{title}</h1>
                </div>

                {/* Apply button */}
                <Link to={`/apply-job/${_id}`}>
                    <button className="min-w-min flex justify-center items-center mx-auto text-white md:mt-4 mt-2 px-4 py-2 rounded  bg-[#3c65f5] hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 group cursor-pointer"> Apply Job <GiClick className='mt-1 transition-all duration-200 group-hover:-translate-y-[2px] group-hover:-translate-x-[2px] ml-2 group-hover:ml-1' /></button>
                </Link>
            </section>
        </>
    );
};

export default JobDetails;