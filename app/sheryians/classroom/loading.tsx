export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] p-8">
      <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col items-center gap-4 backdrop-blur-xl shadow-2xl">
        <div className="relative flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 border-r-indigo-400 animate-spin"></div>
          <div className="absolute w-8 h-8 rounded-full bg-cyan-500/20 blur-md"></div>
        </div>
        <div className="text-center">
          <h3 className="text-base font-bold text-white tracking-wide">Loading Classroom Roster</h3>
          <p className="text-xs text-slate-400 mt-1">Fetching live student data...</p>
        </div>
      </div>
    </div>
  );
}