"use client";

import { useState } from "react";
import Link from "next/link";
import SystemPerformanceModal from "@/Components/SystemPerformanceModal";

export default function Sheryians() {
  const [clickedCount, setClickedCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [showPerformanceModal, setShowPerformanceModal] = useState(false);

  const handleClick = () => {
    setClickedCount((prev) => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="space-y-8 py-4">
      {/* Toast Notification Banner */}
      {showToast && (
        <div className="fixed top-20 right-6 z-50 glass-panel border border-emerald-500/40 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-sm">
            ✓
          </div>
          <div>
            <div className="text-sm font-bold text-white">Action Triggered!</div>
            <div className="text-xs text-slate-300">
              Interactive glass button clicked ({clickedCount} times)
            </div>
          </div>
        </div>
      )}

      {/* System Performance Desktop Modal */}
      <SystemPerformanceModal
        isOpen={showPerformanceModal}
        onClose={() => setShowPerformanceModal(false)}
      />

      {/* Main Hub Section */}
      <section className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden text-center sm:text-left">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300 backdrop-blur-md">
            <span>Performance Metrics Platform</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Performance Metrics Hub</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Connect with interactive learning resources, explore live classroom rosters, and inspect desktop hardware metrics.
          </p>

          {/* Interactive Action Buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
            <button
              onClick={handleClick}
              className="px-6 py-3 rounded-xl glass-button text-sm font-bold text-white flex items-center gap-2 shadow-lg shadow-purple-500/20 active:scale-95 transition-transform"
            >
              <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              <span>Click Me ({clickedCount})</span>
            </button>

            <button
              onClick={() => setShowPerformanceModal(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-cyan-500/40 border border-white/20 text-sm font-bold text-white hover:scale-105 transition-all shadow-lg flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>View System Performance</span>
            </button>
          </div>
        </div>
      </section>

      {/* Classroom & System Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold">
              📰
            </div>
            <h3 className="text-xl font-bold text-white">Tech & AI News Portal</h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Stay informed with live hiring announcements (e.g. Google Java Developer freshers in Pune, NVIDIA AI labs), tech trends, and off-campus drives across India.
          </p>
          <Link
            href="/tech-news"
            className="inline-flex items-center gap-2 text-xs font-bold text-cyan-300 hover:text-white transition-colors"
          >
            Explore Tech & AI News Hub &rarr;
          </Link>
        </div>

        {/* Clickable Interactive System Performance Tab */}
        <div
          onClick={() => setShowPerformanceModal(true)}
          className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 space-y-4 cursor-pointer group relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-all pointer-events-none" />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-bold text-xl group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                System Performance
              </h3>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30">
              Live Monitor
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Click here to view actual desktop hardware performance including RAM usage, CPU load, storage capacity, GPU specs, and battery level.
          </p>

          <div className="pt-2 flex items-center justify-between text-xs font-bold text-indigo-300 group-hover:text-white transition-colors">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Click to Open Desktop Metrics Dashboard
            </span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
