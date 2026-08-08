"use client";

import { useState } from "react";
import { NewsItem } from "@/app/api/tech-news/route";

export default function TechNewsFeed({ news }: { news: NewsItem[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedExp, setSelectedExp] = useState<string>("All");
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const categories = [
    "All",
    "IT Jobs & Hiring India",
    "AI & Machine Learning",
    "Freshers & Off-Campus Drives",
    "Tech Trends & Startups",
  ];

  const expLevels = ["All", "Fresher", "0-2 Years", "2-5 Years"];

  const filteredNews = news.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesExp =
      selectedExp === "All" || item.experienceLevel === selectedExp;
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.company.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.role.toLowerCase().includes(query) ||
      (item.jobId && item.jobId.toLowerCase().includes(query)) ||
      item.tags.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesExp && matchesSearch;
  });

  return (
    <div className="w-full space-y-6">
      {/* Search & Filter Header Bar */}
      <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/10 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input Container */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search real jobs by role, company, location (e.g. Pune, Java, Google)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-xl glass-input text-sm text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/50"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Results Counter Badge */}
          <div className="flex items-center gap-2 self-start md:self-center">
            <span className="text-xs text-slate-400 font-medium">Real Job Postings:</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 backdrop-blur-md">
              {filteredNews.length} Active Positions
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
          <span className="text-xs text-slate-400 font-medium mr-1">Categories:</span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-500/40 to-cyan-500/40 border border-emerald-400/40 text-white shadow-md shadow-emerald-500/20"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Experience Level Selector */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-medium mr-1">Experience:</span>
          {expLevels.map((exp) => {
            const isActive = selectedExp === exp;
            return (
              <button
                key={exp}
                onClick={() => setSelectedExp(exp)}
                className={`px-3 py-1 rounded-lg transition-all ${
                  isActive
                    ? "bg-purple-500/30 border border-purple-400/40 text-purple-200 font-bold"
                    : "bg-white/[0.03] border border-white/5 text-slate-400 hover:text-white"
                }`}
              >
                {exp === "All" ? "All Experience Levels" : exp}
              </button>
            );
          })}
        </div>
      </div>

      {/* Real Jobs Grid */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group relative overflow-hidden space-y-4"
            >
              {/* Glow Accent */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />

              <div className="space-y-3">
                {/* Header Pills: Job ID + Verified Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                      {item.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-400 bg-white/5 border border-white/10">
                      ID: #{item.jobId}
                    </span>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Verified Posting
                  </span>
                </div>

                {/* Company Name & Role Title */}
                <div>
                  <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-0.5">
                    🏢 {item.company}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Location & Package Strip */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-1 bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/10">
                    <span>📍</span>
                    <span className="font-semibold text-white">{item.location}</span>
                  </div>
                  {item.salaryPackage && (
                    <div className="flex items-center gap-1 bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-500/30 text-emerald-300 font-mono font-semibold">
                      <span>💰</span>
                      <span>{item.salaryPackage}</span>
                    </div>
                  )}
                </div>

                {/* Job Summary */}
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                  {item.summary}
                </p>

                {/* Department & Qualification */}
                <div className="space-y-1.5 pt-1 text-[11px]">
                  {item.department && (
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <span className="text-slate-400 font-medium">Department:</span>
                      <span className="font-semibold text-white">{item.department}</span>
                    </div>
                  )}
                  {item.education && (
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <span className="text-slate-400 font-medium">Qualification:</span>
                      <span className="font-mono text-purple-300">{item.education}</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-cyan-400/90 font-mono bg-cyan-950/30 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <button
                  onClick={() => setSelectedArticle(item)}
                  className="text-slate-300 hover:text-white font-semibold flex items-center gap-1"
                >
                  View Details &rarr;
                </button>

                <a
                  href={item.applyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl glass-button text-xs font-bold text-white flex items-center gap-1.5 shadow-md hover:scale-105 transition-transform"
                >
                  <span>Apply Now</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="glass-panel rounded-3xl p-12 text-center border border-white/10 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">No Matching Job Openings</h3>
          <p className="text-sm text-slate-400 max-w-sm mb-4">
            No openings found matching &quot;{searchTerm}&quot;. Try searching for roles like Java, AI, or locations like Pune, Bengaluru, or Hyderabad.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
              setSelectedExp("All");
            }}
            className="px-4 py-2 rounded-xl glass-button text-xs font-semibold text-white"
          >
            Reset Job Search
          </button>
        </div>
      )}

      {/* Real Job Details Glass Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl p-6 sm:p-8 relative space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="space-y-4 pr-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                  {selectedArticle.category}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono text-slate-300 bg-white/5 border border-white/10">
                  Req ID: #{selectedArticle.jobId}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30">
                  Active Hiring
                </span>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-indigo-300 uppercase tracking-wider">
                  🏢 {selectedArticle.company}
                </h3>
                <h2 className="text-2xl font-extrabold text-white leading-tight mt-1">
                  {selectedArticle.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-300 font-semibold">
                  📍 Location: {selectedArticle.location}
                </span>
                {selectedArticle.salaryPackage && (
                  <span className="px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono font-bold">
                    💰 Package: {selectedArticle.salaryPackage}
                  </span>
                )}
                <span className="px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-200 font-semibold">
                  🎯 Level: {selectedArticle.experienceLevel}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Position Overview</h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedArticle.summary}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-slate-400 block mb-0.5">Department / Business Unit</span>
                  <span className="font-bold text-white">{selectedArticle.department || "Engineering"}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-slate-400 block mb-0.5">Target Education</span>
                  <span className="font-bold text-purple-300">{selectedArticle.education || "B.Tech / B.E / MCA"}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedArticle.tags.map((tag) => (
                  <span key={tag} className="text-xs text-cyan-300 font-mono bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/20">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">Portal: {selectedArticle.source}</span>
              <a
                href={selectedArticle.applyLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-xl glass-button text-xs font-bold text-white flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <span>Apply on Official Company Portal</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
