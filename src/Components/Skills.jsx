import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import {
  FiDatabase,
  FiCpu,
  FiLayers,
  FiTerminal,
  FiCheckCircle,
  FiZap,
  FiCode,
  FiServer,
  FiGrid,
  FiGlobe,
} from "react-icons/fi";

const skillGroups = [
  {
    number: "01",
    id: "languages",
    title: "Languages",
    subtitle: "Core Programming",
    description:
      "High-performance languages I leverage for competitive programming, algorithm optimization, and full-stack development.",
    skills: [
      { name: "C++", icon: <SiCplusplus />, color: "text-blue-400 border-blue-500/30 hover:shadow-blue-500/20" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-amber-400 border-amber-500/30 hover:shadow-amber-500/20" },
      { name: "Python", icon: <SiPython />, color: "text-yellow-400 border-yellow-500/30 hover:shadow-yellow-500/20" },
    ],
  },
  {
    number: "02",
    id: "frontend",
    title: "Frontend Engineering",
    subtitle: "User Experience & UI",
    description:
      "Modern frameworks and styling tools I use to create responsive, interactive, and high-speed user interfaces.",
    skills: [
      { name: "React.js", icon: <SiReact />, color: "text-cyan-400 border-cyan-500/30 hover:shadow-cyan-500/20" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400 border-sky-500/30 hover:shadow-sky-500/20" },
      { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500 border-orange-500/30 hover:shadow-orange-500/20" },
      { name: "CSS3", icon: <SiCss />, color: "text-blue-500 border-blue-500/30 hover:shadow-blue-500/20" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-400 border-purple-500/30 hover:shadow-purple-500/20" },
    ],
  },
  {
    number: "03",
    id: "backend",
    title: "Backend Architecture",
    subtitle: "Server & API Engine",
    description:
      "Scalable server-side environments, REST APIs, and authentication middleware built with focus on backend performance.",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-emerald-500 border-emerald-500/30 hover:shadow-emerald-500/20" },
      { name: "Express.js", icon: <SiExpress />, color: "text-slate-200 border-slate-500/30 hover:shadow-slate-500/20" },
      { name: "REST APIs", icon: <FiLayers />, color: "text-purple-300 border-purple-500/30 hover:shadow-purple-500/20" },
    ],
  },
  {
    number: "04",
    id: "database",
    title: "Databases & Storage",
    subtitle: "Data Management",
    description:
      "Document and relational databases for building reliable data models, queries, and efficient storage pipelines.",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400 border-green-500/30 hover:shadow-green-500/20" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-400 border-blue-500/30 hover:shadow-blue-500/20" },
    ],
  },
  {
    number: "05",
    id: "tools",
    title: "Developer Tools",
    subtitle: "Workflow & Versioning",
    description:
      "Essential tools, platforms, and testing suites integrated into my daily development lifecycle.",
    skills: [
      { name: "Git", icon: <SiGit />, color: "text-orange-500 border-orange-500/30 hover:shadow-orange-500/20" },
      { name: "GitHub", icon: <SiGithub />, color: "text-zinc-200 border-zinc-500/30 hover:shadow-zinc-500/20" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-400 border-orange-500/30 hover:shadow-orange-500/20" },
    ],
  },
  {
    number: "06",
    id: "cs",
    title: "Computer Science Core",
    subtitle: "CS Fundamentals",
    description:
      "Core theoretical concepts and engineering fundamentals essential for scalable system design and interview rigor.",
    skills: [
      { name: "Data Structures & Algorithms", icon: <FiCpu />, color: "text-purple-400 border-purple-500/30 hover:shadow-purple-500/20" },
      { name: "Object Oriented Prog. (OOP)", icon: <FiLayers />, color: "text-purple-400 border-purple-500/30 hover:shadow-purple-500/20" },
      { name: "DBMS", icon: <FiDatabase />, color: "text-purple-400 border-purple-500/30 hover:shadow-purple-500/20" },
      { name: "Operating Systems", icon: <FiCpu />, color: "text-purple-400 border-purple-500/30 hover:shadow-purple-500/20" },
      { name: "Computer Networks", icon: <FiGlobe />, color: "text-purple-400 border-purple-500/30 hover:shadow-purple-500/20" },
      { name: "System Design", icon: <FiTerminal />, color: "text-purple-400 border-purple-500/30 hover:shadow-purple-500/20" },
    ],
  },
];

const categories = [
  { label: "All Skills", id: "all" },
  { label: "Languages", id: "languages" },
  { label: "Frontend", id: "frontend" },
  { label: "Backend", id: "backend" },
  { label: "Database", id: "database" },
  { label: "Tools", id: "tools" },
  { label: "CS Core", id: "cs" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredGroups = activeCategory === "all" 
    ? skillGroups 
    : skillGroups.filter((g) => g.id === activeCategory);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <main className="relative min-h-screen w-full bg-[#050508] text-white overflow-hidden pt-28 sm:pt-36 pb-20">
      
      {/* ================= DYNAMIC BACKGROUND AMBIENT GLOWS ================= */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[800px] -right-40 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[1600px] -left-40 w-[450px] h-[450px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyber Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 70%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 50px 50px, 50px 50px",
        }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 py-8 sm:py-16">
        <div className="max-w-[1240px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto">
          
          <motion.div className="max-w-3xl" {...fadeUp}>
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-6">
              <FiZap className="text-purple-400 text-sm" />
              <span className="text-purple-300 text-xs font-semibold tracking-wider uppercase">
                Technical Expertise
              </span>
            </div>

            <h1 className="text-white font-black tracking-tight leading-[0.98] text-5xl sm:text-7xl font-sans">
              Technologies I use <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(168,85,247,0.2)]">
                to architect & build.
              </span>
            </h1>

            <p className="mt-6 text-[#9e9ea9] text-base sm:text-lg leading-relaxed font-normal">
              A comprehensive breakdown of programming languages, full-stack web technologies, databases, development tools, and core computer science fundamentals.
            </p>
          </motion.div>

          {/* CATEGORY FILTER TABS */}
          <motion.div 
            className="flex items-center gap-2 mt-12 overflow-x-auto pb-4 scrollbar-none border-b border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-purple-600/90 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-400/40"
                    : "bg-white/[0.03] text-[#9a9ab0] hover:bg-white/[0.08] hover:text-white border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ================= SKILL CARDS GRID ================= */}
      <section className="relative z-10 py-8">
        <div className="max-w-[1240px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto">
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredGroups.map((group, index) => (
                <motion.article
                  layout
                  key={group.title}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-[#100f1a]/80 via-[#0b0a12]/80 to-[#07070c]/90 backdrop-blur-xl hover:border-purple-500/40 hover:shadow-[0_15px_35px_rgba(168,85,247,0.12)] transition-all duration-500 overflow-hidden"
                >
                  {/* Subtle Top-Right Ambient Glow on Hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />

                  {/* Top Bar (Number & Badge) */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold text-purple-400 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10">
                        {group.number} // {group.subtitle}
                      </span>
                      <span className="text-xs text-[#767688] font-mono">
                        {group.skills.length} Tech
                      </span>
                    </div>

                    {/* Content Header */}
                    <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                      {group.title}
                    </h2>
                    <p className="mt-3 text-[#8e8e9e] text-xs sm:text-sm leading-relaxed min-h-[50px]">
                      {group.description}
                    </p>
                  </div>

                  {/* Skills Chip List */}
                  <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border bg-white/[0.03] backdrop-blur-md text-xs font-medium text-zinc-200 transition-all duration-300 hover:bg-white/[0.07] ${skill.color}`}
                      >
                        <span className="text-base">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>

                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ================= BOTTOM PHILOSOPHY STATEMENT ================= */}
      <section className="relative z-10 pt-16 sm:pt-24">
        <div className="max-w-[1240px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto">
          
          <motion.div
            className="relative p-10 sm:p-16 rounded-3xl border border-white/10 bg-gradient-to-b from-purple-950/20 via-[#0a0a10]/80 to-[#050508] backdrop-blur-2xl text-center overflow-hidden shadow-2xl"
            {...fadeUp}
          >
            {/* Center Glowing Circle Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">
                Continuous Learning Growth
              </span>

              <h2 className="text-white font-black tracking-tight text-3xl sm:text-5xl mt-3 font-sans leading-tight">
                The technology stack keeps changing. <br />
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  So do my engineering capabilities.
                </span>
              </h2>

              <p className="text-[#9696a6] text-sm sm:text-base mt-5 leading-relaxed">
                I regularly challenge myself by building full-stack platforms, optimizing backend logic, and solving complex algorithmic challenges to stay at the cutting edge.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default Skills;