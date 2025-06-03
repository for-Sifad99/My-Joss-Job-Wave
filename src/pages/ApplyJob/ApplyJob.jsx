import React from "react";
import { Helmet } from 'react-helmet-async';
import { FaHome, FaPaperPlane } from "react-icons/fa";
import useAuth from '../../hooks/UseAuth';
import { motion } from "framer-motion";
import bannerImg from '../../assets/apply-job-banner.png';
import { Link, useParams } from "react-router";
import { Typewriter } from 'react-simple-typewriter';
import Lottie from "lottie-react";
import jobApplyLottie from '../../assets/lotties/jobApply.json';
import axios from "axios";
import Swal from "sweetalert2";

const ApplyJob = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);

        // Job Applicator information
        const application = {
            jobId: id,
            applicantName: data.name,
            applicantEmail: user.email,
            applicantPhone: data.phone,
            applicantResume: data.resume,
            applicantGithub: data.github,
            applicantLinkedIn: data.linkedin,
            applicantCoverLetter: data.coverLetter,
            applicantPhoto: data.photo,
        };
        // console.log(application);

        // Post the application to DB
        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Congratulations! Apply DONE."
                    });
                };
            })
            .catch(error => {
                console.log(error);
            })

    };
    // input filed styles
    const inputStyle = "w-full p-3 border-3 border-gray-300 dark:border-gray-700 dark:text-gray-400 rounded-lg focus:outline-blue-500 dark:focus:outline-blue-900";

    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Apply for Job - Job Wave</title>
                <meta name="description" content="Submit your job application through Job Wave and take the next step in your career journey. Apply now with confidence!" />
            </Helmet>

            {/* Banner Section */}
            <div className="relative">
                <img
                    src={bannerImg}
                    alt="Apply Job Banner"
                    className="w-full sm:h-full h-32 bg-cover rounded-b-2xl shadow-lg"
                />

                {/* Animated Text Box */}
                <div className="absolute top-1/2 left-6 transform -translate-y-1/2 max-w-md">
                    <h1 className="text-lg md:text-5xl sm:text-3xl font-bold text-white md:mb-4 sm:mb-2 mb-1">
                        <Typewriter
                            words={['Apply For This Job']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={80}
                            deleteSpeed={60}
                            delaySpeed={1000}
                        />
                    </h1>
                    <p className="text-slate-200 sm:text-base text-[10px] sm:pr-0 pr-2 font-medium md:mb-3 sm:mb-2 mb-1">
                        Fill out the form below to submit your application and take the first step toward your dream job!
                    </p>
                    <Link to={`/jobs/${id}`}>
                        <button className="bg-blue-600 sm:text-base text-xs text-white sm:px-4 px-2 py-[3px] sm:py-2 rounded-lg flex items-center sm:gap-2 gap-1 shadow-md hover:bg-blue-700 transition mb-1">
                            <FaPaperPlane /> Job Details
                        </button>
                    </Link>
                </div>

                {/* Home Button */}
                <Link to='/'>
                    <button
                        className="absolute bottom-2 right-4 bg-white sm:text-sm text-[8px] text-blue-600 flex items-center sm:gap-2 gap-1 sm:px-4 px-[6px] sm:py-2 py-[3px] rounded-lg shadow-md hover:bg-blue-50 transition"
                    >
                        <FaHome /> Home
                    </button>
                </Link>
            </div>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto lg:px-6 md:px-26 sm:px-12 px-6 py-8 md:pb-0 sm:py-12 md:pt-14 lg:pt-18 xl:pt-20 text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)]">
                <motion.div
                    className=""
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    {/* Form Content */}
                    <section className="flex md:flex-row flex-col justify-between">
                        {/* Left content (form) */}
                        <form onSubmit={handleSubmit} className="space-y-4 w-full mx-auto">
                            {/* Form header */}
                            <h2 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-center md:text-start uppercase md:mb-4 sm:mb-5 mb-3">
                                Apply - Now
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Name */}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                    className={inputStyle}
                                />

                                {/* Phone number */}
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="PH Number"
                                    required
                                    className={inputStyle}
                                />
                            </div>

                            {/* Resume */}
                            <input
                                type="URL"
                                name="resume"
                                placeholder="Resume Link"
                                required
                                className={inputStyle}
                            />

                            {/* Github */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="url"
                                    name="github"
                                    placeholder="GitHub Link"
                                    className={inputStyle}
                                />

                                {/* Linkedin */}
                                <input
                                    type="url"
                                    name="linkedin"
                                    placeholder="LinkedIn Link"
                                    className={inputStyle}
                                />
                            </div>

                            {/* Cover letter */}
                            <textarea
                                name="coverLetter"
                                rows="4"
                                placeholder="Write your cover letter here..."
                                className={inputStyle}
                            ></textarea>

                            {/* Photo */}
                            <div>
                                <label className="block mb-1 font-medium">Upload Your Photo</label>
                                <input
                                    type="url"
                                    name="photo"
                                    placeholder="photo Url"
                                    className={inputStyle}
                                />
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                className="group w-full flex justify-center gap-1 items-center px-6 xl:py-3 lg:py-3 md:py-3 py-2 bg-[#3c65f5] text-white rounded-md  hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300">
                                Apply Now <FaPaperPlane className='transition-all duration-300 group-hover:translate-x-1' />
                            </button>
                        </form>

                        {/* Right content (lottie) */}
                        <div className="lg:w-full md:w-sm md:flex hidden flex-col items-center justify-center">
                            {/* Lottie header */}
                            <p className="xl:ml-16 lg:ml-10 ml-6 font-medium text-sm lg:text-base text-gray-600 dark:text-gray-400">
                                You can apply for multiple jobs to increase your chances. Browse all available <Link to='/jobs' className="underline text-blue-400"> Listing Jobs </Link> that match your skills and passion.
                            </p>

                            {/* Lottie Animation */}
                            <Lottie animationData={jobApplyLottie} />
                        </div>
                    </section>
                </motion.div>
            </section>
        </>
    );
};

export default ApplyJob;












