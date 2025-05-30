import React, { useContext, useState } from "react";
import { FiUser, FiMail, FiLock, FiEyeOff, FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import registerLottie from '../../assets/lotties/register.json';
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import { AuthContext } from "../../contexts/AuthContexts/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
    const { createUser, createGoogleUser, emailVerification, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState();


    const handleRegister = async (e) => {
        e.preventDefault();

        // Form data:
        const form = e.target;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const checkbox = form.checkbox.checked;
        console.log(photo, email, password, checkbox);

        // Checkbox empty validation
        if (!checkbox) {
            toast.warning("Please Accept terms! 🛑");
            return;
        }

        // password validation
        if (password.length < 6) return setError("Password must be at least 6 characters!");
        if (!/[A-Z]/.test(password)) return setError("Include at least one uppercase letter!");
        if (!/[a-z]/.test(password)) return setError("Include at least one lowercase letter!");
        if (!/[0-9]/.test(password)) return setError("Include at least one number!");
        if (!/[!@#$%^&*]/.test(password)) return setError("Include at least one special character!");

        //? Create User:
        try {
            await createUser(email, password);
            
            // Send Email Verification
            await emailVerification();

            // Sweet Alert:
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Account created! Please check your email to verify."
            });

            setTimeout(async () => {
                await signOutUser();
                navigate('/login')
            }, 3000);
        } 
        catch (error) {
            // Error handling :
            if (error.code === 'auth/email-already-in-use') {
                toast.error('This email is already in use. Please use a different one.');
            } else if (error.code === 'auth/invalid-email') {
                toast.error('Invalid email address. Please enter a valid email.');
            } else if (error.code === 'auth/weak-password') {
                toast.error('Password should be at least 6 characters long.');
            } else {
                toast.error('Something went wrong. Please try again later!');
            };
        };
    };


    const handleGoogleUser = async (e) => {
        e.preventDefault();

        //? Create User with Google:
        try {
            await createGoogleUser();
            
            // Sweet Alert :
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
                title: "Account created! Please check your email to verify."
            });

            setTimeout(async () => {
                await signOutUser();
                navigate('/login')
            }, 3000);
        } 
        catch (error) {
            // Firebase Google Sign-In error handling :
            if (error.code === 'auth/popup-closed-by-user') {
                toast.error('You closed the popup before completing the sign-in.');
            } else if (error.code === 'auth/cancelled-popup-request') {
                toast.error('Multiple popups are open. Please try again.');
            } else if (error.code === 'auth/popup-blocked') {
                toast.error('Popup blocked by your browser. Please enable popups.');
            } else if (error.code === 'auth/account-exists-with-different-credential') {
                toast.error('Account exists with different login method. Try logging in with that.');
            } else if (error.code === 'auth/network-request-failed') {
                toast.error('Check your internet connection and try again.');
            } else {
                toast.error('Something went wrong. Please try again!');
            };
        };
    };


    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Join Job Wave - Register</title>
                <meta name="description" content="Create your Job Wave account and unlock endless job opportunities tailored just for you." />
            </Helmet>


            <section className="flex md:flex-row flex-col-reverse items-center justify-center py-10 md:px-24">
                {/* Form Content */}
                <div className="bg-white dark:bg-[var(--color-text-copy)] border-2 border-[#ced8ff] dark:border-none shadow-xl rounded-[100px] sm:py-16 py-10 sm:px-10 px-6 w-full max-w-md mx-4">
                    <h2 className="sm:text-3xl text-[28px] font-bold text-center text-[var(--color-light-accent)] dark:text-slate-300 mb-6">Create Account!</h2>

                    {/* Continue button */}
                    <button onClick={handleGoogleUser} className="group flex items-center justify-center gap-1 w-full py-[6px] px-6 border border-gray-300 bg-slate-300 rounded-2xl transition-all duration-200 text-base font-semibold cursor-pointer">
                        Continue with <FaGoogle className="text-blue-700 font-bold group-hover:rotate-360 duration-500" />
                    </button>

                    {/* Divider */}
                    <div className="divider text-gray-500 dark:text-gray-400 font-bold before:bg-gray-400 after:bg-gray-400">OR</div>
                    <form onSubmit={handleRegister} className="space-y-4">

                        {/* Photo Url */}
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

                        {/* Email */}
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

                        {/* Password */}
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

                        {/* Error showing */}
                        {
                            error &&
                            <p className="text-orange-5npm run00 dark:text-orange-400 lg:text-sm md:text-xs sm:text-sm text-xs">⚠️ {error}</p>
                        }

                        {/* Checkbox */}
                        <div className="flex gap-2 items-center text-gray-600 dark:text-gray-300 lg:text-base md:text-sm sm:text-base text-sm">
                            <input type="checkbox" name="checkbox" className="checkbox checkbox-sm dark:text-gray-300 dark:border-gray-500" />
                            <p className="">Accept terms and conditions.</p>
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="text-sm w-full py-2 bg-[var(--color-light-accent)] hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all duration-200 cursor-pointer"
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-600 dark:text-gray-300 sm:text-sm text-xs">
                        Already have an account? <Link to="/login" className="text-blue-800 dark:text-blue-400 underline animate-pulse">{' '} Log in</Link>
                    </p>
                </div>

                {/* Lottie Animation */}
                <Lottie animationData={registerLottie} className="w-full lg:max-w-md md:w-[440px] sm:max-w-md lg:mb-0 mb-8"></Lottie>
            </section>
        </>
    );
};

export default Register;
