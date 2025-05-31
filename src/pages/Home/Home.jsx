import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
    const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json());

    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Find Your Dream Job - Job Wave</title>
                <meta name="description" content="Job Wave is a modern job portal for job seekers and employers. Discover opportunities, apply instantly, and surf your career forward!" />
            </Helmet>


            {/* Content */}
            <section>
                {/* Banner */}
                <Banner />

                {/* Hot jobs */}
                <Suspense fallback={<div className='flex flex-col mx-auto mt-12 justify-center items-center'><span className="loading loading-dots loading-xl" /></div>}>
                    <HotJobs jobsPromise={jobsPromise} />
                </Suspense>
            </section>
        </>
    );
};

export default Home;