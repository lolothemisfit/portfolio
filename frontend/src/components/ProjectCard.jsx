// projectsCard.jsx

const projectImages = import.meta.glob("../images/projects/*.{png,jpg,jpeg}", { eager: true, import: "default" });
const projectVideos = import.meta.glob("../videos/projects/*.{mp4,webm}", { eager: true, import: "default" });

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    techStack: "React, TailwindCSS, Vite, FastAPI",
    description: "A personal portfolio website to showcase my projects and skills.",
    image: projectImages["../images/projects/portfolio.png"],
    video: projectVideos["../videos/projects/portfolio.webm"],
    liveDemoLink: "",
    githubLink: "https://github.com/lolothemisfit/portfolio"
  },
  {
    id: 2,
    title: "Maze Solver",
    techStack: "Python, Turtle, BFS Algorithm",
    description: "An application that solves mazes using user input commands or automatically using BFS algorithm.",
    image: projectImages["../images/projects/maze-solver.png"],
    video: projectVideos["../videos/projects/maze-solver.webm"],
    liveDemoLink: "",
    githubLink: "https://github.com/lolothemisfit/maze-solver"
  },
  {
    id: 3,
    title: "Music Player",
    techStack: "HTML, CSS, JavaScript",
    description: "A web-based music player that allows users to play, pause, replay, shuffle and skip tracks from a curated playlist.",
    image: projectImages["../images/projects/music-player.png"],
    video: projectVideos["../videos/projects/music-player.webm"],
    liveDemoLink: "",
    githubLink: "https://github.com/lolothemisfit/Music-Player"
  },
  {
    id: 4,
    title: "Memory Game",
    techStack: "HTML5, CSS3, JavaScript, Google Web Designer",
    description: "A fun and interactive memory game that challenges players to match pairs of cards within a time limit.",
    image: projectImages["../images/projects/memory-game.png"],
    video: projectVideos["../videos/projects/memory-game.webm"],
    liveDemoLink: "",
    githubLink: "https://github.com/lolothemisfit/memory-game"
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    techStack: "Python",
    description: "A classic Tic Tac Toe game that can be played against another player or against the computer.",
    image: projectImages["../images/projects/tic-tac-toe.png"],
    video: projectVideos["../videos/projects/tic-tac-toe.webm"],
    liveDemoLink: "",
    githubLink: "https://github.com/lolothemisfit/TIC-TAC-TOE"
  },
];


const workData = [
  {
    id: 1,
    title: "Jobberman Nigeria & Ghana, Brighter Monday Kenya & Uganda",
    techStack: "PHP, Laravel, AlpineJS, Jenkins, TailwindCSS",
    thumbnails: [
      { src: projectImages["../images/projects/jobberman-ng.png"], link: "https://ng.jobberman.com/" },
      { src: projectImages["../images/projects/jobberman-gh.png"], link: "https://gh.jobberman.com/" },
      { src: projectImages["../images/projects/brighter-monday-ke.png"], link: "https://www.brightermonday.co.ke/" },
      { src: projectImages["../images/projects/brighter-monday-ug.png"], link: "https://www.brightermonday.ug/" },
    ],
    description:
      "Developed and maintained web applications. Fixed bugs, implemented new features, and performed QA testing, including regression testing on staging and production environments. Enhanced Brighter Monday's account deletion workflow with 2-step verification.",
  },
  {
    id: 2,
    title: "JobRadar24 Romania",
    techStack: "PHP, Laravel, AlpineJS, TailwindCSS, Jenkins, Cypress, Jira",
    thumbnails: [
      { src: projectImages["../images/projects/jobradar24.png"], link: "https://jobradar24.ro/" },
    ],
    description:
      "Contributed to feature development and bug fixes, including WhatsApp apply functionality. Performed QA testing, created Cypress tests for translations and metadata, and validated Elasticsearch job listing data.",
  },
  {
    id: 3,
    title: "Jobberman Youth Engagement Platform",
    techStack: "WordPress, PHP, CSS",
    thumbnails: [
      { src: projectImages["../images/projects/jobberman-ye.png"], link: "https://www.jobberman.com/youth-engagement/" },
    ],
    description:
      "Sole WordPress developer. Updated blogs, images, database, optimized plugins, implemented new features, and maintained site stability.",
  },
];

export { projects, workData };
