// src/components/Loader.jsx

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loaderAnimation from '../../assets/lotties/loader.json';

const Loader = ({ onFinish }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            if (onFinish) onFinish(); 
        }, 3000); 

        return () => clearTimeout(timer);
    }, [onFinish]);

    if (!show) return null;

    return (
        <div className="flex justify-center items-center h-screen">
            <Lottie
                animationData={loaderAnimation}
                loop={true}
                style={{ width: 220, height: 220 }}
            />
        </div>
    );
};

export default Loader;
