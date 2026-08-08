type CardProps = {
  title: string;
  description: string;
  category?: string;
  badge?: string;
};

export default function Card({ title, description, category = "Module", badge }: CardProps) {
  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-indigo-400/40 transition-all duration-300 w-full">
      {/* Subtle top reflection line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      {/* Background soft glow on hover */}
      <div className="absolute -inset-x-20 -top-20 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Category & Badge Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded-full backdrop-blur-md">
            {category}
          </span>
          {badge && (
            <span className="text-xs font-medium text-purple-300 bg-purple-900/30 border border-purple-500/20 px-2 py-0.5 rounded-md">
              {badge}
            </span>
          )}
        </div>

        {/* Card Title */}
        <h2 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors tracking-tight mb-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Action Link Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] text-xs font-medium text-indigo-300 group-hover:text-white transition-colors">
        <span>View Details</span>
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </div>
  );
}