import Card from "@/Components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12 py-4">
      {/* Hero Header Section */}
      <section className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/10 text-center sm:text-left">
        {/* Glow ambient background sphere */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            ✨ Welcome to Pin Me
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Your Live Gateway to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              IT Jobs, AI & Performance
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Discover verified tech recruitment drives across India (Google, Microsoft, NVIDIA, AWS, TCS), track real-time desktop hardware analytics, and monitor mobile battery health in a responsive frosted glass experience.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
            <Link
              href="/tech-news"
              className="px-6 py-3 rounded-xl glass-button text-sm font-bold text-white flex items-center gap-2 shadow-lg shadow-indigo-500/20 hover:scale-105 transition-transform"
            >
              <span>Explore Real IT Jobs</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/sheryians"
              className="px-6 py-3 rounded-xl glass-panel glass-panel-hover text-sm font-semibold text-slate-200 hover:text-white flex items-center gap-2"
            >
              <span>System Performance</span>
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300">1,000+</div>
            <div className="text-xs text-slate-400">Verified Job Positions</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-300">Real-Time</div>
            <div className="text-xs text-slate-400">Hardware Sensors</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-300">AI & Cloud</div>
            <div className="text-xs text-slate-400">Tech Industry Trends</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300">100%</div>
            <div className="text-xs text-slate-400">Mobile Responsive</div>
          </div>
        </div>
      </section>

      {/* Featured Platform Modules Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Core Platform Modules</h2>
            <p className="text-sm text-slate-400">Live tools and intelligence curated on Pin Me</p>
          </div>
          <span className="text-xs font-mono text-cyan-400">Pin Me Ecosystem</span>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Real IT & AI Job Hiring"
            description="Track real recruitment drives from Google, Microsoft, NVIDIA, AWS, TCS & Wipro across Pune, Bengaluru, Hyderabad, and major tech hubs in India with direct apply links."
            category="Hiring Portal"
            badge="Live Verified"
          />
          <Card
            title="Hardware Analytics"
            description="Monitor desktop RAM usage, CPU processor load, storage capacity, GPU specs, and mobile battery health with dynamic single/multi-core benchmark scores."
            category="System Monitor"
            badge="Real-Time"
          />
          <Card
            title="Glassmorphism Design"
            description="Built with a responsive frosted glass theme featuring dynamic backdrop blurs, glow highlights, active route navigation, and mobile hamburger drawer navigation."
            category="UI Architecture"
            badge="Responsive"
          />
        </div>
      </section>
    </div>
  );
}


