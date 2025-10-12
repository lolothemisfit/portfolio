import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center bg-light dark:bg-dark relative">
      
        {/* Name */}
        <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-light dark:text-dark mb-4"
        >
            Hi, I am <span className="text-blue-400 font-graffiti">LELONA NTSHIBA</span>
        </motion.h1>

        {/* Job Title */}
        <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-light dark:text-dark mb-6"
        >
            FULL-STACK DEVELOPER | SOFTWARE ENGINEER
        </motion.p>

        {/* Profile Image */}
        <motion.img
            src="/assets/profile.jpg" // replace with your image
            alt="LELONA NTSHIBA"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-blue-400"
        />

        {/* Social Icons */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex space-x-6 text-2xl text-gray-300"
        >
            <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400 transition-colors"/>
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-blue-400 transition-colors"/>
            </a>
        </motion.div>

        {/* Down Arrow */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-10 animate-bounce cursor-pointer"
        >
            <a href="#about">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            </a>
        </motion.div>

        </section>
    );
};

export default Hero;