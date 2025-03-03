import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import '../App.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="theme-container">
            <h1>The current theme is {theme}</h1>
            <button onClick={toggleTheme} className="theme-button">Toggle Theme</button>
        </div>
    );
};

export default ThemeToggle;