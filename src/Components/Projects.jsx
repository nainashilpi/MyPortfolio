
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Projects.css";
import { projects } from "../data/projects";

const categories = [
  "ALL",
  "FULL STACK",
  "AI / NEXT.JS",
  "FRONTEND",
  "BACKEND",
  "MOBILE",
  "SYSTEM DESIGN",
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  };

  return (
    <main className="projects-page relative min-h-screen w-full bg-[#050508] text-white overflow-hidden pt-28 sm:pt-36 pb-20">

      {/* Background Ambient Glows */}

      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="absolute top-[900px] -right-40 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* HERO SECTION */}

      <section className="projects-hero relative z-10 py-8 sm:py-16">

        <div className="projects-container max-w-[1240px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto">

          <motion.div
            className="projects-heading max-w-3xl"
            {...fadeUp}
          >

            <div className="section-label inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-6">

              <FiZap className="text-purple-400 text-sm" />

              <span className="text-purple-300 text-xs font-semibold tracking-wider uppercase">
                SELECTED WORK
              </span>

            </div>

            <h1 className="text-white font-black tracking-tight leading-[0.98] text-5xl sm:text-7xl font-sans">

              Things I've <br />

              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(168,85,247,0.2)]">
                built & deployed.
              </span>

            </h1>

            <p className="mt-6 text-[#9e9ea9] text-base sm:text-lg leading-relaxed font-normal">
              A curated showcase of full-stack web applications,
              frontend projects, and technical work built with
              focus on performance, functionality, and user experience.
            </p>

          </motion.div>

          {/* FILTER CATEGORIES */}

          <motion.div
            className="flex items-center gap-2 mt-12 overflow-x-auto pb-4 scrollbar-none border-b border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-purple-600/90 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-400/40"
                    : "bg-white/[0.03] text-[#9a9ab0] hover:bg-white/[0.08] hover:text-white border border-white/5"
                }`}
              >
                {category}
              </button>

            ))}

          </motion.div>

        </div>

      </section>

      {/* PROJECTS LIST */}

      <section className="projects-section relative z-10 py-10">

        <div className="projects-container max-w-[1240px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto">

          <div className="projects-list flex flex-col gap-16 sm:gap-24">

            <AnimatePresence mode="popLayout">

              {filteredProjects.map((project, index) => (

                <motion.article
                  layout
                  className="project-card group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-[#100f1a]/80 via-[#0b0a12]/80 to-[#07070c]/90 backdrop-blur-xl hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] transition-all duration-500"
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >

                  {/* PROJECT IMAGE */}

                  <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c14] relative">

                    <Link
                      to={`/projects/${project.id}`}
                      className="project-image-wrapper block group/img relative overflow-hidden"
                    >

                      <div className="project-image aspect-[16/9] overflow-hidden">

                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                            event.currentTarget.parentNode.classList.add(
                              "flex",
                              "items-center",
                              "justify-center",
                              "bg-gradient-to-br",
                              "from-purple-900/30",
                              "to-indigo-900/30"
                            );
                          }}
                        />

                        <div className="project-image-overlay absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm">

                          <span>Explore Details</span>

                          <FiArrowUpRight className="text-lg transition-transform group-hover/img:translate-x-1 group-hover/img:-translate-y-1" />

                        </div>

                      </div>

                    </Link>

                  </div>

                  {/* PROJECT INFORMATION */}

                  <div className="project-info lg:col-span-5 flex flex-col justify-between h-full">

                    <div>

                      {/* NUMBER AND CATEGORY */}

                      <div className="project-meta flex items-center justify-between gap-4 mb-4">

                        <span className="project-number font-mono text-xs font-bold text-purple-400 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10">
                          {project.number} // {project.category}
                        </span>

                        {project.featured && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                            Featured Project
                          </span>
                        )}

                      </div>

                      {/* TITLE AND DESCRIPTION */}

                      <div className="project-main-info">

                        <Link
                          to={`/projects/${project.id}`}
                          className="project-title text-2xl sm:text-4xl font-bold text-white hover:text-purple-300 transition-colors inline-flex items-center gap-2 group/title"
                        >

                          {project.title}

                          <FiArrowUpRight className="text-xl opacity-0 -translate-x-2 translate-y-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 group-hover/title:translate-y-0 transition-all duration-300" />

                        </Link>

                        <h3 className="text-xs sm:text-sm font-semibold text-purple-400/90 mt-1">
                          {project.tagline}
                        </h3>

                        <p className="project-description text-[#8e8e9e] text-xs sm:text-sm leading-relaxed mt-4">
                          {project.description}
                        </p>

                      </div>

                      {/* TECHNOLOGIES */}

                      <div className="project-tech flex flex-wrap gap-2 mt-6">

                        {project.technologies.map((technology) => (

                          <span
                            key={technology}
                            className="px-3 py-1 rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 text-xs font-medium hover:border-purple-500/30 transition-colors"
                          >
                            {technology}
                          </span>

                        ))}

                      </div>

                    </div>

                    {/* LINKS */}

                    <div className="project-links flex items-center gap-3 mt-8 pt-6 border-t border-white/10">

                      {project.github && (

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub Repository"
                          className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-zinc-300 hover:text-white hover:border-purple-500 hover:bg-purple-600/20 transition-all duration-300"
                        >
                          <FiGithub className="text-lg" />
                        </a>

                      )}

                      <Link
                        to={`/projects/${project.id}`}
                        aria-label="View Project"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                      >

                        <span>View Details</span>

                        <FiArrowUpRight className="text-sm" />

                      </Link>

                    </div>

                  </div>

                </motion.article>

              ))}

            </AnimatePresence>

          </div>

        </div>

      </section>

      {/* BOTTOM STATEMENT */}

      <section className="projects-bottom relative z-10 pt-16 sm:pt-24">

        <div className="projects-container max-w-[1240px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto">

          <motion.div
            className="projects-bottom-inner relative p-10 sm:p-16 rounded-3xl border border-white/10 bg-gradient-to-b from-purple-950/20 via-[#0a0a10]/80 to-[#050508] backdrop-blur-2xl text-center overflow-hidden shadow-2xl"
            {...fadeUp}
          >

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">

              <span className="section-label inline-block text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">
                MORE TO COME
              </span>

              <h2 className="text-white font-black tracking-tight text-3xl sm:text-5xl mt-3 font-sans leading-tight">

                Always building. <br />

                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Always learning.
                </span>

              </h2>

              <p className="text-[#9696a6] text-sm sm:text-base mt-4 leading-relaxed">
                Currently working on scalable applications,
                backend development, and full-stack projects.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
};

export default Projects;