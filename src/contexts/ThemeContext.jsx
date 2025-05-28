import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const storedMode = localStorage.getItem('theme');
        return storedMode === 'true';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'false');
        }

    }, [darkMode]);

    return <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
    </ThemeContext.Provider>
}


export const useDarkMode = () => useContext(ThemeContext);