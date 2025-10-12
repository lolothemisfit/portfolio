import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.body;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full top-0 left-0 bg-blue-500 bg-opacity-90 backdrop-blur-sm z-50 shadow-md transition-all duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white cursor-pointer font-graffiti">
          LELONA NTSHIBA
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="about" smooth duration={500} className="text-white hover:text-blue-200 cursor-pointer">About</Link>
          <Link to="skills" smooth duration={500} className="text-white hover:text-blue-200 cursor-pointer">Skills</Link>
          <Link to="projects" smooth duration={500} className="text-white hover:text-blue-200 cursor-pointer">Projects</Link>
          <Link to="contact" smooth duration={500} className="text-white hover:text-blue-200 cursor-pointer">Contact</Link>
        </div>

        {/* Right side: Toggle + Hamburger */}
        <div className="flex items-center space-x-3">
          {/* Dark/Light Mode Switch */}
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="w-8 h-4 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-0.5 cursor-pointer transition-colors duration-300"
          >
            <div
              className={`bg-white w-3 h-3 rounded-full shadow-md transform duration-300 ${
                darkMode ? "translate-x-4" : "translate-x-0"
              }`}
            ></div>
          </div>

          {/* Label */}
          <span
            className={`text-xs transition-opacity duration-300 ${
              darkMode ? "opacity-100 text-white" : "opacity-80 text-black"
            }`}
          >
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>

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
      </div>

      {/* Side Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-blue-500 bg-opacity-95 shadow-lg transform transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside drawer */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-3xl focus:outline-none"
          >
            <HiX />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col space-y-6 mt-10 px-6">
          <Link onClick={() => setMenuOpen(false)} to="about" smooth duration={500} className="text-light dark:text-dark text-lg hover:text-blue-200 cursor-pointer">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="skills" smooth duration={500} className="text-light dark:text-dark text-lg hover:text-blue-200 cursor-pointer">Skills</Link>
          <Link onClick={() => setMenuOpen(false)} to="projects" smooth duration={500} className="text-light dark:text-dark text-lg hover:text-blue-200 cursor-pointer">Projects</Link>
          <Link onClick={() => setMenuOpen(false)} to="contact" smooth duration={500} className="text-light dark:text-dark text-lg hover:text-blue-200 cursor-pointer">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
