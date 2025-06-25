import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rishabh Sharma - Full Stack Developer & Competitive Programmer",
  description:
    "Portfolio website showcasing my skills in web development, competitive programming, and software engineering.",
  keywords: "Full Stack Developer, React, Next.js, TypeScript, Competitive Programming, LeetCode, Codeforces",
  authors: [{ name: "Rishabh Sharma" }],
  openGraph: {
    title: "Rishabh Sharma - Full Stack Developer and Competitive Programmer",
    description: "Portfolio website showcasing my skills in web development and competitive programming.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
