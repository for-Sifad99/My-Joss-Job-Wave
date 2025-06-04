import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/UseAuth';
import myJobsPromise from '../../api/jobsApi';
import Loader from '../Shared/Loader';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';


const MyJobs = () => {
    const { user } = useAuth();
    const [myJobs, setMyJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    // FETCH data in useEffect:
    useEffect(() => {
        const fetchJobsPromise = async () => {
            if (!user.email) return;
            setLoading(true);

            try {
                const res = await myJobsPromise(user.email);
                setMyJobs(res);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            };
        };

        fetchJobsPromise();
    }, [user.email]);

    // Set loading
    if (loading) return <Loader />;
    return (

        <>
            {/* Helmet */}
            <Helmet>
                <title>My Posted Jobs - Job Wave</title>
                <meta name="description" content="Review and manage all the jobs you've posted on Job Wave. Edit, update, or track applications easily with confidence." />
            </Helmet>


            {/* Content */}
            <section className='max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-6 px-6 md:px-6 md:py-8 py-10'>
                {/* Job Applications */}
                <main className="flex-1 md:p-8">
                    <div className="border-b dark:border-slate-400 pb-2 flex gap-6 overflow-x-auto">
                        <button className="md:text-base sm:text-xl text-base font-bold dark:text-slate-400 border-b-2 border-black dark:border-slate-400 pb-1 whitespace-nowrap">
                            My Posted Jobs
                        </button>
                    </div>

                    {myJobs.length == 0 ?
                        '' : <>
                            {/* Posted Jobs List */}
                            <div className="sm:overflow-x-scroll-none overflow-x-scroll w-full mx-auto mt-4">
                                <table className="table dark:text-[var(--color-dark-primary)]">
                                    {/* head */}
                                    <thead className='dark:text-[var(--color-dark-primary)]'>
                                        <tr>
                                            <th>Post</th>
                                            <th>Title</th>
                                            <th>Deadline</th>
                                            <th>Count</th>
                                            <th>View Posts</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myJobs.map((job, index) =>
                                            <tr key={job._id} className="bg-base-200 border-b border-gray-300 dark:border-gray-700 dark:bg-[#22313d]">
                                                <th>{index + 1}</th>
                                                <td>{job.title}</td>
                                                <td className='text-sm text-xs'>{job.applicationDeadline}</td>
                                                <td>{job.count}</td>
                                                <td><Link to={`/application/${job._id}`} >
                                                    <button type='submit' className="flex gap-1 text-xs sm:text-base md:text-sm items-center bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                                        View Posts
                                                    </button>
                                                </Link></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    }
                </main>
            </section >
        </>
    );
};

export default MyJobs;