"use client";

export function MainContent() {
  return (
    <div className="flex-1 border-r border-border/50 overflow-y-auto">
      <div className="max-w-2xl mx-auto p-8 space-y-8">
        {/* Window Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-muted-foreground font-mono">ABOUT</div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold leading-tight text-foreground">
            Rishabh
            <br />
            Sharma
          </h1>
          <p className="text-xs font-mono text-muted-foreground tracking-wide">
            FULL STACK DEVELOPER / BACKEND ENGINEER
          </p>
        </div>

        {/* Description */}
        <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
          Building scalable systems and high-performance backend architectures.
          Specialized in distributed systems, performance optimization, and
          clean code architecture. 700+ DSA problems solved across competitive
          programming platforms.
        </p>

        {/* Profile Card */}
        <div className="mt-12 border border-border/50 rounded-sm p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/50 to-primary/20 flex items-center justify-center">
            <span className="text-sm font-bold">RS</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-mono font-semibold text-foreground">
              RISHABH SHARMA
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              India · Available
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="https://x.com/Ronnie004681166"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
              </svg>
            </a>
            <a
              href="https://github.com/Rishabh426"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:sharmarishabh9900@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
