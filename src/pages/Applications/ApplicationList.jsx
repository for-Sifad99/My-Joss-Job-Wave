import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router';

const ApplicationsList = () => {

    return (
        <>
            {/* Content */}
            <div className='not-visited:flex '>
                {/* Sidebar */}
                <aside className="ml-10 w-1/4 bg-white dark:bg-blue-400 p-6 shadow-md rounded">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="https://i.pravatar.cc/100"
                            alt="User"
                            className="w-24 h-24 rounded-full mb-4"
                        />
                        <h2 className="text-xl font-bold">Satvik Brown</h2>
                        <div className="mt-4 text-sm space-y-1">
                            <p className="flex items-center gap-1 text-gray-600 dark:font-semibold dark:text-black"><FaEnvelope /> satvik@mail.com</p>
                            <p className="flex items-center gap-1 text-gray-600 dark:font-semibold dark:text-black"><FaPhone /> 023456789</p>
                        </div>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            MINE RESUME HERE
                        </button>
                    </div>

                    {/* Sidebar Links */}
                    <nav className="mt-8 space-y-3">
                        <Link className="block px-4 py-2 bg-gray-200 dark:text-gray-800  rounded font-medium">Jobs applied (4)</Link>
                    </nav>
                </aside>

                {/* Job Applications */}
                <main className="flex-1 p-8">
                    <div className="mb-4 border-b dark:border-slate-400 pb-2 flex gap-6">
                        <button className="font-bold dark:text-slate-400 border-b-2 border-black dark:border-slate-400 pb-1">Jobs Applied</button>
                    </div>

                    {/* Applied Jobs List */}
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((_, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 p-4 shadow rounded">
                                <h3 className="text-2xl font-semibold">Sales Manager</h3>
                                <p className="text-base text-gray-600 dark:text-gray-500">Marriot Group • Los Angeles, CA</p>
                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                                    Shipt is a marketplace that provides fresh produce, household essentials, and more from trusted local stores...
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-gray-400">Applied: 12 day(s) ago</span>
                                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 text-sm">
                                        Read More
                                    </button>
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