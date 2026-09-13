"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, PhoneCall, ArrowUpRight, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: Globe,
      color: "from-cyan-500 to-blue-600",
      description: "Professional, dynamic, and responsive web applications engineered using MERN stack & Next.js for high performance and business scale.",
      highlights: ["Single Page Applications (SPAs)", "RESTful API Integration", "SEO & Performance Optimization"]
    },
    {
      title: "App Development",
      icon: Smartphone,
      color: "from-blue-600 to-indigo-600",
      description: "Cross-platform hybrid mobile and web application interface development bringing responsive experience to iOS & Android platforms.",
      highlights: ["Mobile-First Interfaces", "PWA Support & Offline Caching", "Seamless Authentication"]
    },
    {
      title: "UI/UX & Frontend Design",
      icon: Palette,
      color: "from-purple-500 to-pink-600",
      description: "Creating visually stunning, intuitive user interfaces with modern glassmorphism, responsive grid systems, and fluid micro-interactions.",
      highlights: ["Wireframing & Prototyping", "Design System Implementation", "Interactive Micro-animations"]
    }
  ];

  return (
    <section id="services" className="py-20 relative bg-surface/30">
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
            <Globe className="w-3.5 h-3.5" />
            <span>Professional Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What I Can Build For You
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High quality technical services customized for personal projects, startups, and client solutions.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-3xl bg-[#0e1526]/90 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-white/5">
                    {service.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2 text-xs font-medium text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href="tel:+917594013460"
                    className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-white font-semibold text-sm transition-all group-hover:text-cyan-400"
                  >
                    <span className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-cyan-400" />
                      <span>Connect Directly</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
