import React, { useEffect, useRef, useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { GoSignIn } from 'react-icons/go';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Link, NavLink } from 'react-router';
import { useDarkMode } from '../../hooks/ThemeContext';
import useAuth from '../../hooks/UseAuth';
import Profile from './Profile';


const Header = () => {
    const { user } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const { darkMode, setDarkMode } = useDarkMode();
    const menuRef = useRef();


    // Links style And for active Links style
    const linksStyle = ({ isActive }) =>
        `
    hover:dark:text-[var(--color-dark-accent)] hover:text-[var(--color-light-accent)] font-medium transition-all duration-300 lg:hover:-translate-y-[6px] lg:hover:translate-x-0 hover:translate-x-2 
    ${isActive ? "text-[var(--color-light-accent)] dark:text-[var(--color-dark-accent)] lg:border-b-2 border-[var(--color-light-accent)] dark:border-[var(--color-dark-accent)]" : 'text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)]'}
    `

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, []);

    // All Links
    const links = <>
        <NavLink to="/" onClick={() => setMenuOpen(false)} className={linksStyle}>Home</NavLink>
        <NavLink to="/jobs" onClick={() => setMenuOpen(false)} className={linksStyle}>All Jobs</NavLink>
        {/* For Recruiter */}
        <NavLink to="/add-job" onClick={() => setMenuOpen(false)} className={linksStyle}>Add Job</NavLink>
        {/* For Applicant */}
        <NavLink to="/application/me" onClick={() => setMenuOpen(false)} className={linksStyle}>My Applications</NavLink>
        <NavLink to="/my-jobs" onClick={() => setMenuOpen(false)} className={linksStyle}>My Job Posts</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={linksStyle}>Contact</NavLink>
    </>

    return (
        <header id='navbar' className="sticky w-full bg-base-200 lg:bg-base-200/74 lg:backdrop-blur-md lg:dark:bg-[var(--color-bg)]/80 dark:bg-[var(--color-bg)] top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between lg:px-4 md:px-24 sm:px-10 px-4 py-3 md:py-4">

                <div className='flex justify-between items-center lg:w-auto w-full'>
                    <div className='flex'>

                        {/* Hamburger Menu For SM - MD */}
                        <button
                            className="lg:hidden flex items-center text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)] focus:outline-none"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Open menu"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Logo For All Device */}
                        <div className="flex items-center md:gap-1">
                            <Link to='/' >
                                <img src="/logo.png" alt="Logo" className="md:w-10 w-9" />
                            </Link>
                            <h1 className="xl:text-3xl text-2xl font-extrabold text-[var(--color-text-primary)] dark:text-[var(--color-dark-accent)]">Job Wave</h1>
                        </div>

                        {/* Nav Links - Desktop */}
                        <nav className="xl:text-base text-sm items-center hidden lg:flex xl:gap-8 gap-6 xl:ml-12 ml-10">
                            {links}
                        </nav>
                    </div>

                    {/* Theme and Profile */}
                    <div className='flex gap-3 items-center'>
                        {/* Theme For SM - MD */}
                        <div className="dropdown lg:hidden sm:block hidden text-[var(--color-text-primary)]  dark:text-[var(--color-dark-primary)] border-[var(--color-light-accent)] dark:border-[var(--color-dark-accent)]">
                            <button className="group flex gap-1 items-center  rounded-md">
                                <span className='flex items-center gap-1'>
                                    {darkMode ? <MdDarkMode size={20} className='-rotate-10 group-hover:rotate-26 transition-all duration-300' /> : <MdLightMode size={20} className='text-orange-300 -rotate-10 group-hover:rotate-26 transition-all duration-300' />}
                                    Theme
                                </span>
                                <svg
                                    width="12px"
                                    height="12px"
                                    className="inline-block h-2 w-2 mt-1 fill-current opacity-60 dark:opacity-100"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 2048 2048">
                                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                                </svg>
                            </button>
                            <div tabIndex={0} className="dropdown-content bg-[#f3f5fa] dark:bg-[#343a46] text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)] rounded-box z-1 mt-4 w-40 p-4 shadow-md dark:shadow-2xl">
                                <button onClick={() => setDarkMode(true)} className='group w-full flex gap-1 px-3 py-1 items-center hover:text-white hover:bg-[var(--color-light-accent)] cursor-pointer rounded'>
                                    <span>Dark</span>
                                    <MdDarkMode className='text:[var(--color-text-copy)] dark:text-[var(--color-dark-primary)] -rotate-10 group-hover:rotate-26 transition-all duration-300' />
                                </button>
                                <button onClick={() => setDarkMode(false)} className='group w-full flex gap-1 px-3 py-1 items-center hover:text-white hover:bg-[#3c65f5] cursor-pointer rounded'>
                                    <span>Light</span>
                                    <MdLightMode className='text-orange-300 hover:text-orange-500 -rotate-10 group-hover:rotate-26 transition-all duration-300' />
                                </button>
                            </div>
                        </div>

                        {/* Profile */}
                        {user &&
                            <div className='lg:hidden'>
                                <Profile />
                            </div>
                        }
                    </div>
                </div>

                {/* Auth And Theme Buttons - Desktop */}
                <div className="hidden lg:flex text-sm space-x-6 items-center">

                    {/* Theme Buttons - Desktop */}
                    <div className="dropdown xl:text-base text-sm text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)] border-[var(--color-light-accent)] dark:border-[var(--color-dark-accent)]">
                        <button className="group flex gap-1 items-center py-3 rounded-md">
                            <span className='flex items-center gap-1'>
                                {darkMode ? <MdDarkMode size={20} className='-rotate-10 group-hover:rotate-26 transition-all duration-300' /> : <MdLightMode size={20} className='text-orange-300 -rotate-10 group-hover:rotate-26 transition-all duration-300' />}
                                Theme
                            </span>
                            <svg
                                width="12px"
                                height="12px"
                                className="inline-block xl:h-3 xl:w-3 h-2 w-2 mt-1 fill-current opacity-60 dark:opacity-100"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 2048 2048">
                                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                            </svg>
                        </button>
                        <div tabIndex={0} className="dropdown-content bg-[#f3f5fa] dark:bg-[#30353d] text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)] rounded-box z-1 w-48 p-4 shadow-md dark:shadow-2xl">
                            <button onClick={() => setDarkMode(true)} className='group w-full flex gap-1 px-3 py-1 items-center hover:text-white hover:bg-[var(--color-light-accent)] cursor-pointer rounded'>
                                <span>Dark</span>
                                <MdDarkMode className='text-[var(--color-text-copy)] dark:text-[var(--color-dark-primary)] -rotate-10 group-hover:rotate-26 transition-all duration-300' />
                            </button>
                            <button onClick={() => setDarkMode(false)} className='group w-full flex gap-1 px-3 py-1 items-center hover:text-white hover:bg-[#3c65f5] cursor-pointer rounded'>
                                <span>Light</span>
                                <MdLightMode className='text-orange-300 hover:text-orange-500 -rotate-10 group-hover:rotate-26 transition-all duration-300' />
                            </button>
                        </div>
                    </div>

                    {/* Auth Buttons - Desktop */}
                    {
                        user ?
                            // Profile
                            <Profile />
                            :
                            <>
                                <Link to='/register' className="flex gap-2 items-center text-[var(--color-light-accent)] dark:text-[var(--color-dark-accent)] underline transition-all duration-300 hover:-translate-y-1">Register  <FaUserPlus /></Link>
                                <Link to='/login'>
                                    <button className="group flex gap-1 items-center px-6 py-3 bg-[#3c65f5] text-white rounded-md  hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 hover:-translate-y-1">Sign In <GoSignIn className='transition-all duration-300 group-hover:translate-x-2' /> </button>
                                </Link>
                            </>
                    }
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div ref={menuRef} className="lg:hidden fixed inset-0 z-50" style={{ pointerEvents: 'none' }}>
                    <div
                        className="bg-white dark:bg-[var(--color-bg)] h-full w-[300px] sm:w-[340px] md:w-[400px] flex flex-col gap-6 absolute left-0 top-0 shadow-lg"
                        style={{
                            pointerEvents: 'auto'
                        }}
                        onClick={e => e.stopPropagation()}
                    >

                        {/* Close Button */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                            className="flex justify-end mx-3 mt-4"
                        >
                            <svg className="w-7 h-7 text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Mobile Menu Search Input */}
                        <div className="mx-3 px-4">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="md:text-base text-sm w-full px-3 text-[var(--color-text-primary)] dark:text-white bg-[#f2f3f4] dark:bg-[#343a46] md:py-3 py-[10px] rounded focus:outline-none pr-10"
                                />
                                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-[#b7b8bb] text-xl pointer-events-none" />
                            </div>
                        </div>

                        {/* Mobile Menu Theme And Links */}
                        <nav className="flex flex-col gap-5 px-7 md:text-base text-sm">
                            {/* Theme */}
                            <div className="dropdown sm:hidden block text-[var(--color-text-primary)]  dark:text-[var(--color-dark-primary)] border-[var(--color-light-accent)] dark:border-[var(--color-dark-accent)]">
                                <button className="group flex gap-1 items-center  rounded-md">
                                    <span className='flex items-center gap-1'>
                                        {darkMode ? <MdDarkMode size={20} className='-rotate-10 group-hover:rotate-26 transition-all duration-300' /> : <MdLightMode size={20} className='text-orange-300 -rotate-10 group-hover:rotate-26 transition-all duration-300' />}
                                        Theme
                                    </span>
                                    <svg
                                        width="12px"
                                        height="12px"
                                        className="inline-block h-2 w-2 mt-1 fill-current opacity-60 dark:opacity-100"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 2048 2048">
                                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                                    </svg>
                                </button>
                                <div tabIndex={0} className="dropdown-content bg-[#f3f5fa] dark:bg-[#343a46] text-[var(--color-text-primary)] dark:text-[var(--color-dark-primary)] rounded-box z-1 w-48 p-4 shadow-md dark:shadow-2xl">
                                    <button onClick={() => setDarkMode(true)} className='group w-full flex gap-1 px-3 py-1 items-center hover:text-white hover:bg-[var(--color-light-accent)] cursor-pointer rounded'>
                                        <span>Dark</span>
                                        <MdDarkMode className='text:[var(--color-text-copy)] dark:text-[var(--color-dark-primary)] -rotate-10 group-hover:rotate-26 transition-all duration-300' />
                                    </button>
                                    <button onClick={() => setDarkMode(false)} className='group w-full flex gap-1 px-3 py-1 items-center hover:text-white hover:bg-[#3c65f5] cursor-pointer rounded'>
                                        <span>Light</span>
                                        <MdLightMode className='text-orange-300 hover:text-orange-500 -rotate-10 group-hover:rotate-26 transition-all duration-300' />
                                    </button>
                                </div>
                            </div>

                            {/* Links */}
                            {links}
                        </nav>

                        {/* Auth Buttons */}
                        <div className="md:text-base text-sm flex flex-col gap-3 mt-3 px-6">
                            {
                                user ? 
                                <>
                                    </> : <> <Link to='/register' onClick={() => setMenuOpen(false)} >
                                        <button className="w-full flex gap-2 items-center justify-center py-3 border border-[#3c65f5] text-[var(--color-light-accent)] dark:text-[var(--color-dark-primary)] hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 hover:border-indigo-400 hover:text-white transition-all duration-300 hover:-translate-y-1 rounded-md">Register  <FaUserPlus />  </button>
                                    </Link>
                                        <Link to='/login' onClick={() => setMenuOpen(false)} >
                                            <button className="group w-full flex gap-1 items-center justify-center py-3 border border-[#3c65f5] bg-[#3c65f5] text-white rounded-md hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 hover:border-indigo-400 transition-all duration-300 hover:-translate-y-1">Sign In  <GoSignIn className='transition-all duration-300 group-hover:translate-x-2' /> </button>
                                        </Link></>
                            }
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;