import { useEffect, useRef, useState } from "react";
import AboutImg from "../images/about-me.jpg";

const About = () => {
  const [visible, setVisible] = useState(false);
  const aboutRef = useRef(null);

  // Trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16 
                 section-light dark:section-dark transition-colors duration-500"
    >
      {/* Text Section */}
      <div
        className={`md:w-1/2 mb-10 md:mb-0 transition-all duration-1000 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-light dark:text-dark mb-4">About Me</h2>
        <p className="text-lg leading-relaxed text-light dark:text-dark">
          Hi, I’m <span className="font-semibold">Lelona Ntshiba</span> — 
          a passionate <span className="font-semibold">Full-Stack Developer | Software Engineer</span> who loves
          turning ideas into visually captivating, functional digital experiences.
          <br /><br />
          With experience in <span className="font-semibold">PHP, JavaScript, Laravel, Python, React, TailwindCSS, and WordPress to name a few</span>,
          I enjoy building responsive websites and creative interfaces that blend design and logic.
          I’m constantly exploring new tools and frameworks to refine my craft.
          <br /><br />
          Beyond code, I value teamwork, storytelling through design, and creating solutions that feel alive.
        </p>
      </div>

      {/* Image Section */}
      <div
        className={`md:w-1/2 l flex justify-center transition-all duration-1000 delay-300  ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <img
          src={AboutImg} 
          alt="Lelona Ntshiba"
          className="rounded-2xl shadow-lg w-70 h-full border-4 border-blue-500 object-cover object-center"
        />
      </div>
    </section>
  );
};

export default About;
