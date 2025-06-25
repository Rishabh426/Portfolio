"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function HeroSection() {
  const [displayedName, setDisplayedName] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const { resolvedTheme } = useTheme()
  const fullName = "Rishabh Sharma"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setDisplayedName("")
    setIsTypingComplete(false)
    setShowProfile(false)

    const profileTimer = setTimeout(() => {
      setShowProfile(true)
    }, 500)

    const typingTimer = setTimeout(() => {
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullName.length) {
          setDisplayedName(fullName.slice(0, currentIndex))
          currentIndex++
        } else {
          setIsTypingComplete(true)
          clearInterval(typingInterval)
        }
      }, 150)
    }, 1000)

    return () => {
      clearTimeout(profileTimer)
      clearTimeout(typingTimer)
    }
  }, [])

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-8"></div>
            <div className="h-16 bg-gray-200 rounded mb-4"></div>
            <div className="h-8 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
          : "bg-gradient-to-br from-white via-blue-50 to-cyan-50"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl animate-pulse ${
            isDark ? "bg-blue-500 opacity-20" : "bg-blue-400 opacity-15"
          }`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000 ${
            isDark ? "bg-indigo-500 opacity-20" : "bg-indigo-400 opacity-15"
          }`}
        ></div>
        <div
          className={`absolute top-40 left-1/2 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000 ${
            isDark ? "bg-cyan-500 opacity-20" : "bg-cyan-400 opacity-15"
          }`}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Enhanced Profile Photo */}
        <div className={`transition-all duration-1000 ${showProfile ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="relative mx-auto w-36 h-36 md:w-44 md:h-44 mb-6 group">
            {/* Outer glow ring */}
            <div
              className={`absolute -inset-2 rounded-full transition-all duration-500 ${
                isDark
                  ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400"
                  : "bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500"
              } opacity-30 blur-md group-hover:opacity-50 group-hover:blur-lg`}
            ></div>

            {/* Main gradient border */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-500 p-1 ${
                isDark
                  ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400"
                  : "bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500"
              } group-hover:from-blue-300 group-hover:via-cyan-300 group-hover:to-indigo-300 dark:group-hover:from-blue-300 dark:group-hover:via-cyan-300 dark:group-hover:to-indigo-300`}
            >
              {/* Inner shadow ring */}
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800 shadow-inner">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/profile.jpg"
                    alt="Rishabh Sharma"
                    width={176}
                    height={176}
                    className={`w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-105 ${
                      isDark ? "filter brightness-110 contrast-110" : "filter brightness-105 contrast-105 saturate-110"
                    }`}
                    priority
                  />
                  {/* Photo overlay for better integration */}
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      isDark
                        ? "bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10"
                        : "bg-gradient-to-br from-blue-400/5 via-transparent to-indigo-400/5"
                    } group-hover:opacity-0`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Animated pulse ring */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-500 ${
                isDark
                  ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400"
                  : "bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500"
              } animate-ping opacity-20 group-hover:opacity-30`}
            ></div>

            {/* Rotating gradient ring */}
            <div
              className={`absolute -inset-1 rounded-full transition-all duration-1000 ${
                isDark
                  ? "bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400"
                  : "bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"
              } opacity-0 group-hover:opacity-20 animate-spin`}
              style={{ animationDuration: "3s" }}
            ></div>
          </div>
        </div>

        <div className="space-y-4">
          <h1
            className={`text-4xl md:text-6xl font-bold tracking-tight transition-colors duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, I&apos;m{" "}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500 ${
                isDark ? "from-blue-400 to-cyan-400" : "from-blue-600 to-indigo-600"
              }`}
            >
              {displayedName}
              {!isTypingComplete && showProfile && (
                <span className={`animate-pulse ${isDark ? "text-blue-400" : "text-blue-600"}`}>|</span>
              )}
            </span>
          </h1>
          <div className={`transition-opacity duration-1000 ${isTypingComplete ? "opacity-100" : "opacity-0"}`}>
            <p
              className={`text-xl md:text-2xl max-w-2xl mx-auto transition-colors duration-500 ${
                isDark ? "text-blue-100" : "text-gray-700"
              }`}
            >
              Full Stack Developer & Competitive Programmer
            </p>
            <p
              className={`text-lg max-w-3xl mx-auto mt-4 transition-colors duration-500 ${
                isDark ? "text-blue-200" : "text-gray-600"
              }`}
            >
              Passionate about building scalable web applications and solving complex algorithmic problems. I love
              turning ideas into reality through clean, efficient code.
            </p>
          </div>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${
            isTypingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            asChild
            size="lg"
            className={`text-white border-0 transition-all duration-500 shadow-lg hover:shadow-xl ${
              isDark
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-blue-500/25"
                : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 shadow-blue-500/25"
            }`}
          >
            <Link href="https://www.linkedin.com/in/rishabhsharma3579/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className={`backdrop-blur-sm transition-all duration-500 shadow-md hover:shadow-lg ${
              isDark
                ? "bg-white/10 text-blue-100 border-blue-300/30 hover:bg-white/20 hover:border-blue-300/50"
                : "bg-white/80 text-gray-700 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
            }`}
          >
            <Link href="https://x.com/Ronnie004681166" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2 h-5 w-5" />
              Twitter
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className={`backdrop-blur-sm transition-all duration-500 shadow-md hover:shadow-lg ${
              isDark
                ? "bg-white/10 text-blue-100 border-blue-300/30 hover:bg-white/20 hover:border-blue-300/50"
                : "bg-white/80 text-gray-700 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
            }`}
          >
            <Link href="https://github.com/Rishabh426" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className={`backdrop-blur-sm transition-all duration-500 shadow-md hover:shadow-lg ${
              isDark
                ? "bg-white/10 text-blue-100 border-blue-300/30 hover:bg-white/20 hover:border-blue-300/50"
                : "bg-white/80 text-gray-700 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
            }`}
          >
            <Link href="https://linktr.ee/Rishabh_Sharma_12" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Linktree
            </Link>
          </Button>
        </div>

        <div
          className={`pt-8 transition-all duration-1000 delay-1000 ${
            isTypingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            asChild
            size="lg"
            variant="secondary"
            className={`backdrop-blur-sm transition-all duration-500 shadow-md hover:shadow-lg ${
              isDark
                ? "bg-blue-500/20 text-blue-100 hover:bg-blue-500/30 border-blue-400/30 hover:border-blue-400/50"
                : "bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200 hover:border-blue-300"
            }`}
          >
            <Link href="#problem-solving">Explore My Work</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
