import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
        {/* Helmet */}
            <Helmet>
                <title>Your Dream Job Awaits - Job Wave</title>
                <meta name="description" content="Job Wave is your one-stop job portal connecting job seekers and employers. Find jobs, apply online, and build your future today!" />
                <meta name="keywords" content="jobs, hiring, job portal, career, apply, employers, job seekers" />
                <meta name="author" content="Job Wave Team" />
            </Helmet>

            {/* Content */}
            <section className='h-[200px]'>
                <h1>Hello This is Home!</h1>
            </section>
        </>
    );
};

export default Home;