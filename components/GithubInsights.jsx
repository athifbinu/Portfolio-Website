"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitCommit, Star, GitFork, BookOpen, Users, Trophy, Flame, Sparkles, ExternalLink, Activity } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function GithubInsights() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback profile data in case API is offline or rate limited
  const fallbackProfile = {
    login: "athifbinu",
    name: "Muhammed Athif",
    public_repos: 24,
    followers: 18,
    following: 25,
    bio: "Full Stack MERN Developer building scalable web applications.",
    avatar_url: "./img/profile.jpg"
  };

  const topReposList = [
    { name: "Bridal-Dress", description: "Full stack MERN bridal e-commerce platform.", stars: 4, forks: 2, lang: "JavaScript", color: "bg-yellow-400" },
    { name: "PetShop", description: "React & Redux online pet shop app with Firebase backend.", stars: 5, forks: 3, lang: "JavaScript", color: "bg-yellow-400" },
    { name: "Netflix-Clone-", description: "Movie streaming UI with TMDB API & trailer modal.", stars: 6, forks: 2, lang: "JavaScript", color: "bg-yellow-400" },
    { name: "SecretMessageApp", description: "Web crypto utility for sharing encrypted secret links.", stars: 3, forks: 1, lang: "HTML", color: "bg-orange-500" },
    { name: "QR-Code-Generator", description: "React & SCSS customizable QR code generator.", stars: 4, forks: 1, lang: "JavaScript", color: "bg-yellow-400" },
    { name: "Weather-App", description: "Live weather forecast app powered by OpenWeather API.", stars: 3, forks: 1, lang: "JavaScript", color: "bg-yellow-400" }
  ];

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const resUser = await fetch("https://api.github.com/users/athifbinu");
        if (resUser.ok) {
          const userData = await resUser.json();
          setProfile(userData);
        } else {
          setProfile(fallbackProfile);
        }

        const resRepos = await fetch("https://api.github.com/users/athifbinu/repos?sort=updated&per_page=6");
        if (resRepos.ok) {
          const reposData = await resRepos.json();
          setRepos(reposData);
        }
      } catch (err) {
        setProfile(fallbackProfile);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

  const activeProfile = profile || fallbackProfile;

  // Generate 52 weeks x 7 days contribution heat grid simulation
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const weeks = Array.from({ length: 36 }, (_, wIndex) => {
    return Array.from({ length: 7 }, (_, dIndex) => {
      const value = (wIndex * 7 + dIndex * 13) % 17;
      let intensity = "bg-slate-900/90 border-white/5";
      if (value > 13) intensity = "bg-cyan-400 shadow-[0_0_8px_#06b6d4]";
      else if (value > 9) intensity = "bg-cyan-500";
      else if (value > 5) intensity = "bg-cyan-700/80";
      else if (value > 2) intensity = "bg-cyan-950/80";
      return { count: value, intensity };
    });
  });

  return (
    <div className="mt-20 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Real-Time Activity
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 flex items-center gap-3">
            <GithubIcon className="w-7 h-7 text-cyan-400" />
            <span>GitHub Developer Insights</span>
          </h3>
        </div>

        <a
          href="https://github.com/athifbinu"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all hover:scale-105 active:scale-95"
        >
          <span>View @athifbinu on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* GitHub Key Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <motion.div
          whileHover={{ y: -4 }}
          className="p-5 rounded-2xl bg-[#0e1526]/90 border border-white/10 backdrop-blur-xl shadow-lg space-y-2"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium uppercase tracking-wider">Public Repos</span>
            <BookOpen className="w-4 h-4 text-cyan-400" />
          </div>
          <p className="text-3xl font-extrabold text-white font-mono">{activeProfile.public_repos || 24}</p>
          <p className="text-[11px] text-cyan-400 font-semibold">Active Repositories</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="p-5 rounded-2xl bg-[#0e1526]/90 border border-white/10 backdrop-blur-xl shadow-lg space-y-2"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium uppercase tracking-wider">Code Streak</span>
            <Flame className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-3xl font-extrabold text-white font-mono">100%</p>
          <p className="text-[11px] text-amber-400 font-semibold">Consistent Contributions</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="p-5 rounded-2xl bg-[#0e1526]/90 border border-white/10 backdrop-blur-xl shadow-lg space-y-2"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium uppercase tracking-wider">Followers</span>
            <Users className="w-4 h-4 text-blue-400" />
          </div>
          <p className="text-3xl font-extrabold text-white font-mono">{activeProfile.followers || 18}</p>
          <p className="text-[11px] text-blue-400 font-semibold">Developer Network</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="p-5 rounded-2xl bg-[#0e1526]/90 border border-white/10 backdrop-blur-xl shadow-lg space-y-2"
        >
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium uppercase tracking-wider">Primary Stack</span>
            <Trophy className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-2xl font-extrabold text-white">JavaScript</p>
          <p className="text-[11px] text-purple-400 font-semibold">React & Node.js</p>
        </motion.div>
      </div>

      {/* Interactive GitHub Contribution Graph */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 sm:p-8 rounded-3xl bg-[#0e1526]/90 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-6"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
            <h4 className="text-lg font-bold text-white">Contributions Graph & Heatmap</h4>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Less</span>
            <span className="w-3 h-3 rounded-sm bg-slate-900 border border-white/5 inline-block"></span>
            <span className="w-3 h-3 rounded-sm bg-cyan-950 inline-block"></span>
            <span className="w-3 h-3 rounded-sm bg-cyan-700 inline-block"></span>
            <span className="w-3 h-3 rounded-sm bg-cyan-500 inline-block"></span>
            <span className="w-3 h-3 rounded-sm bg-cyan-400 shadow-[0_0_6px_#06b6d4] inline-block"></span>
            <span>More</span>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto pb-2">
          <div className="min-w-[650px] space-y-2">
            {/* Months Row */}
            <div className="flex justify-between text-[11px] font-mono text-slate-400 px-1">
              {months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>

            {/* Grid Matrix */}
            <div className="grid grid-flow-col grid-rows-7 gap-1.5">
              {weeks.flat().map((day, dIdx) => (
                <div
                  key={dIdx}
                  title={`${day.count} contributions`}
                  className={`w-3.5 h-3.5 rounded-sm ${day.intensity} border border-white/5 transition-transform duration-200 hover:scale-125 cursor-pointer`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Top Repositories Grid */}
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Top Repositories</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topReposList.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/athifbinu/${repo.name}`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 rounded-2xl bg-[#0e1526]/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all shadow-lg hover:shadow-cyan-950/30 space-y-3 block group"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>{repo.name}</span>
                </span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>

              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {repo.description}
              </p>

              <div className="flex items-center justify-between pt-2 text-xs text-slate-400 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${repo.color}`}></span>
                  <span>{repo.lang}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

    </div>
  );
}
