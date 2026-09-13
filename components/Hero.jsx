"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Download, Sparkles, Code, Terminal, Layers } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none -z-10"
      />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span>Available for Full Stack Opportunities</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi 👋, I'm <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                  Muhammed Athif
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>Full Stack Developer</span>
                <span className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 text-lg font-mono">
                  MERN Stack Specialist
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Crafting high-performance, scalable web applications with <strong className="text-slate-200">MongoDB, Express.js, React, and Node.js</strong>. Dedicated to building seamless user experiences from design concepts to production deployment.
            </p>

            {/* CTAs & Socials */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Contact Me</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="./Resume/Athif Resume.pdf"
                target="_blank"
                download
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300"
                title="Download Resume"
              >
                <Download className="w-5 h-5 text-slate-400" />
                <span className="sm:inline">Resume</span>
              </motion.a>
            </div>

            {/* Social Icons Quick Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 border-t border-white/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Connect:</span>
              <motion.a
                whileHover={{ scale: 1.15, rotate: 5 }}
                href="https://github.com/athifbinu"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, rotate: -5 }}
                href="https://www.linkedin.com/in/muhammed-athif-93a249214/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, rotate: 5 }}
                href="https://dev.to/athifbinu"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all font-mono font-bold text-sm"
                title="Dev.to"
              >
                DEV
              </motion.a>
            </div>

          </motion.div>

          {/* Right Column: Hero Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Outer Glow aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

              {/* Profile Card Container */}
              <div className="relative w-72 sm:w-80 lg:w-96 rounded-3xl bg-[#0e1526]/90 border border-white/15 p-6 backdrop-blur-2xl shadow-2xl space-y-6">
                
                {/* Image Container with Radial Border */}
                <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-inner group">
                  <img
                    src="./img/profile.jpg"
                    alt="Muhammed Athif Profile"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-40"></div>
                </div>

                {/* Floating Tech Badges */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <motion.div whileHover={{ y: -3 }} className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 flex flex-col items-center">
                    <Code className="w-5 h-5 text-cyan-400 mb-1" />
                    <span className="text-[11px] font-semibold text-slate-300">Frontend</span>
                  </motion.div>
                  <motion.div whileHover={{ y: -3 }} className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 flex flex-col items-center">
                    <Terminal className="w-5 h-5 text-blue-400 mb-1" />
                    <span className="text-[11px] font-semibold text-slate-300">Backend</span>
                  </motion.div>
                  <motion.div whileHover={{ y: -3 }} className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 flex flex-col items-center">
                    <Layers className="w-5 h-5 text-purple-400 mb-1" />
                    <span className="text-[11px] font-semibold text-slate-300">Full Stack</span>
                  </motion.div>
                </div>

                {/* Quick Bio Tagline */}
                <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-center">
                  <p className="text-xs font-mono text-cyan-300">
                    &lt;code&gt; MERN | React | Node | Next &lt;/code&gt;
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
