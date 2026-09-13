import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const Home = () => {
  return (
    <main className="relative min-h-[calc(100vh-80px)] w-full bg-[#07070a] text-[#f5f5f5] overflow-hidden">
      <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center pt-28 pb-20 px-4 sm:px-8">
        {/* ================= BACKGROUND EFFECTS ================= */}
        {/* Glow Orbs */}
        <div className="absolute top-[5%] -left-28 w-[320px] h-[320px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 -right-36 w-[360px] h-[360px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
            maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent 90%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent 90%)"
          }}
        />

        <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-7 max-w-2xl">

            {/* Availability Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-3.5 py-2 mb-7 rounded-full border border-white/10 bg-white/[0.035] backdrop-blur-md text-[#c4c4cc] text-xs font-medium"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]"></span>
              </span>
              Open to internships & opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-white font-extrabold tracking-tight leading-[0.95] text-5xl sm:text-7xl lg:text-[5.5rem] font-sans"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Hi, I'm{" "}
              <span className="inline-block bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]">
                Naina.
              </span>
              <br />
              I build{" "}
              <span className="inline-block text-transparent [-webkit-text-stroke:2px_#a855f7] hover:[-webkit-text-stroke:0px] hover:text-purple-500 transition-all duration-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                digital
              </span>
              <br />
              experiences.
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-9 text-[#a1a1aa] text-base sm:text-lg leading-relaxed max-w-xl font-normal"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
            >
              I'm a Full Stack Developer focused on building modern, responsive, and interactive web applications using React, JavaScript, and backend technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3.5 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
            >
              <a
                href="/projects"
                className="h-12 px-6 rounded-full font-medium text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_12px_35px_rgba(168,85,247,0.25)] hover:shadow-[0_18px_45px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Explore My Work
                <FiArrowUpRight className="text-lg" />
              </a>

              <a
                href="/contact"
                className="h-12 px-6 rounded-full font-medium text-sm text-[#f5f5f5] bg-white/[0.04] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.08] backdrop-blur-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
              }}
            >
              <span className="text-xs text-[#71717a] mr-1">Find me on</span>

              <a
                href="https://github.com/nainashilpi"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#a1a1aa] border border-white/10 bg-white/[0.03] hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <FiGithub size={16} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#a1a1aa] border border-white/10 bg-white/[0.03] hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <FiLinkedin size={16} />
              </a>
            </motion.div>

          </div>

          {/* ================= RIGHT VISUAL (IDE CODE CARD) ================= */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center min-h-[420px]"
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute w-[360px] h-[360px] rounded-full bg-purple-600/20 blur-[60px] pointer-events-none" />

            {/* Main Code Card Container */}
            <motion.div
              className="w-full max-w-[540px] rounded-2xl border border-white/10 bg-gradient-to-b from-[#181824]/95 to-[#0b0b12]/95 backdrop-blur-xl shadow-[0_35px_90px_rgba(0,0,0,0.6),0_0_70px_rgba(168,85,247,0.1)] overflow-hidden relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Code Card Header */}
              <div className="h-12 flex items-center gap-2 px-4 border-b border-white/10 bg-white/[0.02]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-auto text-xs font-mono text-[#71717a]">
                  developer.js
                </span>
              </div>

              {/* Code Card Body */}
              <div className="p-6 sm:p-7 font-mono text-xs sm:text-sm leading-relaxed text-[#d4d4d8] space-y-1">
                <p>
                  <span className="text-purple-400 font-semibold">const</span> naina = {"{"}
                </p>
                <p className="pl-6">
                  name: <span className="text-emerald-300">"Naina"</span>,
                </p>
                <p className="pl-6">
                  role: <span className="text-emerald-300">"Full Stack Developer"</span>,
                </p>
                <p className="pl-6">stack: [</p>
                <p className="pl-12 text-blue-400">"React",</p>
                <p className="pl-12 text-blue-400">"JavaScript",</p>
                <p className="pl-12 text-blue-400">"Node.js",</p>
                <p className="pl-12 text-blue-400">"MongoDB"</p>
                <p className="pl-6">],</p>
                <p className="pl-6">
                  focus: <span className="text-emerald-300">"Scalable Web Apps"</span>,
                </p>
                <p className="pl-6">
                  mindset: <span className="text-emerald-300">"Always Learning"</span>
                </p>
                <p>{"}"}</p>
                <p className="text-purple-500 animate-pulse font-bold">▋</p>
              </div>
            </motion.div>

            {/* Floating Tech Badges */}
            <motion.div
              className="absolute top-6 -left-4 sm:-left-6 z-20 px-3.5 py-2 rounded-full text-xs font-semibold text-[#61dafb] bg-[#14141b]/90 border border-white/10 shadow-xl backdrop-blur-md"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              React
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-4 sm:-right-6 z-20 px-3.5 py-2 rounded-full text-xs font-semibold text-[#facc15] bg-[#14141b]/90 border border-white/10 shadow-xl backdrop-blur-md"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              JavaScript
            </motion.div>

            <motion.div
              className="absolute -bottom-4 left-8 z-20 px-3.5 py-2 rounded-full text-xs font-semibold text-[#86efac] bg-[#14141b]/90 border border-white/10 shadow-xl backdrop-blur-md"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Node.js
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="/projects"
          className="hidden sm:flex absolute bottom-7 left-1/2 -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-widest text-[#71717a] hover:text-purple-400 transition-colors duration-300 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Explore</span>
          <FiArrowDown className="text-purple-500 text-sm" />
        </motion.a>
      </section>
    </main>
  );
};

export default Home;