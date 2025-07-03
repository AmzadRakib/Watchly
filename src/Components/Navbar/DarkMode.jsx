import React, { useEffect } from 'react'
import darkPng from "../../assets/theme-button/dark-mode-button.png";
import lightPng from "../../assets/theme-button/light-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    );
    const element = document.documentElement;
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    }, [theme, element]);

    return (
        <div className='relative'>
            <img src={lightPng}
                alt=""
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`
                    absolute right-0 z-10 w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}
                    `}
            />
            <img
                src={darkPng}
                alt=""
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'
            />
        </div>
    );
}

export default DarkMode