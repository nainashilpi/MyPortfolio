import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiHeart,
} from "react-icons/fi";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

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
      }
    }
  };

  const navLinks = [
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
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/",
      icon: <FiLinkedin className="text-blue-400" />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/",
      icon: <SiLeetcode className="text-amber-400" />,
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/",
      icon: <SiCodechef className="text-amber-600" />,
    },
    {
      name: "Email",
      url: "mailto:yourmail@gmail.com",
      icon: <FiMail className="text-emerald-400" />,
    },
  ];

  return (
    <footer className="relative w-full bg-[#07070a] text-zinc-300 pt-16 pb-8 border-t border-white/10 overflow-hidden">
      {/* Background Decorative Gradient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* BRAND INFO */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="flex items-center gap-3 group w-fit cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-black text-white text-base shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:scale-105 transition-transform">
                N
              </div>
              <span className="font-bold text-xl text-white tracking-tight group-hover:text-purple-300 transition-colors">
                Naina<span className="text-purple-500">.</span>
              </span>
            </a>

            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Full Stack Developer & DSA Enthusiast building scalable web applications and clean digital experiences.
            </p>

            <div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for full-time roles & exciting projects.
            </div>
          </div>

          {/* LINKS GRID */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            {/* EXPLORE COLUMN */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">
                Explore
              </span>
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors group"
                    >
                      <span>{link.name}</span>
                      <FiArrowUpRight className="text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONNECT COLUMN */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">
                Connect
              </span>
              <ul className="flex flex-col gap-2.5">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors group"
                    >
                      {social.icon}
                      <span>{social.name}</span>
                      <FiArrowUpRight className="text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <span>© 2026 Naina Shilpi. All rights reserved.</span>

          <div className="flex items-center gap-1">
            <span>Built with React & Tailwind CSS</span>
            <FiHeart className="text-purple-500 inline fill-purple-500/30 text-xs ml-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;