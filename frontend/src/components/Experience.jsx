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

const workData = [
    {
        title: 'Web Developer Intern',
        company: 'Ringier South Africa',
        date: 'AUG 2023 - DEC 2024',
        description: 'Developed, maintained, and updated web applications across both frontend and backend using PHP, Laravel, Livewire, AlpineJS, TailwindCSS and WordPress.'
    },
    {
        title: "Bootcamp Assistant (Volunteer)",
        company: "WeThinkCode",
        date: "June 2022 - July 2022",
        description: 'Assisted students with coding challenges, provided feedback on projects, and facilitated learning sessions to enhance their understanding of programming concepts and best practices.'
    },
    {
        title: "Group Project Reviewer (Volunteer)",
        company: "WeThinkCode",
        date: "July 2022 - Aug 2022",
        description: 'Reviewed and provided constructive feedback on group projects, ensuring code quality, adherence to best practices, and overall project coherence.'
    },
    {
        title: "Group Project Mentor (Volunteer)",
        company: "WeThinkCode",
        date: "July 2022 - Sept 2022",
        description: 'Guided and supported student groups through their projects, offering technical advice, problem-solving strategies, and encouragement to foster successful project completion.'
    },
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

const Experience = () => {
    return (
        <section
            id="experience"
            className="min-h-screen px-6 md:px-20 py-16 bg-light dark:bg-dark text-light dark:text-dark"
            >
            {/* Education Section */}
            <h2 className="text-3xl font-bold text-blue-500 mb-8">Education</h2>
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
                    <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.date}</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">NQF Level: {edu.NQFlevel}</p>
                </motion.div>
                ))}
            </motion.div>

            {/* Work / Experience Section */}
            <h2 className="text-3xl font-bold text-blue-500 mb-8">Work & Volunteer Experience</h2>
            <motion.div
                className="grid md:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                {workData.map((work, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-gray-300 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                    <h3 className="text-xl font-semibold text-blue-500">{work.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{work.company}</p>
                    <p className="text-sm text-gray-500">{work.date}</p>
                    {work.description && (
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{work.description}</p>
                    )}
                </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Experience;