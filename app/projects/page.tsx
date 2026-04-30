"use client";

const projects = [
  {
    id: 1,
    name: "DeployX",
    description:
      "Distributed deployment platform for frontend apps from GitHub with real-time logs and rollback capabilities.",
    tech: ["Node.js", "TypeScript", "Redis", "Cloudflare", "React"],
    github: "https://github.com/Rishabh426/DeployX",
  },
  {
    id: 2,
    name: "BlogX – Write. Share. Scale",
    description:
      "Edge-powered blogging platform built for performance with automatic CDN optimization and smart caching.",
    tech: ["Hono", "React", "Prisma", "PostgreSQL", "TypeScript"],
    github: "https://github.com/Rishabh426/BlogX",
  },
  {
    id: 3,
    name: "ProxyX – High Performance Proxy Server",
    description:
      "Scalable HTTP proxy server with multiple load balancing strategies and request routing capabilities.",
    tech: ["Node.js", "TypeScript", "YAML", "Zod"],
    github: "https://github.com/Rishabh426/proxy-server",
  },
  {
    id: 4,
    name: "dApp – Decentralized Solana Token Faucet",
    description:
      "A decentralized application (dApp) built on the Solana blockchain that allows users to interact with Solana's devnet for testing and development purposes.",
    tech: ["Typescript", "React"],
    github: "https://github.com/Rishabh426/dApp",
  },
  {
    id: 5,
    name: "Web Based Wallet",
    description: "A simple implemetation of a Web Based Web3 wallet.",
    tech: ["Typescript", "Web3", "React", "Public key Cyrptography"],
    github: "https://github.com/Rishabh426/WebBasedWallet",
  },
  {
    id: 6,
    name: "Personal Finance Tracker",
    description:
      "A comprehensive web application for tracking personal finances, managing budgets, and visualizing spending patterns. Built with Next.js, TypeScript, MongoDB, and modern UI components.",
    tech: ["TypeScript", "Next", "TailwindCSS", "Shadcn UI"],
    github:
      "https://github.com/Rishabh426/Personal_Finance_Visualizer_Assignment",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <div className="border-b border-border/50 px-8 py-6 flex items-center justify-between">
        <h1 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          Projects
        </h1>
        <a
          href="/"
          className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4"
        >
          ← Back
        </a>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto p-8 space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-border/50 rounded-sm p-8 hover:border-border/80 transition-colors group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h2>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 border border-border/50 rounded text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors hover:underline underline-offset-4 uppercase"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
