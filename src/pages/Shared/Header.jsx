import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link, NavLink } from 'react-router';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const linksStyle = ({ isActive }) =>
        `
    hover:text-[#3c65f5] font-medium transition-all duration-300 lg:hover:-translate-y-1 lg:hover:translate-x-0 hover:-translate-x-2
    ${isActive ? "text-[#3c65f5] lg:border-b-2 border-[#3c65f5]" : 'text-[#05264e]'}
    `


    const links = <>
        <NavLink to="/" className={linksStyle}>Home</NavLink>
        <NavLink to="/jobs" className={linksStyle}>All Jobs</NavLink>
        <NavLink to="/add-jobs" className={linksStyle}>All Jobs</NavLink>
        <NavLink to="/application/me" className={linksStyle}>My Applications</NavLink>
        <NavLink to="/my-jobs" className={linksStyle}>My Job Posts</NavLink>
        <NavLink to="/contact" className={linksStyle}>Contact</NavLink>
    </>

    return (
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to='/' >
                            <img src="/logo.png" alt="Logo" className="lg:h-8 h-9 w-10" />
                        </Link>
                        <h1 className="xl:text-3xl text-2xl font-extrabold text-[#05264e]">Job Wave</h1>
                    </div>

                    {/* Nav Links - Desktop */}
                    <nav className="text-sm items-center hidden lg:flex xl:gap-8 gap-6 xl:ml-8 ml-6">
                        {links}
                    </nav>
                </div>

                {/* Auth Buttons - Desktop */}
                <div className="hidden lg:flex text-sm space-x-6 items-center">
                    <Link to='/register' className="text-[#05264e] underline transition-all duration-300 hover:-translate-y-1">Register</Link>
                    <Link to='/login'>
                        <button className="px-6 py-3 bg-[#3c65f5] text-white rounded-md  hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 hover:-translate-y-1">Sign In</button>
                    </Link>
                </div>

                {/* Hamburger - Mobile */}
                <button
                    className="lg:hidden flex items-center text-gray-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden fixed inset-0 z-50" style={{ pointerEvents: 'none' }}>
                    <div
                        className="bg-white h-full w-[300px] sm:w-[340px] md:w-[400px] flex flex-col gap-6 absolute right-0 top-0 shadow-lg"
                        style={{
                            pointerEvents: 'auto'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Search Input & Close Button */}
                        <div className="flex items-center my-3 px-4">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="md:text-base text-sm w-full px-3 text-[#05264e] bg-[#f2f3f4] md:py-3 py-[10px] rounded focus:outline-none pr-10"
                                />
                                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#05264e] text-xl pointer-events-none" />
                            </div>
                            <button
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                                className="ml-2"
                            >
                                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <nav className="flex flex-col gap-5 px-6 md:text-base text-sm">
                            {links}
                        </nav>
                        <div className="md:text-base text-sm flex flex-col gap-3 mt-3 px-6">
                            <Link to='/register'>
                                <button className="w-full py-3 border border-[#3c65f5]  text-[#05264e] hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 hover:border-indigo-400 hover:text-white transition-all duration-300 hover:-translate-y-1 rounded-md">Register</button>
                            </Link>
                            <Link to='/login'>
                                <button className="w-full py-3 border border-[#3c65f5] bg-[#3c65f5] text-white rounded-md hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 hover:border-indigo-400 transition-all duration-300 hover:-translate-y-1">Sign In</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;