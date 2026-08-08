import FilterUsers from "@/Components/Filter";

type User = {
  id: number;
  name: string;
  username: string;
  email?: string;
};

export default async function Classroom() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 3600 },
  });
  const users: User[] = await response.json();

  return (
    <main className="space-y-8 py-4">
      {/* Header Banner */}
      <section className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Live Server Directory
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Classroom <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Student Directory</span>
          </h1>

          <p className="text-slate-300 text-base leading-relaxed">
            Browse and filter through enrolled students in real-time. Click profiles or use the responsive glass filter search box below.
          </p>
        </div>
      </section>

      {/* Filter Component */}
      <FilterUsers users={users} />
    </main>
  );
}