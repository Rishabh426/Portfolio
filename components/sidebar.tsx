"use client";

import { useEffect, useState } from "react";

interface GitHubStats {
  currentStreak: number;
  longestStreak: number;
  totalCommits: number;
  loading: boolean;
  error: boolean;
}

export function Sidebar() {
  const quotes = [
    {
      text: '"Hard Work Beats Talent if Talent does not work hard"',
      author: "RS",
      category: "WRITING",
    },
  ];

  const [stats, setStats] = useState<GitHubStats>({
    currentStreak: 0,
    longestStreak: 0,
    totalCommits: 0,
    loading: true,
    error: false,
  });

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const res = await fetch("/api/github-stats");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setStats({
          currentStreak: data.currentStreak,
          longestStreak: data.longestStreak,
          totalCommits: data.totalCommits,
          loading: false,
          error: false,
        });
      } catch {
        setStats((prev) => ({ ...prev, loading: false, error: true }));
      }
    }

    fetchGitHubStats();
  }, []);

  return (
    <div className="w-64 border-r border-border/50 flex flex-col gap-12 px-6 py-8 overflow-y-auto">
      {/* Quote */}
      <div className="border border-border/50 rounded-sm p-6 space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {quotes[0].text}
        </p>
        <div className="text-xs text-muted-foreground font-mono">
          ~ {quotes[0].author} · {quotes[0].category}
        </div>
      </div>

      {/* GitHub Streak Widget */}
      <div className="border border-border/50 rounded-sm p-6 space-y-5">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono text-muted-foreground tracking-wider">
            GITHUB STREAK
          </div>
          {/* GitHub icon */}
          <svg
            className="w-3.5 h-3.5 text-muted-foreground"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </div>

        {stats.loading ? (
          <div className="space-y-3 animate-pulse">
            <div className="h-8 w-16 bg-border/50 rounded" />
            <div className="h-3 w-24 bg-border/50 rounded" />
            <div className="h-3 w-20 bg-border/50 rounded" />
          </div>
        ) : stats.error ? (
          <div className="text-xs text-muted-foreground font-mono">
            — failed to load
          </div>
        ) : (
          <div className="space-y-4">
            {/* Current streak — primary */}
            <div>
              <div className="text-4xl font-bold text-foreground tabular-nums">
                {stats.currentStreak}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                day{stats.currentStreak !== 1 ? "s" : ""} current streak
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border/50" />

            {/* Longest + Total */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-lg font-semibold text-foreground tabular-nums">
                  {stats.longestStreak}
                </div>
                <div className="text-xs text-muted-foreground font-mono mt-0.5">
                  LONGEST
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground tabular-nums">
                  {stats.totalCommits}
                </div>
                <div className="text-xs text-muted-foreground font-mono mt-0.5">
                  COMMITS
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Status dots */}
      <div className="border border-border/50 rounded-sm p-4 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
        </div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
}
