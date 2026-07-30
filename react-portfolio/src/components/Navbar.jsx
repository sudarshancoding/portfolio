import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {

    const [darkMode, setDarkMode] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleTheme = () => {

        const html = document.documentElement;

        if (darkMode) {
            html.setAttribute("data-theme", "light");
        } else {
            html.setAttribute("data-theme", "dark");
        }

        setDarkMode(!darkMode);

    };

    return (

        <>

            <nav>

                <div className="nav-inner">

                    <a href="#hero" className="nav-logo">
                        Sudarshan<span>.</span>
                    </a>

                    <ul className="nav-links">

                        <li><a href="#hero">Home</a></li>

                        <li><a href="#skills">Skills</a></li>

                        <li><a href="#experience">Experience</a></li>

                        <li><a href="#projects">Projects</a></li>

                        <li><a href="#education">Education</a></li>

                        <li><a href="#resume">Resume</a></li>

                        <li><a href="#contact">Contact</a></li>

                    </ul>

                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                    >

                        {darkMode ? <FaSun /> : <FaMoon />}

                    </button>

                    <button
                        className="nav-hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >

                        <span></span>
                        <span></span>
                        <span></span>

                    </button>

                </div>

            </nav>

            <div className={`nav-mobile-menu ${menuOpen ? "open" : ""}`}>

                <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>

                <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>

                <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>

                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>

                <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>

                <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>

                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

            </div>

        </>

    );

}

export default Navbar;