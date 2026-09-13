import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiServer,
  FiBookOpen,
  FiLayers,
  FiCpu,
  FiAward,
  FiTerminal,
  FiCheckCircle,
  FiGlobe,
  FiZap,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiExpress,
  SiGit,
} from "react-icons/si";

// 3D Tilt Card Component for Hero Profile
const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12 shadow-2xl", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#12111d]/90 via-[#0d0c15]/80 to-[#07070a]/90 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-6 sm:p-8 hover:border-purple-500/40 transition-colors duration-500"
    >
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </motion.div>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState("all");

  const fadeUp = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const techStack = [
    { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-emerald-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Git / GitHub", icon: <SiGit className="text-orange-500" /> },
  ];

  return (
    <main className="relative min-h-screen w-full bg-[#050508] text-white overflow-hidden pt-28 sm:pt-36">
      {/* ================= DYNAMIC AMBIENT LIGHTING ================= */}
      <div className="absolute top-20 -left-48 w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-[600px] -right-48 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[1600px] left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Cyber Grid Background Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 60%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
        }}
      />

      {/* ================= ABOUT HERO SECTION ================= */}
      <section className="relative z-10 py-12 sm:py-20">
        <div className="max-w-[1240px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Intro Content */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-purple-300 text-xs font-medium tracking-wider uppercase">
                Software Developer & Student
              </span>
            </div>

            <h1 className="text-white font-black tracking-tight leading-[0.95] text-5xl sm:text-7xl lg:text-8xl font-sans">
              Crafting <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(168,85,247,0.2)]">
                Digital Logic.
              </span>
            </h1>

            <p className="mt-7 text-[#9e9ea9] text-base sm:text-xl leading-relaxed max-w-xl font-normal">
              Passionate about full-stack engineering, clean architecture, and building user-centric Web applications with interactive smoothness.
            </p>

            {/* Quick Stats Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/10 max-w-lg">
              <div>
                <h4 className="text-2xl sm:text-4xl font-extrabold text-white">500+</h4>
                <p className="text-[#80808e] text-xs sm:text-sm mt-1">DSA Solved</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-4xl font-extrabold text-white font-sans">
                  2027
                </h4>
                <p className="text-[#80808e] text-xs sm:text-sm mt-1">Graduation</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-4xl font-extrabold text-purple-400">MERN</h4>
                <p className="text-[#80808e] text-xs sm:text-sm mt-1">Stack Specialty</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Interactive 3D Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TiltCard>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs text-[#787885] font-mono">naina.dev</span>
              </div>

              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <p className="text-purple-400">
                  <span className="text-purple-300">const</span> developer = {"{"}
                </p>
                <p className="pl-4 text-[#d4d4d8]">
                  name: <span className="text-emerald-400">'Naina'</span>,
                </p>
                <p className="pl-4 text-[#d4d4d8]">
                  role: <span className="text-emerald-400">'Full Stack Developer'</span>,
                </p>
                <p className="pl-4 text-[#d4d4d8]">
                  education: <span className="text-emerald-400">'B.Tech (IT) @ UIT RGPV'</span>,
                </p>
                <p className="pl-4 text-[#d4d4d8]">
                  location: <span className="text-emerald-400">'Bhopal, India'</span>,
                </p>
                <p className="pl-4 text-[#d4d4d8]">
                  leadership: <span className="text-emerald-400">'Head of DSA @ ASPER'</span>
                </p>
                <p className="text-purple-400">{"};"}</p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs text-[#9a9ab0]">
                  <FiMapPin className="text-purple-400" /> Bhopal, MP
                </span>
                <span className="flex items-center gap-2 text-xs text-[#9a9ab0]">
                  <FiTerminal className="text-purple-400" /> Open to Opportunities
                </span>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </section>

      {/* ================= TECH STACK MARQUEE / BADGES ================= */}
      <section className="relative z-10 py-12 border-y border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-[1240px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto">
          <p className="text-center text-xs font-semibold tracking-[0.2em] text-[#767685] uppercase mb-8">
            Core Technologies & Tools
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-purple-500/40 hover:bg-purple-500/[0.08] transition-all cursor-default shadow-lg"
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="text-xs sm:text-sm font-medium text-[#d4d4d8]">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT I DO (DOMAINS) ================= */}
      <section className="relative z-10 py-24 sm:py-32">
        <div className="max-w-[1240px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto">
          
          <motion.div className="mb-16" {...fadeUp}>
            <div className="flex items-center gap-2 mb-3 text-purple-400 text-xs font-semibold tracking-[0.2em]">
              <FiZap /> EXPERTISE & PASSION
            </div>
            <h2 className="text-white font-extrabold tracking-tight leading-tight text-4xl sm:text-6xl font-sans">
              What I bring to <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">the table.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Frontend */}
            <motion.div
              className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl hover:border-purple-500/40 hover:bg-gradient-to-b hover:from-purple-600/[0.08] hover:to-transparent transition-all duration-500"
              {...fadeUp}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-300 text-2xl group-hover:scale-110 transition-transform">
                <FiCode />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Frontend Development</h3>
              <p className="text-[#8e8e9c] text-sm leading-relaxed mb-6">
                Creating responsive, high-performance web UIs with modern React patterns, smooth Framer Motion animations, and Tailwind styling.
              </p>
              <ul className="space-y-2 text-xs text-[#a1a1b3]">
                <li className="flex items-center gap-2"><FiCheckCircle className="text-purple-400" /> Interactive React UIs</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-purple-400" /> Responsive Tailwind Layouts</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-purple-400" /> Smooth Micro-animations</li>
              </ul>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl hover:border-purple-500/40 hover:bg-gradient-to-b hover:from-purple-600/[0.08] hover:to-transparent transition-all duration-500"
              {...fadeUp}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-300 text-2xl group-hover:scale-110 transition-transform">
                <FiServer />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Backend & APIs</h3>
              <p className="text-[#8e8e9c] text-sm leading-relaxed mb-6">
                Architecting robust backend services, scalable Express REST APIs, secure authentication systems (JWT), and database management.
              </p>
              <ul className="space-y-2 text-xs text-[#a1a1b3]">
                <li className="flex items-center gap-2"><FiCheckCircle className="text-purple-400" /> Express REST Endpoints</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-purple-400" /> JWT Auth & Middleware</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-purple-400" /> MongoDB Schema Design</li>
              </ul>
            </motion.div>

            {/* DSA & Problem Solving */}
            <motion.div
              className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl hover:border-purple-500/40 hover:bg-gradient-to-b hover:from-purple-600/[0.08] hover:to-transparent transition-all duration-500"
              {...fadeUp}
              transition={{ delay: 0.3 }}
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-300 text-2xl group-hover:scale-110 transition-transform">
                <FiCpu />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Data Structures & Algo</h3>
              <p className="text-[#8e8e9c] text-sm leading-relaxed mb-6">
                Strong foundation in C++ problem-solving, algorithm efficiency, and leading DSA sessions for fellow tech enthusiasts.
              </p>
              <ul className="space-y-2 text-xs text-[#a1a1b3]">
                <li className="flex items-center gap-2"><FiCheckCircle className="text-purple-400" /> 500+ Solved Problems</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-purple-400" /> Efficient Algorithm Design</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-purple-400" /> Technical Mentorship</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= JOURNEY TIMELINE ================= */}
      <section className="relative z-10 py-24 sm:py-32 bg-white/[0.01]">
        <div className="max-w-[1240px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto">
          
          <motion.div className="mb-20 text-center" {...fadeUp}>
            <span className="text-purple-400 text-xs font-semibold tracking-[0.2em] uppercase">
              MILESTONES
            </span>
            <h2 className="text-white font-extrabold text-4xl sm:text-6xl mt-2 font-sans">
              My Developer <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Timeline</span>
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Center Glowing Line */}
            <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0" />

            {/* Timeline Item 1 */}
            <motion.div className="relative mb-16 sm:mb-20 pl-10 sm:pl-0 sm:flex items-center justify-between" {...fadeUp}>
              <div className="sm:w-5/12 sm:text-right sm:pr-10">
                <span className="text-purple-400 text-xs font-semibold">2023 - PRESENT</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">B.Tech in Information Technology</h3>
                <p className="text-xs text-[#78788a] mt-1">University Institute of Technology, RGPV Bhopal</p>
                <p className="text-[#9292a0] text-xs sm:text-sm mt-3 leading-relaxed">
                  Building strong fundamentals in Computer Science, Systems, Data Structures, and Database Management.
                </p>
              </div>
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 sm:top-auto w-5 h-5 rounded-full border-4 border-[#050508] bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,1)]" />
              <div className="hidden sm:block sm:w-5/12 sm:pl-10" />
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div className="relative mb-16 sm:mb-20 pl-10 sm:pl-0 sm:flex items-center justify-between" {...fadeUp}>
              <div className="hidden sm:block sm:w-5/12 sm:pr-10" />
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 sm:top-auto w-5 h-5 rounded-full border-4 border-[#050508] bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,1)]" />
              <div className="sm:w-5/12 sm:pl-10">
                <span className="text-purple-400 text-xs font-semibold">2025 - PRESENT</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">Head of DSA Department</h3>
                <p className="text-xs text-[#78788a] mt-1">ASPER Coding Club</p>
                <p className="text-[#9292a0] text-xs sm:text-sm mt-3 leading-relaxed">
                  Leading Data Structures & Algorithms sessions, organizing technical coding drives, and mentoring students.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div className="relative pl-10 sm:pl-0 sm:flex items-center justify-between" {...fadeUp}>
              <div className="sm:w-5/12 sm:text-right sm:pr-10">
                <span className="text-purple-400 text-xs font-semibold">CURRENT FOCUS</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-1">Full-Stack Projects & Growth</h3>
                <p className="text-xs text-[#78788a] mt-1">AlgoPulse, RoomFinder, TourMitra</p>
                <p className="text-[#9292a0] text-xs sm:text-sm mt-3 leading-relaxed">
                  Engineered end-to-end full-stack applications with dynamic UI, custom APIs, JWT auth, and database architecture.
                </p>
              </div>
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 sm:top-auto w-5 h-5 rounded-full border-4 border-[#050508] bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,1)] animate-ping" />
              <div className="hidden sm:block sm:w-5/12 sm:pl-10" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= PROFILES & CONNECT ================= */}
      <section className="relative z-10 py-20 sm:py-28">
        <div className="max-w-[1240px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto">
          
          <motion.div className="p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-r from-purple-900/20 via-indigo-900/10 to-transparent backdrop-blur-2xl relative overflow-hidden" {...fadeUp}>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-sans">
                  Let’s Connect & <span className="text-purple-400">Collaborate</span>
                </h2>
                <p className="text-[#9e9ea9] text-sm sm:text-base mt-4 leading-relaxed max-w-xl">
                  Whether you have a project idea, an open software engineering role, or just want to chat about DSA & Web Development — feel free to reach out!
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/nainashilpi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/[0.05] hover:border-purple-500/50 hover:bg-purple-500/10 transition-all font-semibold text-sm group"
                >
                  <FiGithub className="text-xl group-hover:scale-110 transition-transform" /> GitHub
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-purple-500/50 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition-all font-semibold text-sm shadow-[0_10px_25px_rgba(168,85,247,0.3)] group"
                >
                  <FiLinkedin className="text-xl group-hover:scale-110 transition-transform" /> LinkedIn <FiArrowUpRight />
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default About;