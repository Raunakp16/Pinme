"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email?: string;
};

export default function FilterUsers({ users }: { users: User[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(term) ||
      user.username.toLowerCase().includes(term)
    );
  });

  return (
    <div className="w-full space-y-6">
      {/* Search Bar & Counter Header */}
      <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input Container */}
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search students by name or username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-3 rounded-xl glass-input text-sm text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500/50"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-2 self-start sm:self-center">
          <span className="text-xs text-slate-400 font-medium">Showing:</span>
          <span className="px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md">
            {filteredUsers.length} of {users.length} Students
          </span>
        </div>
      </div>

      {/* User Cards Grid */}
      {filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers.map((user) => {
            // Generate initials for avatar
            const initials = user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            return (
              <div
                key={user.id}
                className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background accent hover glow */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all pointer-events-none" />

                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-[1px] shadow-md shrink-0">
                    <div className="w-full h-full bg-slate-900/90 rounded-[11px] flex items-center justify-center font-bold text-white text-sm">
                      {initials}
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white truncate group-hover:text-cyan-200 transition-colors">
                      {user.name}
                    </h3>
                    <p className="text-xs text-indigo-300 truncate">
                      @{user.username}
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950/50 border border-emerald-500/30 text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Enrolled Student
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">ID: #{user.id}</span>
                  <button className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-white font-medium transition-colors flex items-center gap-1">
                    Profile
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="glass-panel rounded-2xl p-12 text-center border border-white/10 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mb-4">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">No Students Found</h3>
          <p className="text-sm text-slate-400 max-w-sm mb-4">
            No match for &quot;{searchTerm}&quot;. Try checking for spelling errors or searching another keyword.
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="px-4 py-2 rounded-xl glass-button text-xs font-semibold text-white"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}


