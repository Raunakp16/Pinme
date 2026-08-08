import Link from "next/link";

export default function About() {
  const techStack = [
    { name: "Next.js 16", type: "Framework" },
    { name: "React 19", type: "Library" },
    { name: "Tailwind CSS v4", type: "Styling" },
    { name: "TypeScript 5", type: "Language" },
    { name: "Backdrop Filter", type: "CSS Effect" },
    { name: "App Router", type: "Routing" },
  ];

  return (
    <div className="space-y-8 py-4">
      {/* Header Banner */}
      <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 backdrop-blur-md mb-4">
            <span>Platform Overview</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            About Our Glass Portal
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Welcome to the About page! This portal combines frosted glass paneling, translucent color gradients, dynamic hover interactions, and responsive layouts to provide a clean and futuristic user experience.
          </p>
        </div>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px] shadow-md flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white">Glassmorphism Aesthetic</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Every component uses CSS backdrop blurs (`backdrop-blur-md`), subtle 1px white border transparency, floating ambient glow keyframe animations, and depth layers.
          </p>
        </div>

        <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 p-[1px] shadow-md flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white">100% Mobile Responsive</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Layouts scale fluidly from compact mobile viewports (with slide-down hamburger drawer navigation) to wide 4K desktop screens.
          </p>
        </div>
      </div>

      {/* Tech Stack Pills Section */}
      <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
        <h2 className="text-lg font-bold text-white">Technologies & Tools</h2>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 flex items-center gap-2.5 backdrop-blur-md transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span className="text-sm font-semibold text-white">{tech.name}</span>
              <span className="text-[10px] text-indigo-300 uppercase tracking-wider font-mono">
                {tech.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer link */}
      <div className="flex justify-end pt-2">
        <Link
          href="/sheryians"
          className="px-6 py-3 rounded-xl glass-button text-sm font-semibold text-white flex items-center gap-2"
        >
          Go to Performance Metrics Hub
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}