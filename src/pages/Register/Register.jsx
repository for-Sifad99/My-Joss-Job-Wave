import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiEyeOff, FiEye } from "react-icons/fi";
import { Link } from "react-router";
import registerLottie from '../../assets/lotties/register.json';
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(photo, email, password);
    };

    return (
        <>
        {/* Helmet */}
            <Helmet>
                <title>Join Job Wave - Register</title>
                <meta name="description" content="Create your Job Wave account and unlock endless job opportunities tailored just for you." />
            </Helmet>


            <div className="flex md:flex-row flex-col-reverse items-center justify-center py-10 md:px-24">
                {/* Form Content */}
                <div className="bg-white dark:bg-[var(--color-text-copy)] border-2 border-[#ced8ff] dark:border-none shadow-xl rounded-[100px] sm:py-16 py-10 sm:px-10 px-6 w-full max-w-md mx-4">
                    <h2 className="sm:text-3xl text-[28px] font-bold text-center text-[var(--color-light-accent)] dark:text-slate-300 mb-6">Create Account!</h2>
                    <form onSubmit={handleRegister} className="space-y-5">
                        <div>
                            <label className="text-base block mb-1 font-bold text-[var(--color-light-accent)] dark:text-[var(--color-dark-accent)]">Photo Url</label>
                            <div className="relative">
                                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    name="photo"
                                    required
                                    placeholder="Photo Url"
                                    className="text-sm w-full pl-10 pr-3 py-2 rounded-2xl border-2 border-[var(--color-light-accent)] dark:[var(--color-dark-accent)] focus:outline-none focus:border-3 dark:bg-[#23272f] dark:text-slate-300"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-base block mb-1 font-bold text-[var(--color-light-accent)] dark:text-[var(--color-dark-accent)]">Email</label>
                            <div className="relative">
                                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="you@email.com"
                                    className="text-base w-full pl-10 pr-3 py-2 rounded-2xl border-2 border-[var(--color-light-accent)] dark:[var(--color-dark-accent)] focus:outline-none focus:border-3 dark:bg-[#23272f] dark:text-slate-300"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-base block mb-1 font-bold text-[var(--color-light-accent)] dark:text-[var(--color-dark-accent)]">Password</label>
                            <div className="relative">
                                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    required
                                    placeholder="Password"
                                    className="text-base w-full px-10 py-2 rounded-2xl border-2 border-[var(--color-light-accent)] dark:[var(--color-dark-accent)] focus:outline-none focus:border-3 dark:bg-[#23272f] dark:text-slate-300"
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    onClick={() => setShowPassword(!showPassword)}
                                    tabIndex={-1}
                                >
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="text-sm w-full py-2 bg-[var(--color-light-accent)] hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all duration-200"
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-600 dark:text-gray-300 sm:text-sm text-xs">
                        Already have an account? <Link to="/login" className="text-blue-800 dark:text-blue-400 underline animate-pulse">Log in</Link>
                    </p>
                </div>

                {/* Lottie Animation */}
                <Lottie animationData={registerLottie} className="w-full lg:max-w-md md:w-[440px] sm:max-w-md lg:mb-0 mb-8"></Lottie>
            </div>
        </>
    );
};

export default Register;
