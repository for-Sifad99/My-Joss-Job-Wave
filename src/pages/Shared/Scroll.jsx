import React, { useEffect, useState } from 'react';
import { TiArrowUp } from 'react-icons/ti';

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Top scroll :
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <>
            {
                isVisible &&
                <TiArrowUp size={50} onClick={handleScrollToTop} className="fixed bottom-34 right-6 bg-[#3c65f5] text-white rounded-full  hover:bg-linear-to-r/srgb hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 hover:-translate-y-2 p-2 
                shadow-lg" />
            }
        </>
    );
};

export default Scroll;