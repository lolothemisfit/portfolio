import React, { useState, useEffect } from "react";
import { FaCode, FaLaptopCode, FaCertificate, FaGithub, FaClock } from "react-icons/fa";

export default function Counters() {
  const [start, setStart] = useState(false);

  const [counts, setCounts] = useState({
    certificates: 0,
    projects: 0,
    languages: 0,
    experience: 0,
    professional: 0,
  });

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("counter-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        setStart(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!start) return;

    const targets = {
      certificates: 5,
      projects: 10,
      languages: 6,
      experience: 4,
      professional: 2,
    };

    const interval = setInterval(() => {
      setCounts((prev) => {
        const next = { ...prev };
        let done = true;

        Object.keys(targets).forEach((key) => {
          if (prev[key] < targets[key]) {
            next[key] = prev[key] + 1;
            done = false;
          }
        });

        if (done) clearInterval(interval);

        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [start]);

  const items = [
    {
      icon: <FaCertificate />,
      label: "Certificates",
      value: `${counts.certificates}+`,
      link: "https://drive.google.com/drive/u/0/folders/1K8xlqUbfX_BAKH-GNWlP7o7WFbfaUbgX",
      color: "from-green-400/20 to-emerald-600/10",
    },
    {
      icon: <FaGithub />,
      label: "Projects Built",
      value: `${counts.projects}+`,
      link: "https://github.com/lolothemisfit",
      color: "from-green-500/20 to-lime-600/10",
    },
    {
      icon: <FaLaptopCode />,
      label: "Languages & Frameworks",
      value: `${counts.languages}+`,
      link: "#projects",
      color: "from-emerald-400/20 to-green-700/10",
    },
    {
      icon: <FaCode />,
      label: "Coding Experience",
      value: `${counts.experience}+ yrs`,
      link: null,
      color: "from-teal-500/25 to-green-600/20",
    },
    {
      icon: <FaClock />,
      label: "Professional Experience",
      value: `${counts.professional}+ yrs`,
      link: null,
      color: "from-green-600/20 to-emerald-800/10",
    },
  ];

  return (
    <section
      id="counter-section"
      className="py-24 px-6 md:px-20 bg-light dark:bg-dark text-light dark:text-dark relative overflow-hidden"
    >
      {/* subtle glow background */}
      <div className="absolute inset-0 bg-blue-500/10 blur-3xl" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <h2 className="text-4xl font-bold mb-4">
          Experience & Credentials
        </h2>

        <p className="text-gray-400 mb-14">
          A breakdown of my skills, experience, and achievements
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {items.map((item, i) => (
            <a
              key={i}
              href={item.link || undefined}
              target={item.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.color} blur-2xl`}
              />

              <div className="relative z-10 flex flex-col items-center text-center">

                <div className="text-3xl mb-3 text-white/80">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-bold">
                  {item.value}
                </h3>

                <p className="text-gray-400 mt-2 text-sm">
                  {item.label}
                </p>

                {item.sub && (
                  <p className="text-light dark:text-dark text-xs mt-1">
                    {item.sub}
                  </p>
                )}

                {item.link && (
                  <p className="text-xs mt-3 text-green-400">
                    Click to view →
                  </p>
                )}

              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}