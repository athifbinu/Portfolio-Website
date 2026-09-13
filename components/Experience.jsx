"use client";
import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/experienceData";
import { ExternalLink, Calendar, MapPin, Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Community & Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Experience & Community Roles
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Active involvement in tech hubs, developer networks, and intensive software engineering bootcamps.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-transparent" />

          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-0 sm:pl-20 group"
            >
              {/* Timeline Point Dot */}
              <div className="hidden sm:flex absolute left-6 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-[#080c14] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-[0_0_10px_#06b6d4]" />

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#0e1526]/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all shadow-xl space-y-4"
              >
                
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {item.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-base font-semibold text-blue-400">{item.organization}</p>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 transition-all"
                  >
                    <span>Connect</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{item.location}</span>
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

              </motion.div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
