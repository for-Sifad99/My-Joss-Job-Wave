import React from "react";
import { FaSearch } from "react-icons/fa";;
import { motion } from "motion/react";
import team1 from '../../assets/team/team1.png';
import team2 from '../../assets/team/team2.png';


const Banner = () => {

    return (
        <div className="relative bg-[#f2f6ff] dark:bg-[var(--color-section-bg)] text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)] w-full">
            {/* Main Container */}
            <div className="max-w-7xl mx-auto lg:px-4 md:px-24 sm:px-10 px-4 lg:pt-0 lg:pb-14 sm:py-10 py-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="text-center lg:text-left">
                    <h1 className="text-3xl xl:text-5xl lg:text-3xl sm:text-4xl font-bold leading-tight">
                        The  <motion.span animate={
                            {
                                color: ['#93abf9', '#789df7', '#5877f7', '#3659e7', '#8F87F1'],
                                transition: { duration: 3, repeat: Infinity }
                            }
                        }>
                            {' '}Easiest Way
                        </motion.span>
                        <br /> to Get Your New Job
                    </h1>
                    <p className="text-sm sm:text-base lg:text-sm xl:text-base text-[var(--color-text-copy)] dark:text-gray-400 sm:mt-4 mt-2">
                        Join millions of job seekers who trust us every month to discover new opportunities, with over 140,000 applications submitted daily.
                    </p>

                    {/* Search Box */}
                    <div className="xl:mt-5 lg:mt-3 sm:mt-4 mt-3 bg-white rounded-xl shadow-md p-2 flex items-center gap-4">
                        {/* Keyword */}
                        <div className="flex items-center gap-2 text-gray-500 flex-1">
                            <FaSearch className="ml-2" />
                            <input
                                type="text"
                                placeholder="Your keyword..."
                                className="outline-none w-full bg-transparent"
                            />
                        </div>
                        {/* Search Button */}
                        <button className="group flex gap-1 items-center px-6 xl:py-3 lg:py-3 md:py-3 py-2 bg-[#3c65f5] text-white rounded-md  hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 hover:rotate-4">Search <FaSearch className='transition-all duration-300 group-hover:translate-x-1' /> </button>
                    </div>

                    {/* Popular Searches */}
                    <div className="text-xs sm:text-sm  text-[var(--color-text-copy)] dark:text-gray-400 mt-3">
                        Popular Searches: <span className="underline">Designer</span>, Web, iOS, Developer, PHP, Senior, Engineer
                    </div>
                </motion.div>

                {/* Right Image */}
                <div className="hidden lg:block">
                    <motion.img
                        animate={
                            {
                                y: [70, 100, 70],
                                transition: { duration: 8, repeat: Infinity }
                            }
                        }
                        src={team1}
                        alt="team1 picture"
                        className="w-[55%] rounded-lg shadow-md"
                    />
                    <motion.img
                        animate={
                            {
                                x: [140, 200, 140],
                                transition: { duration: 5, repeat: Infinity }
                            }
                        }
                        src={team2}
                        alt="team2 picture"
                        className="w-[50%] rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;