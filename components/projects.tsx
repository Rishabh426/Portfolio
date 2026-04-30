"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      name: "DeployX",
      description: "Distributed deployment platform for frontend apps.",
      tech: ["Node.js", "TypeScript", "Redis", "Cloudflare", "React"],
      github: "https://github.com/Rishabh426/DeployX",
    },
    {
      name: "BlogX – Write. Share. Scale",
      description: "Edge-powered blogging platform with low latency.",
      tech: ["Hono", "React", "Prisma", "PostgreSQL", "TypeScript"],
      github: "https://github.com/Rishabh426/BlogX",
    },
    {
      name: "ProxyX – High Performance Proxy Server",
      description: "Scalable proxy server with load balancing strategies.",
      tech: ["Node.js", "TypeScript", "YAML", "Zod"],
      github: "https://github.com/Rishabh426/proxy-server",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Projects
          </h2>
          <p className="text-muted-foreground">
            Selected projects showcasing my work
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="border border-border hover:border-muted-foreground/50 transition-all duration-200 hover:shadow-sm"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="hover:bg-secondary/5"
                  >
                    <a href={project.github}>GitHub</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="hover:bg-secondary/5"
                  ></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="hover:bg-secondary/5">
            <Link href="/projects">View All Projects →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
