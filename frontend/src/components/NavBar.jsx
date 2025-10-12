import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger / X icons

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.body;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav className="fixed w-full top-0 left-0 bg-blue-500 bg-opacity-80 backdrop-blur-sm z-50 shadow-md transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-white cursor-pointer font-graffiti">
          LELONA NTSHIBA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="about" smooth={true} duration={500} className="text-white hover:text-blue-200 cursor-pointer">About</Link>
          <Link to="skills" smooth={true} duration={500} className="text-white hover:text-blue-200 cursor-pointer">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="text-white hover:text-blue-200 cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="text-white hover:text-blue-200 cursor-pointer">Contact</Link>
        </div>
        <div
            onClick={() => setDarkMode(!darkMode)}
            className={`w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-colors duration-300`}
            >
            {/* Toggle circle */}
            <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ${
                darkMode ? "translate-x-6" : "translate-x-0"
                }`}
            ></div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-500 w-full px-6 py-4 flex flex-col space-y-4">
          <Link onClick={() => setMenuOpen(false)} to="about" smooth={true} duration={500} className="text-white hover:text-blue-200 cursor-pointer">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="skills" smooth={true} duration={500} className="text-white hover:text-blue-200 cursor-pointer">Skills</Link>
          <Link onClick={() => setMenuOpen(false)} to="projects" smooth={true} duration={500} className="text-white hover:text-blue-200 cursor-pointer">Projects</Link>
          <Link onClick={() => setMenuOpen(false)} to="contact" smooth={true} duration={500} className="text-white hover:text-blue-200 cursor-pointer">Contact</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded text-white hover:bg-blue-400 transition-colors duration-300"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
