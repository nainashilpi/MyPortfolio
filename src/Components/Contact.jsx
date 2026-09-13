import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiCopy,
} from "react-icons/fi";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const userEmail = "nainashilpi.work@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(userEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = `Portfolio Contact — ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:${userEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="relative min-h-screen w-full bg-[#050508] text-white pt-28 pb-20 overflow-hidden font-sans">
      {/* BACKGROUND GLOW AMBIENCE */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <section className="relative z-10 w-[calc(100%-32px)] sm:w-[calc(100%-40px)] max-w-[1200px] mx-auto py-8">
        {/* ================= HEADER SECTION ================= */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            GET IN TOUCH
          </div>

          <h1 className="text-4xl sm:text-7xl font-black tracking-tight leading-[1.05] text-white">
            Let's build <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              something great.
            </span>
          </h1>

          <p className="mt-6 text-zinc-400 text-sm sm:text-lg leading-relaxed max-w-xl">
            Have an idea, a project, or an engineering opportunity? I'd love to hear about it and explore how we can collaborate.
          </p>
        </motion.div>

        {/* ================= MAIN CONTACT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 items-start">
          
          {/* LEFT SIDE: CONTACT INFO CARD */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-[#0f0e17]/80 to-[#07070c]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase block mb-6">
                DIRECT CONTACT DETAILS
              </span>

              {/* EMAIL ITEM WITH COPY ACTION */}
              <div className="group/item relative flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 mb-4">
                <a
                  href={`mailto:${userEmail}`}
                  className="flex items-center gap-4 flex-1 pr-2"
                >
                  <div className="w-12 h-12 rounded-xl border border-purple-500/20 bg-purple-500/10 flex items-center justify-center text-purple-400 text-xl shrink-0 group-hover/item:scale-110 transition-transform">
                    <FiMail />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <small className="text-[11px] font-medium text-zinc-400">Email Address</small>
                    <strong className="text-xs sm:text-sm font-semibold text-zinc-200 truncate">
                      {userEmail}
                    </strong>
                  </div>
                </a>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-purple-500/40 transition-colors"
                >
                  {copied ? <FiCheckCircle className="text-green-400" /> : <FiCopy />}
                </button>
              </div>

              {/* LOCATION ITEM */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] mb-4">
                <div className="w-12 h-12 rounded-xl border border-indigo-500/20 bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-xl shrink-0">
                  <FiMapPin />
                </div>
                <div className="flex flex-col">
                  <small className="text-[11px] font-medium text-zinc-400">Location</small>
                  <strong className="text-xs sm:text-sm font-semibold text-zinc-200">
                    Bhopal, MP, India
                  </strong>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase block mb-4">
                CONNECT ONLINE
              </span>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/nainashilpi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-300 text-xl hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 hover:scale-105 transition-all duration-300"
                >
                  <FiGithub />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-300 text-xl hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 hover:scale-105 transition-all duration-300"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: INTERACTIVE FORM CARD */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-[#0f0e17]/80 to-[#07070c]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative flex flex-col gap-6"
            >
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl border border-green-500/30 bg-green-500/10 text-green-300 text-xs font-semibold flex items-center gap-2"
                  >
                    <FiCheckCircle className="text-base shrink-0" />
                    Mail client opened! Message payload drafted successfully.
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* NAME INPUT */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase">
                    YOUR NAME
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full h-13 px-4 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm placeholder:text-zinc-600 outline-none focus:border-purple-500/60 focus:bg-purple-500/[0.02] focus:ring-4 focus:ring-purple-500/10 transition-all duration-300"
                  />
                </div>

                {/* EMAIL INPUT */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase">
                    YOUR EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full h-13 px-4 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm placeholder:text-zinc-600 outline-none focus:border-purple-500/60 focus:bg-purple-500/[0.02] focus:ring-4 focus:ring-purple-500/10 transition-all duration-300"
                  />
                </div>
              </div>

              {/* MESSAGE TEXTAREA */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase">
                  PROJECT DETAILS / MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  rows={6}
                  required
                  className="w-full p-4 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm placeholder:text-zinc-600 outline-none focus:border-purple-500/60 focus:bg-purple-500/[0.02] focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 resize-y"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="group relative w-full h-13 mt-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm flex items-center justify-between px-6 shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] active:scale-95 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <FiSend className="text-base" />
                  Send Message
                </span>
                <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </main>
  );
};

export default Contact;