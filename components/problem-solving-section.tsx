import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Trophy, Target, Code, Zap } from "lucide-react"
import Link from "next/link"

export function ProblemSolvingSection() {
  const platforms = [
    {
      name: "LeetCode",
      username: "Rishabh__1234",
      problemsSolved: 530,
      rating: "1700+",
      badge: "Intermediate",
      color: "bg-blue-500",
      link: "https://leetcode.com/Rishabh__1234",
      icon: <Code className="h-6 w-6" />,
    },
    {
      name: "Codeforces",
      username: "1337",
      problemsSolved: 100,
      rating: "1330+",
      badge: "Pupil",
      color: "bg-indigo-500",
      link: "https://codeforces.com/profile/call_me_sharma",
      icon: <Trophy className="h-6 w-6" />,
    },
    {
      name: "CodeChef",
      username: "3 Star Coder",
      problemsSolved: 100,
      rating: "1630+",
      badge: "3 Star",
      color: "bg-cyan-500",
      link: "https://www.codechef.com/users/callmesharma",
      icon: <Target className="h-6 w-6" />,
    },
    {
      name: "GeeksforGeeks",
      username: "ronnie1q1lm",
      problemsSolved: 300,
      rating: "Active",
      badge: "Contributor",
      color: "bg-blue-600",
      link: "https://www.geeksforgeeks.org/user/ronnie1q1lm/",
      icon: <Zap className="h-6 w-6" />,
    },
  ]

  return (
    <section
      id="problem-solving"
      className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 dark:from-slate-800 dark:via-blue-900 dark:to-indigo-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-blue-100">
            Problem Solving Skills
          </h2>
          <p className="text-lg text-gray-700 dark:text-blue-200 max-w-2xl mx-auto">
            Competitive programming achievements across various platforms, showcasing algorithmic thinking and
            problem-solving expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <Card
              key={platform.name}
              className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${platform.color} text-white`}>{platform.icon}</div>
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200">
                    {platform.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-blue-100">{platform.name}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-blue-300">@{platform.username}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-blue-300">Problems Solved</span>
                  <span className="font-semibold text-lg text-gray-900 dark:text-blue-100">
                    {platform.problemsSolved}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-blue-300">Rating</span>
                  <span className="font-semibold text-lg text-gray-900 dark:text-blue-100">{platform.rating}</span>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 border-blue-200 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800/50"
                >
                  <Link href={platform.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
