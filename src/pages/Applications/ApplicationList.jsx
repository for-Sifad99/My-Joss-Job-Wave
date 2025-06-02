import React, { use } from 'react';
import { AiFillRead } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md"
import { Link } from 'react-router';


const ApplicationsList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise);

    return (
        <>
            {/* Content */}
            <div className='max-w-7xl mx-auto not-visited:flex pl-6'>
                {/* Sidebar */}
                <aside className="w-1/4 bg-white dark:bg-[#263949] py-16 px-10 shadow-md rounded space-y-8">
                    {/* Salary Range Filter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Salary range</h3>
                        <div className="space-y-2 text-sm">
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
                        <h3 className="text-lg font-semibold mb-3">Location</h3>
                        <div className="space-y-2 text-sm">
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
                        <h3 className="text-lg font-semibold mb-3">Work type</h3>
                        <div className="space-y-2 text-sm">
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
                        <h3 className="text-lg font-semibold mb-3">Work Category</h3>
                        <div className="space-y-2 text-sm">
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
                    <div className='mt-8'>
                        <nav>
                            <Link className="block px-2 py-2 bg-gray-200 dark:text-gray-800  rounded font-medium">Jobs applied ({applications.length})</Link>
                        </nav>
                        <nav className="mt-2">
                            <Link className="block px-2 py-2 bg-gray-200 dark:text-gray-800  rounded font-medium">Jobs saved (0)</Link>
                        </nav>
                    </div>
                </aside>

                {/* Job Applications */}
                <main className="flex-1 p-8">
                    <div className="mb-4 border-b dark:border-slate-400 pb-2 flex gap-6">
                        <button className="font-bold dark:text-slate-400 border-b-2 border-black dark:border-slate-400 pb-1">Jobs Applied</button>
                    </div>

                    {/* Applied Jobs List */}
                    <div className="space-y-4">
                        {applications.map(({
                            _id, applicantName, applicantPhoto, description, company_logo, company, jobType, category, location }) => (

                            <div key={_id} className="bg-white dark:bg-gray-800 p-4 shadow rounded">

                                <div className='flex items-center gap-2'>
                                    <img src={company_logo} className='w-10' alt="Company logo" />
                                    <h3 className="text-2xl font-semibold">{company}</h3>
                                </div>


                                <p className="text-base text-gray-600 dark:text-gray-500">{jobType} <span className='font-bold text-xl'>.</span> {location}</p>
                                <p className="w-3/4 mt-3 text-sm text-gray-500 dark:text-gray-400">
                                    {description}
                                </p>
                                <div className="flex justify-between items-center mt-2">
                                    <div className='flex gap-4 items-center'>
                                        <div className='flex items-center gap-2'>
                                            <img src={applicantPhoto} className='w-8 h-8 rounded-full' alt="Applicant picture" />
                                            <h3 className="text-lg font-semibold">{applicantName}</h3>

                                        </div>
                                        <span className="text-xs text-gray-500">Category: {category}</span>
                                    </div>

                                    {/* Read more and Delete Button */}
                                    <div className='flex items-center gap-3'>
                                        <button className="flex gap-1 items-center bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 text-sm">
                                            Read More <AiFillRead />
                                        </button>
                                        <button className="flex gap-1 items-center bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 text-sm">
                                            Delete <MdDeleteSweep />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
};

export default ApplicationsList;