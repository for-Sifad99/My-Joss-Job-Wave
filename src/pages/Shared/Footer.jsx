import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {

    // top scroll :
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="bg-base-200 dark:bg-[var(--color-bg)] md:text-sm dark:text-[var(--color-dark-primary)]">
            <div className="max-w-7xl mx-auto lg:px-4 md:px-24 sm:px-10 px-4 md:py-10 py-6 lg:flex grid md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-8 justify-between">
                {/* Logo & Description */}
                <div className="space-y-2 max-w-[240px]">
                    <div className="flex">
                        <img src="/public/logo.png" alt="logo" className="xl:w-9 lg:w-7 md:w-8 sm:w-9 w-10" />
                        <h2 className="xl:text-3xl md:text-2xl sm:text-3xl text-4xl font-bold text-[var(--color-light-accent)] dark:text-[var(--color-dark-accent)]">Job Wave</h2>
                    </div>
                    <p className="dark:text-gray-300 xl:text-sm md:text-xs text-sm">
                        JobBox is the heart of the design community and the best resource
                        to discover and connect with designers and job worldwide.
                    </p>
                    <div className="flex space-x-4 mt-4 text-white">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={30} className="cursor-pointer p-[6px] rounded-full bg-blue-700 hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} className="cursor-pointer p-[6px] rounded-full bg-blue-700 hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={30} className="cursor-pointer p-[6px] rounded-full bg-blue-700 hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1" />
                        </a>
                    </div>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="xl:text-lg lg:text-base sm:text-lg text-2xl font-bold mb-2">Resources</h3>
                    <ul className="space-y-1 dark:text-gray-300 xl:text-sm lg:text-xs sm:text-sm text-base">
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">About us</li>
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">Our Team</li>
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">Products</li>
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">Contact</li>
                    </ul>
                </div>

                {/* Community */}
                <div>
                    <h3 className="xl:text-lg lg:text-base sm:text-lg text-2xl font-bold mb-2">Community</h3>
                    <ul className="space-y-1 dark:text-gray-300 xl:text-sm lg:text-xs sm:text-sm text-base">
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">Feature</li>
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">Pricing</li>
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">Credit</li>
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">FAQ</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="xl:text-lg lg:text-base sm:text-lg text-2xl font-bold mb-2">Quick Links</h3>
                    <ul className="space-y-1 dark:text-gray-300 xl:text-sm lg:text-xs sm:text-sm text-base">
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">iOS</li>
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">Android</li>
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">Microsoft</li>
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">Desktop</li>
                    </ul>
                </div>

                {/* More */}
                <div>
                    <h3 className="xl:text-lg lg:text-base sm:text-lg text-2xl font-bold mb-2">More Needs</h3>
                    <ul className="space-y-1 dark:text-gray-300 xl:text-sm lg:text-xs sm:text-sm text-base">
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">Privacy</li>
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">Help</li>
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">Terms</li>
                        <li onClick={handleScrollToTop} className="cursor-pointer hover:text-[var(--color-light-accent)] dark:hover:text-[var(--color-dark-accent)] transition-all duration-300 hover:translate-x-2">FAQ</li>
                    </ul>
                </div>

                {/* Download App */}
                <div className="md:min-w-60">
                    <h3 className="xl:text-lg lg:text-base sm:text-lg text-2xl font-bold mb-2">Download App</h3>
                    <p className="mb-4 dark:text-gray-300 max-w-[200px] xl:text-sm lg:text-xs text-sm">Download our Apps and get extra 15% Discount on your first Order…!</p>
                    <div className="flex space-x-2">
                        <a
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="md:w-fit flex items-center px-4 py-2 bg-black text-white rounded-md text-xs"
                        >
                            <FaApple size={22} />
                            <div className="flex flex-col ml-1">
                                <p className="text-[7px]">Download on the</p>
                                <h2>App Store</h2>
                            </div>
                        </a>

                        <a
                            href="https://play.google.com/store/apps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="md:w-fit flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-[10px]"
                        >
                            <FaGooglePlay size={22} />
                            <div className="flex flex-col ml-1">
                                <p className="text-[7px]">Get it on</p>
                                <h2>Google Play</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl border-t border-gray-300 dark:border-[#4b5472] xl:mx-12  lg:mx-4 md:mx-24 sm:mx-[37px] mx-4 py-6 flex flex-col md:flex-row justify-between items-center text-xs">
                <p>© 2022 Job Wave. All right reserved</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Security</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
