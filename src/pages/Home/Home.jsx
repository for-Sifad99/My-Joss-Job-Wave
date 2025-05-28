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
            <section className='h-[500px] my-20'>
                <h1 className=''>Hello This is Home!</h1>
            </section>
        </>
    );
};

export default Home;