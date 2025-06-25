import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "Commit Lens",
      description:
        "A powerful compiler that can compile JavaScript, TypeScript, C, and C++ with an enhanced user interface. Features real-time compilation, syntax highlighting, and error handling for multiple programming languages.",
      technologies: ["Next.js", "Typescript", "Shadcn UI", "Tailwind CSS"],
      githubUrl: "https://github.com/Rishabh426/commit_lens",
      liveUrl: null,
      featured: true,
    },
    {
      title: "Proxy Server",
      description:
        "A complete backend reverse proxy server that efficiently handles and forwards user requests. Implements load balancing, request routing, and caching mechanisms for optimal performance.",
      technologies: ["Node.js", "Express.js", "HTTP Proxy", "Load Balancing", "Backend"],
      githubUrl: "https://github.com/Rishabh426/proxy-server",
      liveUrl: null,
      featured: true,
    },
    {
      title: "Digital Wallet",
      description:
        "A simple digital wallet application that allows users to perform dummy transactions. Features user authentication, transaction history, and balance management with a clean interface.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      githubUrl: null,
      liveUrl: null,
      featured: false,
    },
    {
      title: "Currency Converter",
      description:
        "A real-time currency converter application built with React and TypeScript. Features live exchange rates, multiple currency support, and historical data visualization.",
      technologies: ["React", "TypeScript", "API Integration", "CSS3"],
      githubUrl: "https://github.com/Rishabh426/CurrencyConverter",
      liveUrl: "https://currency-converter-two-ecru.vercel.app",
      featured: false,
    },
    {
      title: "Trading System",
      description:
        "A backend trading system that demonstrates how order books work in real-life trading scenarios. Implements order matching, price discovery, and trade execution algorithms.",
      technologies: ["Express.js", "Node.js", "Order Book", "Trading Algorithms", "Backend"],
      githubUrl: "https://github.com/Rishabh426/trading-system",
      liveUrl: null,
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-slate-800 dark:via-indigo-900 dark:to-blue-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-blue-100">Featured Projects</h2>
          <p className="text-lg text-gray-700 dark:text-blue-200 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card
              key={project.title}
              className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 text-gray-900 dark:text-blue-100">{project.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed text-gray-600 dark:text-blue-300">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 border-blue-200 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800/50"
                    >
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      asChild
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                    >
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-blue-100">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card
                key={project.title}
                className="hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 dark:text-blue-100">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-gray-600 dark:text-blue-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 border-blue-200 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800/50"
                      >
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                      >
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
