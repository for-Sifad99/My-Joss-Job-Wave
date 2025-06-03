import { use } from "react";
import { FaBriefcase, FaCode, FaMicrochip, FaGlobe, FaDesktop, FaBoxOpen, FaUser } from "react-icons/fa";
import { Link } from "react-router";
import JobsCard from "./JobsCard";

const HotJobs = ({ jobsPromise }) => {
    const jobs = use(jobsPromise);

    return (
        <div className="bg-white dark:bg-[var(--color-section-bg)] text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)] max-w-7xl mx-auto lg:px-6 md:px-26 sm:px-12 px-6 py-10">
            <h2 className="sm:text-3xl text-2xl font-bold text-center sm:mb-2 mb-1">Jobs of the day</h2>
            <p className="text-center sm:text-base text-sm text-gray-600 dark:text-gray-400 sm:mb-6 mb-4">
                Search and connect with the right candidate faster.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center md:gap-3 gap-2 sm:mb-10 mb-8">
                <button className="bg-blue-100 text-blue-700 md:px-4 sm:px-4 px-3 sm:py-2 py-1 rounded-full md:text-base sm:text-sm text-xs flex items-center sm:gap-2 gap-1">
                    <FaBriefcase /> Management
                </button>
                <button className="bg-gray-100 dark:bg-gray-200 text-gray-700 md:px-4 sm:px-4 px-3 sm:py-2 py-1 rounded-full md:text-base sm:text-sm text-xs flex items-center sm:gap-2 gap-1">
                    Marketing & Sale
                </button>
                <button className="bg-gray-100 dark:bg-gray-200 text-gray-700 md:px-4 sm:px-4 px-3 sm:py-2 py-1 rounded-full md:text-base sm:text-sm text-xs flex items-center sm:gap-2 gap-1">
                    Human Resource
                </button>
                <button className="bg-gray-100 dark:bg-gray-200 text-gray-700 md:px-4 sm:px-4 px-3 sm:py-2 py-1 rounded-full md:text-base sm:text-sm text-xs flex items-center sm:gap-2 gap-1">
                    Retail & Products
                </button>
                <button className="bg-gray-100 dark:bg-gray-200 text-gray-700 md:px-4 sm:px-4 px-3 sm:py-2 py-1 rounded-full md:text-base sm:text-sm text-xs flex items-center sm:gap-2 gap-1">
                    Content Writer
                </button>
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {jobs.map((job) => (
                    <JobsCard job={job} key={job._id} />
                ))}
            </div>
        </div>
    );
};

export default HotJobs;