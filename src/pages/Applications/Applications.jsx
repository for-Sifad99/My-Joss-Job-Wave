import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { AiFillRead } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md"
import { Link } from 'react-router';
import myApplicationsPromise from '../../api/applicationsApi';
import Loader from '../Shared/Loader';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/UseAuth';

const Applications = () => {
    const { user } = useAuth();
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    // FETCH DATA in UseEffect
    useEffect(() => {
        const fetchApplications = async () => {
            if (!user.email) return;
            setLoading(true);

            try {
                const res = await myApplicationsPromise(user.email);
                setApplications(res);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, [user.email]);


    const handleDelete = async (_id) => {
        try {
            // Sweet Alert :
            Swal.fire({
                title: "Are you sure?",
                text: "You want to Delete!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Delete"
            })
                .then(async (result) => {
                    if (result.isConfirmed) {
                        // Delete From Db by axios
                        const res = await axios.delete(`http://localhost:3000/applications/${_id}`);
                        if (res.data?.deletedCount > 0 || res.data?.success) {
                            // console.log('Deleted Successfully', res);
                            const updated = applications.filter(application => application._id !== _id);
                            setApplications(updated);

                            Swal.fire({
                                title: "Deleted!",
                                text: "This job application is deleted successfully.",
                                icon: "success"
                            });
                        };
                    };
                });
        } catch (error) {
            console.log(error);
        };
    };

    // set loading
    if (loading) return <Loader />;

    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>My Applications - Job Wave</title>
                <meta name="description" content="View all your job applications submitted through Job Wave. Track your career journey!" />
            </Helmet>

            {/* Content */}
            <section className='max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-6 px-6 md:px-6 md:py-8 py-10 text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)] bg-gray-100 dark:bg-[var(--color-section-bg)]'>

                {/* Sidebar */}
                <aside className="w-full md:w-1/4 bg-white dark:bg-[#263949] py-8 px-6 lg:px-10 shadow-md rounded space-y-8">

                    {/* Salary Range Filter */}
                    <div>
                        <h3 className="md:text-lg sm:text-4xl text-lg font-semibold mb-3">Salary range</h3>
                        <div className="space-y-2 md:text-sm sm:text-base text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" defaultChecked />
                                $10k - $50k
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                $50k - $100k
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                $100k - $150k
                            </label>
                        </div>
                    </div>

                    {/* Location Filter */}
                    <div>
                        <h3 className="md:text-lg sm:text-4xl text-lg font-semibold mb-3">Location</h3>
                        <div className="space-y-2 md:text-sm sm:text-base text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Dhaka
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" defaultChecked />
                                Chandpur
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Chittagong
                            </label>
                        </div>
                    </div>

                    {/* Work Type Filter */}
                    <div>
                        <h3 className="md:text-lg sm:text-4xl text-lg font-semibold mb-3">Work type</h3>
                        <div className="space-y-2 md:text-sm sm:text-base text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" defaultChecked />
                                Full-time
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Part-time
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Remote
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Hybrid
                            </label>
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div>
                        <h3 className="md:text-lg sm:text-4xl text-lg font-semibold mb-3">Work Category</h3>
                        <div className="space-y-2 md:text-sm sm:text-base text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" defaultChecked />
                                Development
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Engineering
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Marketing
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Freelance
                            </label>
                        </div>
                    </div>

                    {/* Applied and Saved Jobs LENGTH */}
                    <div className='mt-8 dark:text-gray-800 lg:text-base md:text-sm sm:text-xl text-sm'>
                        <nav>
                            <Link className="block bg-gray-200 px-2 py-2 rounded font-medium text-center md:text-left">Jobs applied ({applications.length})</Link>
                        </nav>
                        <nav className="mt-2">
                            <Link className="block bg-gray-200  px-2 py-2 rounded font-medium text-center md:text-left">Jobs saved (0)</Link>
                        </nav>
                    </div>
                </aside>

                {/* Job Applications */}
                <main className="flex-1 md:p-8">
                    <div className="mb-4 border-b dark:border-slate-400 pb-2 flex gap-6 overflow-x-auto">
                        <button className="md:text-base sm:text-xl text-base font-bold dark:text-slate-400 border-b-2 border-black dark:border-slate-400 pb-1 whitespace-nowrap">
                            Jobs Applied
                        </button>
                    </div>

                    {/* Applied Jobs List */}
                    <div className="space-y-4">
                        {applications.map(({
                            _id, applicantName, applicantPhoto, description, company_logo, company, jobType, category, location
                        }) => (
                            <div key={_id} className="bg-white dark:bg-gray-800 p-4 shadow rounded">
                                {/* Company logo and Title */}
                                <div className='flex items-center gap-2'>
                                    <img src={company_logo} className='md:w-10 sm:w-12 w-7 object-contain' alt="Company logo" />
                                    <h3 className="md:text-2xl sm:text-4xl text-xl font-semibold">{company}</h3>
                                </div>

                                {/* Job Type and Location */}
                                <p className="md:text-base sm:text-lg text-xs text-gray-600 dark:text-gray-500 sm:mt-1">
                                    {jobType} <span className='font-bold md:text-xl sm:text-2xl text-lg md:mx-2 sm:mx-3 mx-1'>.</span> {location}
                                </p>

                                {/* Job Description */}
                                <p className="w-full md:w-3/4 sm:mt-3 mt-2 md:text-sm sm:text-base text-xs text-gray-500 dark:text-gray-400">
                                    {description}
                                </p>

                                {/* Applicant Name , Photo AND Job category */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-3 gap-4">
                                    <div className='flex sm:flex-row flex-col sm:gap-4 gap-1 items-center'>
                                        <div className='flex items-center gap-2'>
                                            <img src={applicantPhoto} className='md:w-8 md:h-8 sm:w-10 sm:h-10 w-6 h-6 rounded-full object-cover' alt="Applicant picture" />
                                            <h3 className="md:text-lg sm:text-xl
                                            text-base font-semibold">{applicantName}</h3>
                                        </div>
                                        <span className="md:text-xs sm:tet-sm text-xs text-gray-500 whitespace-nowrap">Category: {category}</span>
                                    </div>

                                    {/* Read more and Delete Button */}
                                    <div className='flex items-center lg:gap-3 md:gap-1 gap-2 flex-row md:flex-col lg:flex-row text-xs sm:text-base md:text-sm'>
                                        <button type='submit' className="flex gap-1 items-center bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                            Read More <AiFillRead />
                                        </button>
                                        <button type='submit' onClick={() => handleDelete(_id)} className="flex gap-1 items-center bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                            Delete <MdDeleteSweep />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </section>
        </>
    );
};

export default Applications;