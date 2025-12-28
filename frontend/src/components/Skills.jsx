import { motion } from "framer-motion";

// Dynamically import all SVGs in logos folder
const logos = import.meta.glob("../images/logos/*.svg", { eager: true, import: "default" });

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", logo: logos["../images/logos/react-2.svg"] },
      { name: "JavaScript", logo: logos["../images/logos/javascript.svg"] },
      { name: "HTML5", logo: logos["../images/logos/html.svg"] },
      { name: "CSS3", logo: logos["../images/logos/css.svg"] },
      { name: "Tailwind CSS", logo: logos["../images/logos/tailwind-css.svg"] },
      { name: "Alpine.js", logo: logos["../images/logos/alpine-js.svg"] },
      {name: "jQuery", logo: logos["../images/logos/jquery.svg"] },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "PHP", logo: logos["../images/logos/php.svg"] },
      { name: "Laravel", logo: logos["../images/logos/laravel.svg"] },
      { name: "Java", logo: logos["../images/logos/java.svg"] },
      { name: "Spring Boot", logo: logos["../images/logos/spring-boot.svg"] },
      { name: "Python", logo: logos["../images/logos/python.svg"] },
      { name: "REST APIs", logo: logos["../images/logos/rest-api.svg"] },
      { name: "Postman", logo: logos["../images/logos/postman.svg"] },
      {name: "Node.js", logo: logos["../images/logos/nodejs.svg"] },
      {name: "C#", logo: logos["../images/logos/c-sharp.svg"] },
      {name: "C++", logo: logos["../images/logos/c-plus.svg"] },
    ],
  },
  {
    category: "Database & Data Handling",
    skills: [
      { name: "MySQL", logo: logos["../images/logos/mysql.svg"] },
      { name: "SQLite", logo: logos["../images/logos/sqlite.svg"] },
      { name: "MongoDB", logo: logos["../images/logos/mongodb.svg"] },
      { name: "SQL", logo: logos["../images/logos/sql.svg"] },
    ],
  },
  {
    category: "CI/CD & Version Control",
    skills: [
      { name: "Git", logo: logos["../images/logos/git-icon.svg"] },
      { name: "GitHub", logo: logos["../images/logos/github.svg"] },
      { name: "Jenkins", logo: logos["../images/logos/jenkins.svg"] },
      { name: "Docker", logo: logos["../images/logos/docker.svg"] },
    ],
  },
  {
    category: "Testing / Automation",
    skills: [
      { name: "Cypress", logo: logos["../images/logos/cypress.svg"] },
      { name: "PHPUnit", logo: logos["../images/logos/phpunit.svg"] },
    ],
  },
  {
    category: "CMS, IDEs & Operating Systems",
    skills: [
        { name: "WordPress", logo: logos["../images/logos/wordpress.svg"] },
        { name: "Visual Studio Code", logo: logos["../images/logos/vs-code.svg"] },
        { name: "PhpStorm", logo: logos["../images/logos/phpstorm.svg"] },
        { name: "Microsoft Windows", logo: logos["../images/logos/windows.svg"] },
        { name: "Intellij IDEA", logo: logos["../images/logos/intellij.svg"] },
        { name: "MacOS", logo: logos["../images/logos/macos.svg"] },
        { name: "Ubuntu", logo: logos["../images/logos/ubuntu.svg"] }
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function Skills() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-16 section-light dark:section-dark transition-colors duration-500">
      <h2 className="text-3xl font-bold text-light dark:text-dark mb-8">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillsData.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="bg-gray-300 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              {category.category}
            </h3>

            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="relative group w-20 h-20 flex items-center justify-center rounded-lg overflow-hidden cursor-pointer shadow-sm bg-gray-100"
                  variants={cardVariants}
                >
                  {/* Background blur layer */}
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 transition-all duration-300 group-hover:backdrop-blur-sm"></div>

                  {/* Logo stays crisp */}
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 relative z-10"
                  />

                  {/* Skill name overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="text-white text-sm font-semibold text-center">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
