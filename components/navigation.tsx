"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Navigation() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl">
              <span className="text-blue-600">John</span> <span className="text-gray-900">Doe</span>
            </div>
            <div className="h-9 w-9 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </nav>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 ${
        isDark ? "bg-slate-900/80 border-blue-500/20" : "bg-white/80 border-blue-200"
      } border-b`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl">
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500 ${
                isDark ? "from-blue-400 to-cyan-400" : "from-blue-600 to-indigo-600"
              }`}
            >
              Rishabh
            </span>{" "}
            <span className={`transition-colors duration-500 ${isDark ? "text-blue-100" : "text-gray-900"}`}>Sharma</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#problem-solving"
                className={`text-sm transition-colors duration-300 ${
                  isDark ? "text-blue-200 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Skills
              </a>
              <a
                href="#tech-stack"
                className={`text-sm transition-colors duration-300 ${
                  isDark ? "text-blue-200 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Tech Stack
              </a>
              <a
                href="#projects"
                className={`text-sm transition-colors duration-300 ${
                  isDark ? "text-blue-200 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Projects
              </a>
              <a
                href="#resume"
                className={`text-sm transition-colors duration-300 ${
                  isDark ? "text-blue-200 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Resume
              </a>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={`h-9 w-9 p-0 transition-colors duration-300 ${
                isDark ? "text-blue-100 hover:bg-blue-500/20" : "text-gray-700 hover:bg-blue-100"
              }`}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
