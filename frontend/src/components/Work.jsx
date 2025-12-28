import { motion } from "framer-motion";
import { workData } from "./ProjectCard";
import { containerVariants, cardVariants } from "../motionVariants";

const Work = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 py-16 section-light dark:section-dark transition-colors duration-500">
      <h2 className="text-3xl font-bold text-light dark:text-dark mb-8">Contributions</h2>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {workData.map((work) => (
          <motion.div
            key={work.id}
            variants={cardVariants}
            className="bg-gray-300 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-blue-500 mb-2">{work.title}</h3>

            {/* Tech Stack */}
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{work.techStack}</p>

            {/* Thumbnails */}
            <div className="flex flex-wrap gap-2 mb-4">
              {work.thumbnails.map((thumb, index) => (
                <a key={index} href={thumb.link} target="_blank">
                  <img
                    src={thumb.src}
                    alt={`${work.title} site ${index + 1}`}
                    className="w-20 h-20 object-cover rounded cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300">{work.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;
