import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Server, Cloud, Wrench, Globe } from "lucide-react"

export function TechStackSection() {
  const techCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-blue-500",
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Recoil",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      color: "bg-indigo-500",
      technologies: [
        "Node.js",
        "Express.js",
        "Next.js",
      ],
    },
    {
      title: "Database & Storage",
      icon: <Database className="h-6 w-6" />,
      color: "bg-cyan-500",
      technologies: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Supabase",
        "Prisma",
        "Mongoose",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      color: "bg-blue-600",
      technologies: [
        "Vercel",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-6 w-6" />,
      color: "bg-indigo-600",
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Linux",
        "Bash",
        "REST APIs",
        "WebSockets",
      ],
    },
  ]

  return (
    <section
      id="tech-stack"
      className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-800 dark:to-indigo-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-blue-100">Tech Stack & Skills</h2>
          <p className="text-lg text-gray-700 dark:text-blue-200 max-w-2xl mx-auto">
            A comprehensive overview of technologies, frameworks, and tools I work with to build modern applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category) => (
            <Card
              key={category.title}
              className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color} text-white`}>{category.icon}</div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-blue-100">{category.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
