import React from 'react';
import { Helmet } from 'react-helmet-async';
import ApplicationsList from './ApplicationList';
import useAuth from '../../hooks/UseAuth';

const Applications = () => {
    const { user } = useAuth();

    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>My Applications - Job Wave</title>
                <meta name="description" content="View all your job applications submitted through Job Wave. Track your career journey!" />
            </Helmet>

            {/* Content */}
            <section className='py-10 text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)] bg-gray-100 dark:bg-[var(--color-section-bg)]'>
                    <ApplicationsList email={user.email} />
            </section>
        </>
    );
};

export default Applications;