import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { Link } from 'react-router';
import { motion } from "motion/react";

const JobsCard = ({ job }) => {
    const { _id, company_logo, title, company, location, applicationDeadline, jobType, salaryRange, description, requirements } = job;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className="border bg-[#fcfcfc] dark:bg-[#252a36]  border-blue-100 hover:border-3 dark:border-[#323e61] hover:-rotate-4 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
        >
            {/* Image, Company and Location */}
            <div className="flex items-center sm:gap-3 gap-2 sm:mb-4 mb-2">
                <img src={company_logo} className="sm:w-14 sm:h-14 w-12 h-12 sm:p-2 p-1 bg-gray-200 flex items-center justify-center rounded-full">
                </img>
                <div>
                    <h3 className="sm:text-xl text-base font-semibold">{company}</h3>
                    <p className="flex gap-1 items-center md:text-sm text-[11px]
                    text-gray-500 dark:text-gray-400"><FaMapMarkerAlt /> {location}</p>
                </div>
            </div>

            {/* Title, JobType and ApplicationDeadline */}
            <div className='md:mb-3 sm:mb-2 mb-1'>
                <h4 className="text-md font-semibold mb-[2px] hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)]">{title}</h4>
                <div className='flex items-center text-gray-500 dark:text-gray-400 sm:text-sm text-xs gap-5 mb-2'>
                    <p>{jobType}</p>
                    <p className="flex gap-1 items-center"><MdAccessTime />{applicationDeadline}</p>
                </div>
            </div>

            {/* Description */}
            <p className="sm:text-sm text-xs text-gray-800 dark:text-gray-300 md:mb-3  mb-2">{description}</p>

            {/* SalaryRange */}
            <span className="sm:text-base text-sm text-[var(--color-light-accent)] dark:text-[var(--color-dark-accent)] font-bold">{salaryRange.max} - {salaryRange.min}  <span className='sm:text-sm text-[10px] text-gray-500 dark:text-gray-400'>{salaryRange.currency} /mon </span></span>

            {/* Requirements */}
            <div className='flex md:gap-[6px] gap-1 items-center flex-wrap mt-1'> {requirements.map((requirement, index) => (<button key={index} className="bg-gray-100 dark:bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs ">
                {requirement}
            </button>))}</div>

            {/* Apply button */}
            <Link to={`/jobs/${_id}`}>
                <button className="flex justify-center text-white md:mt-4 mt-2 px-4 py-2 rounded  bg-[#3c65f5] hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 md:group-hover:-rotate-4 sm:group-hover:-rotate-3 group-hover:-rotate-2"> Apply Now</button>
                </Link>
        </motion.div>
    );
};

export default JobsCard;