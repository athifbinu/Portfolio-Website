"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Copy, Check, Code, Sparkles } from "lucide-react";
import GithubInsights from "./GithubInsights";

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("binuathif@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-20 relative">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Passionate MERN Stack Developer
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-white/15 bg-[#0e1526] p-3 shadow-2xl group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square">
                <img
                  src="./img/about.jpeg"
                  alt="Athif About"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10">
                  <p className="text-xs font-mono text-cyan-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Focus: Scalable Web Systems & Clean Code</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-300"
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span>Hi, I'm Athif</span>
              <span className="text-cyan-400">😎</span>
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-slate-300">
              I am a dedicated <strong className="text-cyan-400 font-semibold">Full Stack MERN Developer</strong> with extensive hands-on experience building modern, user-centric web applications. I specialize in designing and engineering end-to-end web products using <span className="text-white font-medium">MongoDB, Express.js, React.js, and Node.js</span>.
            </p>

            <p className="text-base leading-relaxed text-slate-400">
              From intuitive frontend visual design to robust backend REST APIs and database schema architecture, I handle the full development lifecycle. I thrive on continuous learning and applying cutting-edge web technologies to solve real-world problems.
            </p>

            {/* Quick Email Copy Banner */}
            <div className="p-4 rounded-2xl bg-[#0e1526]/80 border border-white/10 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Direct Email</p>
                  <p className="text-sm font-semibold text-white font-mono">binuathif@gmail.com</p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-semibold transition-all active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Key Skill Feature Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <motion.div whileHover={{ y: -3 }} className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-1">
                <p className="text-2xl font-bold text-cyan-400">18+</p>
                <p className="text-xs text-slate-400">Projects Built</p>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-1">
                <p className="text-2xl font-bold text-blue-400">MERN</p>
                <p className="text-xs text-slate-400">Full Stack Mastery</p>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-1 col-span-2 sm:col-span-1">
                <p className="text-2xl font-bold text-purple-400">100%</p>
                <p className="text-xs text-slate-400">Responsive UI Design</p>
              </motion.div>
            </div>

          </motion.div>

        </div>

        {/* GitHub Insights Component */}
        <GithubInsights />

      </div>
    </section>
  );
}
