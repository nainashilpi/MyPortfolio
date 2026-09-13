import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgExternal } from "react-icons/cg";

// Project Details Data mapping (Defined outside to prevent recreating on every render)
const PROJECT_DETAILS = {
  AlgoPulse: {
    desc: "AlgoPulse is a DSA Progress Tracker designed to help students stay consistent with problem-solving. It allows users to track daily practice, monitor topic-wise progress, and visualize performance over time to build discipline for coding interviews.",
    github: "https://github.com/nainashilpi/AlgoPulse-DSA-Tracker",
    website: "https://algopulse-frontend.onrender.com/",
    tech: ["React", "Node.js", "Express", "MongoDB", "GraphQL"],
  },
  RoomFinder: {
    desc: "Full-stack rental listing and roommate matching platform engineered with MERN stack, Tailwind CSS, Multer, Cloudinary, and secure JWT authentication workflows.",
    github: "https://github.com/nainashilpi/",
    website: "#",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
  },
  TourMitra: {
    desc: "AI-enabled travel companion and dynamic itinerary generation platform built using Next.js, Node.js, Express, MongoDB, and integrated OpenAI API endpoints.",
    github: "https://github.com/nainashilpi/",
    website: "#",
    tech: ["Next.js", "React", "Node.js", "OpenAI API"],
  },
  Airbnb: {
    desc: "A full-stack Airbnb clone replicating core features such as property listings, user authentication, and booking flow. Built to practice backend REST APIs, schema design, and full-stack integration.",
    github: "https://github.com/nainashilpi/Airbnb-Fullstack-Project",
    website: "https://airbnb-fullstack-project-d1sb.onrender.com/",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  Portfolio: {
    desc: "My personal developer portfolio built with React to showcase my projects, skills, and resume. The website is fully responsive and focuses on clean UI, smooth navigation, and modern frontend practices.",
    github: "https://github.com/nainashilpi/Portfolio",
    website: "https://nainashilpi.vercel.app/",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  CurrencyConverter: {
    desc: "A real-time currency converter built using APIs to fetch live exchange rates. The project focuses on API integration, asynchronous JavaScript, and creating a clean, responsive user interface for accurate conversions.",
    github: "https://github.com/nainashilpi/Currency-Converter",
    website: "https://currency-converter-mu-sepia-58.vercel.app/",
    tech: ["React", "JavaScript", "REST API"],
  },
  Spotify: {
    desc: "A Spotify-inspired frontend application that replicates the UI and basic functionality of a music streaming platform. This project focuses on component-based design, responsive layouts, and frontend performance optimization.",
    github: "https://github.com/nainashilpi/Spotify-",
    website: "https://spotify-eight-sable.vercel.app/",
    tech: ["React", "CSS", "JavaScript"],
  },
  TicTacToe: {
    desc: "A classic Tic Tac Toe game built with JavaScript focusing on game logic, state management, and user interaction. This project helped strengthen my understanding of DOM manipulation and basic game development concepts.",
    github: "https://github.com/nainashilpi/Tic-Tac-Toe-game",
    website: "https://tic-tac-toe-game-smoky-mu.vercel.app/",
    tech: ["JavaScript", "HTML5", "CSS3"],
  },
  HealthBmi: {
    desc: "Health BMI is a web application that helps users calculate their Body Mass Index (BMI) based on height and weight. It provides instant results along with BMI category insights, focusing on clean UI, responsive design, and basic health awareness.",
    github: "https://github.com/nainashilpi/health-bmi-web",
    website: "https://health-bmi-web.vercel.app/",
    tech: ["JavaScript", "HTML5", "CSS3"],
  },
};

const ProjectBox = ({ projectPhoto, projectName }) => {
  // Safe lookup for project metadata
  const info = PROJECT_DETAILS[projectName] || {
    desc: "Project details coming soon.",
    github: "",
    website: "#",
    tech: [],
  };

  const hasGithub = info.github && info.github !== "";
  const hasWebsite = info.website && info.website !== "";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#12111d]/80 to-[#090810]/90 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/40 hover:shadow-[0_15px_35px_rgba(168,85,247,0.15)]">
      
      {/* PROJECT IMAGE WITH HOVER ZOOM EFFECT */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#07070d]">
        <img
          src={projectPhoto}
          alt={`${projectName} showcase`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = "none";
            e.target.parentNode.classList.add(
              "flex",
              "items-center",
              "justify-center",
              "bg-gradient-to-br",
              "from-purple-900/30",
              "to-indigo-950/40"
            );
          }}
        />
      </div>

      {/* CONTENT BODY */}
      <div className="flex flex-1 flex-col justify-between pt-5">
        <div>
          {/* TITLE */}
          <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-purple-300 sm:text-2xl">
            {projectName}
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#9a9ab0]">
            {info.desc}
          </p>

          {/* TECH STACK BADGES */}
          {info.tech && info.tech.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {info.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[11px] font-medium text-purple-300 backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* BUTTON ACTION FOOTER */}
        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
          {hasGithub && (
            <a
              href={info.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
              <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-600/20 hover:text-white active:scale-95">
                <FaGithub className="text-sm" /> GitHub
              </button>
            </a>
          )}

          {hasWebsite && (
            <a
              href={info.website}
              target="_blank"
              rel="noreferrer"
              className="flex-1"
            >
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] active:scale-95">
                <CgExternal className="text-base" /> Live Demo
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;