import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 text-gray-300 py-10 px-6 md:px-20 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-white cursor-pointer font-graffiti">
            Misfit Studios
          </h3>
          <p className="text-sm mt-1 text-gray-700">
            Building clean, modern web experiences.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/lolothemisfit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-600 hover:text-black transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/lelona-ntshiba-8023b9373/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-600 hover:text-black transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/27679524920"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-grey-600 hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-700">
        © {year} Misfit Studios. All rights reserved.
      </div>
    </footer>
  );
}