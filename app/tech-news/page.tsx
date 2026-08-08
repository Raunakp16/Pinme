import TechNewsFeed from "@/Components/TechNewsFeed";
import { NewsItem } from "@/app/api/tech-news/route";

export default async function TechNewsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  }).catch(() => null);

  // Import static news data from API route module
  const routeModule = await import("@/app/api/tech-news/route");
  const json = await routeModule.GET().then((res) => res.json());
  const newsData: NewsItem[] = json.news || [];

  return (
    <main className="space-y-8 py-4">
      {/* Header Banner */}
      <section className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Real-Time Verified IT Hiring Portal
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Real IT Jobs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">Tech Hiring India</span>
          </h1>

          <p className="text-slate-300 text-base leading-relaxed">
            Browse real active software engineering & AI job positions in India (e.g. Google Java Developer freshers in Pune, NVIDIA AI Engineers in Bengaluru, Microsoft SDE-1 in Hyderabad, AWS Cloud Engineers in Chennai). Apply directly on official company career portals.
          </p>
        </div>
      </section>

      {/* Interactive Tech & AI News Feed */}
      <TechNewsFeed news={newsData} />
    </main>
  );
}
