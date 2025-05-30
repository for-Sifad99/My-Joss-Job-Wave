import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';

const Home = () => {
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
            </section>
        </>
    );
};

export default Home;