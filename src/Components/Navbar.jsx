import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiCode,
  FiUser,
  FiMail,
  FiChevronDown,
  FiTerminal,
} from "react-icons/fi";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/nainashilpi",
      icon: <FiGithub className="text-purple-400" />,
      subtext: "500+ Contributions",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/",
      icon: <FiLinkedin className="text-blue-400" />,
      subtext: "Connect & Network",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/",
      icon: <SiLeetcode className="text-amber-400" />,
      subtext: "1500+ Rating",
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/",
      icon: <SiCodechef className="text-amber-600" />,
      subtext: "2★ Competitive Coder",
    },
    {
      name: "Direct Mail",
      url: "mailto:nainashilpi.work@gmail.com",
      icon: <FiMail className="text-emerald-400" />,
      subtext: "Get in touch",
    },
  ];

  // Detect scroll position to activate floating style & scrollspy active tab
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Only calculate section scrollspy on home path
      if (location.pathname === "/") {
        const sections = navItems.map((item) => document.getElementById(item.id));
        const scrollPosition = window.scrollY + 250;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-8 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-500 border ${
          scrolled
            ? "bg-[#0b0a13]/85 backdrop-blur-xl border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.6)] py-2.5 px-5 sm:px-7"
            : "bg-[#0b0a13]/60 backdrop-blur-md border-white/10 py-3 px-5 sm:px-7"
        } flex items-center justify-between`}
      >
        {/* ================= LOGO ================= */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-black text-white text-sm shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:scale-105 transition-transform">
            N
          </div>
          <span className="font-bold text-lg text-white tracking-tight group-hover:text-purple-300 transition-colors">
            Naina<span className="text-purple-500">.</span>
          </span>
        </a>

        {/* ================= DESKTOP NAV LINKS ================= */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/5 shadow-inner">
          {navItems.map((item) => {
            const isActive = location.pathname === "/" && activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                  isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbarActiveTab"
                    className="absolute inset-0 bg-purple-600/30 border border-purple-500/50 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* ================= RIGHT ACTION AREA (PROFILE + CTA) ================= */}
        <div className="hidden md:flex items-center gap-3">
          {/* INTERACTIVE PROFILE DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold text-zinc-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
            >
              <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px]">
                <FiUser />
              </div>
              <span>Profiles</span>
              <FiChevronDown
                className={`text-xs transition-transform duration-300 ${
                  profileOpen ? "rotate-180 text-purple-400" : "text-zinc-400"
                }`}
              />
            </button>

            {/* DROPDOWN MENU */}
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-64 p-2 rounded-2xl border border-white/15 bg-[#0e0d17]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] z-50 overflow-hidden"
                >
                  <div className="px-3 py-2 mb-1 border-b border-white/10">
                    <p className="text-[11px] font-bold tracking-wider text-purple-400 uppercase">
                      Developer Profiles
                    </p>
                    <p className="text-[10px] text-zinc-400">Naina — Full Stack Dev</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-2 rounded-xl hover:bg-white/[0.06] hover:border-purple-500/30 border border-transparent transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-white/[0.05] group-hover:bg-purple-500/20 transition-colors">
                            {link.icon}
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-zinc-200 group-hover:text-white">
                              {link.name}
                            </div>
                            <div className="text-[10px] text-zinc-400">{link.subtext}</div>
                          </div>
                        </div>
                        <FiArrowUpRight className="text-zinc-400 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* DESKTOP CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300 flex items-center gap-1.5"
          >
            Let's Talk
            <FiArrowUpRight className="text-sm" />
          </a>
        </div>

        {/* ================= MOBILE HAMBURGER BUTTON ================= */}
        <button
          className="md:hidden p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white hover:text-purple-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
        </button>
      </div>

      {/* ================= MOBILE NAV MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden max-w-6xl mx-auto mt-2 rounded-3xl border border-white/10 bg-[#0e0d17]/95 backdrop-blur-2xl overflow-hidden p-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    activeSection === item.id
                      ? "bg-purple-600/20 text-purple-300 border border-purple-500/30"
                      : "text-zinc-300 hover:bg-white/[0.05]"
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <div className="my-2 border-t border-white/10" />

              {/* MOBILE SOCIAL LINKS */}
              <div className="px-2 py-1">
                <span className="text-[10px] font-bold text-purple-400 tracking-wider uppercase block mb-3">
                  Quick Social Profiles
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-zinc-300 hover:text-white"
                    >
                      {link.icon}
                      <span className="truncate">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs text-center flex items-center justify-center gap-2 shadow-lg"
              >
                Let's Talk
                <FiArrowUpRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;