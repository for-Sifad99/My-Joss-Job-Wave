import React, { useContext, useState } from "react";
import { FiMail, FiLock, FiEyeOff, FiEye } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import loginLottie from '../../assets/lotties/login.json';
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import { AuthContext } from "../../contexts/AuthContexts/AuthContext";
import Swal from "sweetalert2";
import { useRef } from "react";


const Login = () => {
    const { setUser, signInUser, createGoogleUser, forgotPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const emailRef = useRef();
    const [showPassword, setShowPassword] = useState(false);


    const handleLogin = async (e) => {
        e.preventDefault();

        // Form data:
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        //? SignIn User:
        try {
            const user = await signInUser(email, password);
            const currentUser = user;

            // Email verify :
            if (!currentUser.user.emailVerified) {

                // Sweet Alert :
                Swal.fire({
                    icon: "warning",
                    title: "Email Not Verified",
                    text: "Please verify your email before logging in!"
                });
            } else {
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
                    title: "Logged in successfully!!"
                });

                setTimeout(() => {
                    setUser(currentUser);
                    navigate('/')
                }, 3000);
            }
        }
        catch {
            // Error handling with sweet alert :
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
                icon: "error",
                title: "Something wrong! Please continue with google or enter a valid email and password."
            });
        };
    };


    const handleGoogleLogin = async (e) => {
        e.preventDefault();

        //? Login User with Google:
        const user = await createGoogleUser();
        const currentUser = user;

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
            title: "Logged in successfully!!"
        });

        setTimeout(() => {
            setUser(currentUser);
            navigate('/')
        }, 3000);
    };


    const handleForgotPassword = async () => {
        const email = emailRef.current.value;

        // Empty email check :
        if (!email) {
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
                icon: "warning",
                title: "Please! enter your email first."
            });
        }
        else {
            //? Reset Password:
            await forgotPassword(email);

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
                title: "Done! Please check your email."
            });
        }
    };

    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Job Wave - Login</title>
                <meta name="description" content="Access your Job Wave profile and apply to jobs with ease. Login to explore exciting careers!" />
            </Helmet>


            <section className="flex md:flex-row flex-col items-center justify-center py-10 md:px-24">

                {/* Lottie Animation */}
                <Lottie animationData={loginLottie} className="max-w-md lg:max-w-md md:w-[440px] sm:max-w-md lg:mb-0 mb-8"></Lottie>

                {/* Form Content */}
                <div className="bg-white dark:bg-[var(--color-text-copy)] border-2 border-[#ced8ff] dark:border-none shadow-xl rounded-[100px] sm:py-16 py-10 sm:px-10 px-6 w-full max-w-md mx-4">
                    <h2 className="sm:text-3xl text-[28px] font-bold text-center text-[var(--color-light-accent)] dark:text-slate-300 mb-6">Login Now!</h2>

                    {/* Continue button */}
                    <button onClick={handleGoogleLogin} className="group flex items-center justify-center gap-1 w-full py-[6px] px-6 border border-gray-300 bg-slate-300 rounded-2xl transition-all duration-200 text-base font-semibold cursor-pointer">
                        Continue with <FaGoogle className="text-blue-700 font-bold group-hover:rotate-360 duration-500" />
                    </button>

                    {/* Divider */}
                    <div className="divider text-gray-500 dark:text-gray-400 font-bold before:bg-gray-400 after:bg-gray-400">OR</div>

                    <form onSubmit={handleLogin} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="text-base block mb-1 font-bold text-[var(--color-light-accent)] dark:text-[var(--color-dark-accent)]">Email</label>
                            <div className="relative">
                                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    ref={emailRef}
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

                        {/* Forgot password */}
                        <span onClick={handleForgotPassword} className=" text-gray-600 dark:text-gray-300 sm:text-base text-sm cursor-pointer hover:underline">Forgot password?</span>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="mt-2 text-sm w-full py-2 bg-[var(--color-light-accent)] hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all duration-200"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-600 dark:text-gray-300 sm:text-sm text-xs">
                        Don't have an account? <Link to="/register" className="text-blue-800 dark:text-blue-400 underline animate-pulse">{' '} Create one!</Link>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Login;
