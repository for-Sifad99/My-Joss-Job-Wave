import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const inputStyle =
    "w-full border-3 border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 md:mb-[10px] sm:mb-2 mb-2";

const AddJob = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const jobData = Object.fromEntries(formData.entries());
        console.log("Submitted form data:", jobData);
    };

    return (
        <section className="flex mx-auto max-w-7xl md:flex-row flex-col lg:px-6 md:px-24 sm:px-10 px-6 py-8 text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)]">
            <form
                onSubmit={handleSubmit}
                className="lg:min-w-3xl md:min-w-full sm:max-w-xl xl:mx-0 max-w-[400px] w-full mx-auto"
            >
                <h2 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-center md:text-start uppercase md:mb-4 sm:mb-5 mb-3">
                    Add Job
                </h2>
                {/* Company Name */}
                <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className={inputStyle}
                />

                {/* Job Title */}
                <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    className={inputStyle}
                />

                {/* Job Location */}
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className={inputStyle}
                />

                {/* Company Logo */}
                <input
                    type="url"
                    name="company_logo"
                    placeholder="Company Logo URL"
                    className={inputStyle}
                />

                <div className="flex sm:flex-row flex-col gap-2 md:items-center w-full">
                    {/* Job category */}
                    <select defaultValue="Pick a category" name="category" className={`${inputStyle} select dark:text-gray-400 dark:bg-[var(--color-section-bg)] w-full md:w-1/2`}>
                        <option disabled={true}>Pick a category</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Hybrid</option>
                    </select>

                    {/* Application Deadline */}
                    <input type="date" name='applicationDeadline' className={`${inputStyle} input dark:text-gray-400 dark:bg-[var(--color-section-bg)] w-full md:w-1/2`} />
                </div>

                {/* SALARY */}
                    <div className="flex sm:flex-row flex-col sm:gap-2 sm:items-center w-full">
                        {/* Minimum Salary */}
                        <input
                            type="text"
                            name="min"
                            placeholder="Salary Min"
                            className={`${inputStyle} w-1/3`}
                        />
                        {/* Maximum Salary */}
                        <input
                            type="text"
                            name="max"
                            placeholder="Salary Max"
                            className={`${inputStyle} w-1/3`}
                        />
                        {/* Currency */}
                    <select defaultValue="Pick a currency" name="currency" className={`${inputStyle} dark:text-gray-400 dark:bg-[var(--color-section-bg)] select w-1/3 md:w-1/2`}>
                            <option disabled={true}>Pick a currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>$</option>
                        </select>
                    </div>

                {/* Job Description */}
                <textarea
                    name="description"
                    placeholder="Write a simple job description"
                    rows={4}
                    className={`${inputStyle} md:text-base sm:text-sm text-xs -mb-2`}
                />

                {/* Job Requirements */}
                <textarea
                    name="requirements"
                    placeholder="Write job requirements separated by comma ( ;)"
                    rows={4}
                    className={`${inputStyle} md:text-base sm:text-sm text-xs -mb-2`}
                />

                {/* Job Responsibilities */}
                <textarea
                    name="responsibilities"
                    placeholder="Write job responsibilities separated by comma ( ;)"
                    rows={4}
                    className={`${inputStyle} md:text-base sm:text-sm text-xs -mb-2`}
                />

                {/* HR Name */}
                <input
                    type="text"
                    name="hr_name"
                    placeholder="HR Name"
                    className={inputStyle}
                />

                {/* HR Email */}
                <input
                    type="text"
                    name="hr_email"
                    placeholder="HR Email"
                    className={inputStyle}
                />

                {/* Job Type */}
                <div>
                    <div className='filter mb-4 space-y-1'>
                        <input className="btn md:btn-md sm:btn-base btn-sm btn-square" type="reset" value="✖" />
                        <input className="btn md:btn-md sm:btn-base btn-sm" type="radio" name="jobType" aria-label="Engineering" defaultValue='Engineering' />
                        <input className="btn md:btn-md sm:btn-base btn-sm" type="radio" name="jobType" aria-label="Development" defaultValue='Development' />
                        <input className="btn md:btn-md sm:btn-base btn-sm" type="radio" name="jobType" aria-label="Freelance" defaultValue='Freelance' />
                        <input className="btn md:btn-md sm:btn-base btn-sm" type="radio" name="jobType" aria-label="Marketing" defaultValue='Marketing' />
                        <input className="btn md:btn-md sm:btn-base btn-sm" type="radio" name="jobType" aria-label="Data Science" defaultValue='Data Science' />
                    </div>
                </div>

                {/* Add Button */}
                <button
                    type="submit"
                    className="group w-full flex justify-center gap-1 items-center px-6 xl:py-3 lg:py-3 md:py-3 py-2 bg-[#3c65f5] text-white rounded-md hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300"
                >
                    Add Job <FaPaperPlane className="transition-all duration-300 group-hover:translate-x-1" />
                </button>
            </form>
        </section>
    );
};

export default AddJob;
