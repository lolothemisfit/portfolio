import { motion } from "framer-motion";


const educationData = [
    {
        title: 'National Certificate in Information Technology (Systems Development)', 
        institution: 'WeThinkCode', 
        date: 'SEP 2021 - AUG 2023', 
        NQFlevel: '5',
    },
    {
        title: 'Bachelor of Science in Information Technology',
        institution: 'Richfield Graduate Institute of Technology',
        date: 'FEB 2025 - PRESENT', 
        NQFlevel: '7',
    }
];


const containerVariants = {
    hidden: {},
    visible: {
        transition: {
        staggerChildren: 0.15, // 0.15s between cards
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Education = () => {
        return (
            <section
                className=" px-6 md:px-20 py-16 bg-light dark:bg-dark text-blue-500"
                >
                {/* Education Section */}
                <h2 
                id="education"
                className="text-3xl font-bold text-light dark:text-dark mb-8">Education</h2>
                <motion.div
                className="grid md:grid-cols-2 gap-6 mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                >
                {educationData.map((edu, index) => (
                <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gray-300 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                <h3 className="text-xl font-semibold text-blue-500">{edu.title}</h3>
                <p className="text-gray-500">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.date}</p>
                <p className="mt-2 text-gray-500">NQF Level: {edu.NQFlevel}</p>
                </motion.div>
                ))}
                </motion.div>
            </section>
        );
};

export default Education;