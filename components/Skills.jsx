"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsCategories } from "../data/skillsData";
import { Cpu, Code2, Zap, FileCode, Layers, Palette, Layout, Grid, Server, Database, Flame, Key, Terminal, GitBranch, Send, Globe, Box, Brain, Users, Clock, Sparkles } from "lucide-react";
import { FigmaIcon } from "./Icons";

const getSkillIcon = (iconName) => {
  const icons = {
    Code2: Code2,
    Zap: Zap,
    FileCode: FileCode,
    Layers: Layers,
    Palette: Palette,
    Layout: Layout,
    Grid: Grid,
    Figma: FigmaIcon,
    Server: Server,
    Cpu: Cpu,
    Database: Database,
    Flame: Flame,
    Key: Key,
    Terminal: Terminal,
    GitBranch: GitBranch,
    Send: Send,
    Globe: Globe,
    Box: Box,
    Brain: Brain,
    Users: Users,
    Clock: Clock,
    Sparkles: Sparkles
  };
  const IconComponent = icons[iconName] || Code2;
  return <IconComponent className="w-5 h-5" />;
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section id="skills" className="py-20 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & Technical Proficiency
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my frontend, backend, toolchain, and soft skill capabilities.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillsCategories.map((cat) => {
            const isActive = activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 backdrop-blur-md ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                    : "bg-[#0e1526] text-slate-400 hover:text-white border border-white/10 hover:border-cyan-500/30"
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillsCategories
              .find((c) => c.category === activeCategory)
              ?.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative p-6 rounded-2xl bg-[#0e1526]/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all shadow-lg hover:shadow-cyan-950/30 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl bg-gradient-to-tr ${skill.color} text-white shadow-md group-hover:rotate-6 transition-transform`}>
                        {getSkillIcon(skill.icon)}
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                        {skill.level}%
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5">
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
