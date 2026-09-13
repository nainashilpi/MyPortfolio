import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiCpu,
  FiLayers,
  FiZap,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetails.css";

// Dynamic Real-world Projects Data Object mapped to URL keys

const projects = {
  algopulse: {
    id: "algopulse",
    number: "01",
    category: "FULL STACK",
    title: "AlgoPulse",
    tagline: "DSA Progress Tracking Platform",

    description:
      "AlgoPulse is a platform designed to help students organize their DSA practice, track coding progress, and build consistency in problem-solving.",

    heroImage: "/images/Algopulse.png",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    features: [
      "DSA progress tracking",
      "Coding practice management",
      "Progress dashboard",
      "Problem-solving progress tracking",
    ],

    screenshots: [
      "/images/Algopulse4.png",
      "/images/Algopulse2.png",
      "/images/Algopulse3.png",
      "/images/Algopulse5.png",
      "/images/Algopulse6.png",
    ],

    challenges:
      "Organizing coding practice data and presenting progress in a clear and useful way.",

    learning:
      "Improved my understanding of full-stack development, data handling, and dashboard design.",

    github:
      "https://github.com/nainashilpi/AlgoPulse-DSA-Tracker",

    live:
      "https://algopulse-frontend.onrender.com/",
  },

  roomfinder: {
    id: "roomfinder",
    number: "02",
    category: "FULL STACK",
    title: "RoomFinder",
    tagline: "Rental & Roommate Discovery Platform",

    description:
      "RoomFinder is a full-stack platform designed to help users discover rooms, PGs, hostels, and compatible roommates through property listings and search functionality.",

    heroImage: "/images/Roomfinder.png",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    features: [
      "Property listings",
      "Room and PG discovery",
      "Roommate search",
      "Search functionality",
      "Detailed property profiles",
    ],

    screenshots: [
      "/images/Roomfinder1.png",
      "/images/Roomfinder3.png",
      "/images/Roomfinder4.png",
      "/images/Roomfinder5.png",
      "/images/Roomfinder6.png",
    ],

    challenges:
      "Designing a useful platform for users searching for rental properties and suitable roommates.",

    learning:
      "Gained practical experience in full-stack application development and property listing workflows.",

    github:
      "https://github.com/nainashilpi/RoomFinder",

    live: "",
  },

  tourmitra: {
    id: "tourmitra",
    number: "03",
    category: "FRONTEND",
    title: "TourMitra",
    tagline: "Travel & Tourism Website",

    description:
      "TourMitra is a travel and tourism website focused on presenting travel-related content and destinations through a web-based interface.",

    heroImage: "/images/Tourmitra.png",

    technologies: [
      "TypeScript",
    ],

    features: [
      "Travel website interface",
      "Tourism content",
      "Destination presentation",
      "Responsive web experience",
    ],

    screenshots: [
      "/images/Tourmitra1.png",
      "/images/Tourmitra3.png",
      "/images/Tourmitra4.png",
      "/images/Tourmitra5.png",
      "/images/Tourmitra6.png",
      "/images/Tourmitra7.png",
      "/images/Tourmitra8.png",
      "/images/Tourmitra9.png",
    ],

    challenges:
      "Creating a clear and engaging interface for presenting travel and tourism content.",

    learning:
      "Practiced TypeScript-based web development and building a travel-focused interface.",

    github:
      "https://github.com/nainashilpi/TourMitra-travel-turism",

    live: "",
  },

  airbnb: {
    id: "airbnb",
    number: "04",
    category: "FULL STACK",
    title: "Airbnb",
    tagline: "Full-Stack Property Listing Platform",

    description:
      "An Airbnb-inspired full-stack web application featuring property listings, user authentication, reviews, and maps.",

    heroImage: "/images/Airbnb.png",

    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
    ],

    features: [
      "Property listings",
      "User authentication",
      "Reviews",
      "Maps integration",
      "Property browsing",
    ],

    screenshots: [
      "/images/Airbnb.png",
    ],

    challenges:
      "Building a property listing application with multiple connected features and a backend.",

    learning:
      "Strengthened my backend development skills using Node.js, Express, MongoDB, and EJS.",

    github:
      "https://github.com/nainashilpi/Airbnb-Fullstack-Project",

    live:
      "https://airbnb-fullstack-project-d1sb.onrender.com/",
  },

  "currency-converter": {
    id: "currency-converter",
    number: "05",
    category: "FRONTEND",
    title: "Currency Converter",
    tagline: "Currency Conversion Web Application",

    description:
      "A web application that allows users to convert amounts between different currencies using exchange-rate API data.",

    heroImage: "/images/CurrencyConverter.png",

    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "REST API",
    ],

    features: [
      "Currency conversion",
      "Currency selection",
      "Amount input",
      "Exchange-rate API integration",
      "Responsive interface",
    ],

    screenshots: [
      "/images/CurrencyConverter.png",
    ],

    challenges:
      "Connecting the frontend with exchange-rate data and displaying conversion results clearly.",

    learning:
      "Practiced API integration, asynchronous JavaScript, and responsive frontend development.",

    github:
      "https://github.com/nainashilpi/Currency-Converter",

    live:
      "https://currency-converter-mu-sepia-58.vercel.app/",
  },

  "mountain-trekking-gallery": {
    id: "mountain-trekking-gallery",
    number: "06",
    category: "FRONTEND",
    title: "Mountain Trekking Gallery",
    tagline: "Mountain & Trekking Image Gallery",

    description:
      "A mountain trekking gallery project focused on presenting mountain destinations and trekking-related imagery through a visual web interface.",

    heroImage: "/images/MountainTrekking.png",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    features: [
      "Mountain image gallery",
      "Trekking-focused presentation",
      "Image-based web interface",
      "Responsive design",
    ],

    screenshots: [
      "/images/MountainTrekking.png",
    ],

    challenges:
      "Creating an attractive and organized visual experience for displaying mountain and trekking imagery.",

    learning:
      "Practiced frontend layout design, image presentation, and responsive styling.",

    github: "",

    live: "",
  },

  spotify: {
    id: "spotify",
    number: "07",
    category: "FRONTEND",
    title: "Spotify",
    tagline: "Music Streaming Interface",

    description:
      "A Spotify-inspired frontend project focused on recreating a modern music streaming interface using responsive layouts and reusable UI elements.",

    heroImage: "/images/Spotify.png",

    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],

    features: [
      "Music platform interface",
      "Responsive layout",
      "Reusable components",
      "Music-focused UI",
      "Interactive elements",
    ],

    screenshots: [
      "/images/Spotify.png",
    ],

    challenges:
      "Recreating a modern music platform interface with a clean and responsive frontend layout.",

    learning:
      "Improved my skills in React components, responsive design, and frontend UI development.",

    github:
      "https://github.com/nainashilpi/Spotify-",

    live:
      "https://spotify-eight-sable.vercel.app/",
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  
  // Default to project or fallback to algopulse if match key lowercase
  const projectKey = projectId ? projectId.toLowerCase() : "algopulse";
  const project = projects[projectKey] || projects["algopulse"];

  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.screenshots.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  if (!project) {
    return (
      <main className="project-not-found flex flex-col items-center justify-center min-h-screen bg-[#050508] text-white">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-purple-400 hover:underline"
        >
          <FiArrowLeft /> Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="project-details relative min-h-screen w-full bg-[#050508] text-white pt-28 pb-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none z-0" />
      <div className="absolute top-[800px] -left-40 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* TOP NAVIGATION BACK LINK */}
      <div className="project-details-container max-w-[1200px] w-[calc(100%-40px)] mx-auto relative z-10 mb-8">
        <Link to="/projects" className="back-projects inline-flex items-center gap-2 text-[#9e9ea9] hover:text-white transition-colors duration-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
          <FiArrowLeft className="text-purple-400" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="project-detail-hero relative z-10 pb-12">
        <div className="project-details-container max-w-[1200px] w-[calc(100%-40px)] mx-auto">
          <motion.div
            className="project-detail-heading max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="project-detail-meta flex items-center gap-3 mb-4">
              <span className="text-purple-400 font-mono text-xs font-bold px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                {project.number}
              </span>
              <span className="text-zinc-400 text-xs font-semibold tracking-widest uppercase">
                {project.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-white leading-[1.05] font-sans">
              {project.title}
            </h1>

            <p className="project-tagline text-[#9e9ea9] text-base sm:text-xl leading-relaxed mt-4 max-w-2xl">
              {project.tagline}
            </p>

            {/* ACTION BUTTONS */}
            <div className="project-detail-actions flex items-center gap-4 mt-8">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="detail-btn detail-btn-primary px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:scale-105 transition-all duration-300"
              >
                <span>Live Demo</span>
                <FiExternalLink />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="detail-btn detail-btn-secondary px-6 py-3.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-purple-500/40 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300"
              >
                <span>Source Code</span>
                <FiGithub />
              </a>
            </div>
          </motion.div>

          {/* MAIN HERO IMAGE CONTAINER */}
          <motion.div
            className="project-detail-hero-image mt-12 rounded-3xl border border-white/10 overflow-hidden bg-[#0c0c14] shadow-[0_30px_90px_rgba(0,0,0,0.6)] relative group"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[600px] transition-transform duration-700 group-hover:scale-[1.01]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
                e.target.parentNode.classList.add(
                  "min-h-[380px]",
                  "flex",
                  "items-center",
                  "justify-center",
                  "bg-gradient-to-br",
                  "from-purple-900/20",
                  "to-indigo-950/40"
                );
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="project-overview relative z-10 py-16 border-t border-white/10">
        <div className="project-details-container max-w-[1200px] w-[calc(100%-40px)] mx-auto">
          <div className="project-content-grid grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="project-section-heading lg:col-span-5">
              <span className="section-label text-purple-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                <FiCpu /> OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mt-2 font-sans">
                Architectural <br />
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  & System Concept.
                </span>
              </h2>
            </div>

            <div className="project-overview-content lg:col-span-7">
              <p className="text-[#9e9ea9] text-base leading-relaxed">
                {project.description}
              </p>

              {/* TECH STACK CHIPS */}
              <div className="detail-tech mt-8">
                <span className="detail-small-label block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                  TECHS & INFRASTRUCTURE
                </span>
                <div className="detail-tech-list flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-2xl border border-purple-500/20 bg-purple-500/5 text-purple-300 text-xs font-medium backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="project-features relative z-10 py-16 border-t border-white/10">
        <div className="project-details-container max-w-[1200px] w-[calc(100%-40px)] mx-auto">
          <div className="project-content-grid grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="project-section-heading lg:col-span-5">
              <span className="section-label text-purple-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                <FiLayers /> KEY FEATURES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mt-2 font-sans">
                Core Capability <br />
                <span className="text-purple-400">& Modules.</span>
              </h2>
            </div>

            <div className="features-list lg:col-span-7 divide-y divide-white/10">
              {project.features.map((feature, index) => (
                <motion.div
                  className="feature-item py-4 flex items-start gap-4"
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <FiCheckCircle className="text-purple-400 text-lg mt-1 shrink-0" />
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE SCREENSHOT SLIDER ================= */}
      <section className="project-screenshots relative z-10 py-16 border-t border-white/10">
        <div className="project-details-container max-w-[1200px] w-[calc(100%-40px)] mx-auto">
          
          <div className="screenshots-heading mb-10 text-center max-w-2xl mx-auto">
            <span className="section-label text-purple-400 text-xs font-bold tracking-widest uppercase">
              INTERACTIVE GALLERY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">
              Visual <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Showcase.</span>
            </h2>
          </div>

          {/* CAROUSEL CONTAINER */}
          <div className="slider-wrapper relative rounded-3xl border border-white/10 bg-[#0a0a10]/80 p-4 sm:p-6 backdrop-blur-xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#050508]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={project.screenshots[currentSlide]}
                  alt={`${project.title} screenshot ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                />
              </AnimatePresence>

              {/* CONTROLS */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-purple-600 transition-colors backdrop-blur-md"
                aria-label="Previous Slide"
              >
                <FiChevronLeft className="text-2xl" />
              </button>

              <button
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-purple-600 transition-colors backdrop-blur-md"
                aria-label="Next Slide"
              >
                <FiChevronRight className="text-2xl" />
              </button>
            </div>

            {/* THUMBNAILS NAVIGATION */}
            <div className="slider-thumbnails flex justify-center gap-3 mt-4">
              {project.screenshots.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative w-20 sm:w-28 aspect-[16/9] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    currentSlide === idx
                      ? "border-purple-500 scale-105 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= REFLECTION / CHALLENGE ================= */}
      <section className="project-reflection relative z-10 py-16 border-t border-white/10">
        <div className="project-details-container max-w-[1200px] w-[calc(100%-40px)] mx-auto">
          <div className="reflection-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="reflection-card p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
              <span className="section-label text-purple-400 text-xs font-bold tracking-widest uppercase">
                THE CHALLENGE
              </span>
              <h2 className="text-2xl font-bold text-white mt-2">Technical Obstacles.</h2>
              <p className="text-[#8e8e9e] text-sm leading-relaxed mt-4">
                {project.challenges}
              </p>
            </div>

            <div className="reflection-card p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
              <span className="section-label text-purple-400 text-xs font-bold tracking-widest uppercase">
                THE TAKEAWAY
              </span>
              <h2 className="text-2xl font-bold text-white mt-2">Key Engineering Insights.</h2>
              <p className="text-[#8e8e9e] text-sm leading-relaxed mt-4">
                {project.learning}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BOTTOM NAVIGATION ================= */}
      <section className="project-bottom relative z-10 pt-10">
        <div className="project-details-container max-w-[1200px] w-[calc(100%-40px)] mx-auto">
          <Link
            to="/projects"
            className="next-project flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-950/20 to-transparent hover:border-purple-500/40 transition-all duration-300 group"
          >
            <span className="inline-flex items-center gap-2 text-zinc-400 group-hover:text-purple-400 transition-colors text-xs font-semibold uppercase tracking-wider">
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              View all projects
            </span>
            <strong className="text-white text-base sm:text-xl font-bold font-sans">
              Back to selected work
            </strong>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;