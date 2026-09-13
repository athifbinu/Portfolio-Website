"use client";
import React from "react";
import { Mail, Phone, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#060910] pt-12 pb-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px]">
              <div className="w-full h-full bg-[#080c14] rounded-[11px] flex items-center justify-center text-cyan-400">
                <Code2 className="w-4 h-4" />
              </div>
            </div>
            <span className="font-bold text-lg text-white">
              Athif<span className="text-cyan-400">.dev</span>
            </span>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/athifbinu"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammed-athif-93a249214/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:binuathif@gmail.com"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+918590925382"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Copy */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Muhammed Athif. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed & Engineered with Next.js & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
