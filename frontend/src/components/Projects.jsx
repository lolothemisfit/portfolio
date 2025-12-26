import { motion } from "framer-motion";
import { useRef } from "react";
import { projects } from "./ProjectCard";
import { containerVariants, cardVariants } from "../motionVariants";

const Projects = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 py-16 bg-light dark:bg-dark text-light dark:text-dark">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-blue-500 mb-8">Personal Projects</h2>

      {/* Scrollable cards container */}
      <div className="overflow-x-auto pb-4">
        <motion.div
          className="flex space-x-6 px-4 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Project Cards */}
          {projects.map((project) => {
            const videoRef = useRef(null);

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="flex-shrink-0 w-80 md:w-96 bg-gray-300 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                {/* Image + Video */}
                <div
                  className="relative w-full h-56 md:h-64 group"
                  onMouseEnter={() => videoRef.current?.play()}
                  onMouseLeave={() => videoRef.current?.pause()}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <video
                    ref={videoRef}
                    src={project.video}
                    muted
                    loop
                    className="absolute top-0 left-0  opacity-0 w-full h-full object-cover group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"
                  />
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-500 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    {project.techStack}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between text-sm">
                    {project.liveDemoLink && (
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Inline View More Projects card */}
          <motion.a
            href="https://github.com/lolothemisfit"
            target="_blank"
            variants={cardVariants}
            className="flex-shrink-0 w-80 md:w-96 h-auto bg-gray-300 dark:bg-gray-700 rounded-xl shadow-md relative flex items-center justify-center cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300 group"
          >
            {/* Arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>

            {/* Hover overlay */}
            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity text-lg font-bold text-gray-900 dark:text-white">
              View More Projects
            </span>

            {/* Mobile label */}
            <span className="mt-4 text-sm text-black dark:text-black md:hidden">
                View More Projects
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
    
  );
};

export default Projects;
