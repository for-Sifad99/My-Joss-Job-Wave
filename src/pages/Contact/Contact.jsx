import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <>
        {/* Helmet */}
            <Helmet>
                <title>Contact Us - Job Wave</title>
                <meta name="description" content="Have questions or need help? Contact the Job Wave team today!" />
            </Helmet>

            {/* Content */}
            <section className='py-10'>
                <h1 className=' dark:text-[var(--color-dark-primary)]'>Contact!!</h1>
            </section>
        </>
    );
};

export default Contact;