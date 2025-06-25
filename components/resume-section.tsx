import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, Mail, Phone, MapPin, Calendar, GraduationCap } from "lucide-react"
import Link from "next/link"

export function ResumeSection() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Graphic Era Hill University",
      period: "2022 - 2026",
      gpa: "9.02/10.0",
      achievements: ["Programming Contest Winner"],
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management",
        "Discrete Mathematics",
        "Software Engineering",
        "Full Stack Development",
        "Computer Networks",
      ],
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Central Board of Secondary Education",
      period: "2021-2022",
      gpa: "90%",
      achievements: ["Mathematics Olympiad Qualifier"],
      coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    },
  ]
  return (
    <section
      id="resume"
      className="py-20 px-4 bg-gradient-to-br from-white via-indigo-50 to-blue-50 dark:from-slate-900 dark:via-blue-800 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-blue-100">Resume & Education</h2>
          <p className="text-lg text-gray-700 dark:text-blue-200 max-w-2xl mx-auto">
            My educational background, certifications, and downloadable resume for detailed information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-blue-100">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-gray-700 dark:text-blue-200">sharmarishabh9900@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-gray-700 dark:text-blue-200">+91 9675741442</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-gray-700 dark:text-blue-200">Haldwani, Uttarakhand</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-blue-100">Download Resume</CardTitle>
                <CardDescription className="text-gray-600 dark:text-blue-300">
                  Get the latest version of my resume in PDF format
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                >
                  <Link href="https://drive.google.com/file/d/1EoUOl6tPJp2Wqs0pHttXIQ3pgFLlb8OI/view" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 border-blue-200 dark:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-800/50"
                >
                  <Link href="https://drive.google.com/file/d/1EoUOl6tPJp2Wqs0pHttXIQ3pgFLlb8OI/view" target="_blank" rel="noopener noreferrer">
                    <Eye className="mr-2 h-4 w-4" />
                    View Online
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-100">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700"
                  >
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-lg text-gray-900 dark:text-blue-100">{edu.degree}</CardTitle>
                          <CardDescription className="text-base font-medium text-blue-600 dark:text-blue-400">
                            {edu.institution}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-blue-300">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600 dark:text-blue-300">Grade:</span>
                        <Badge
                          variant="secondary"
                          className="font-semibold bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200"
                        >
                          {edu.gpa}
                        </Badge>
                      </div>

                      <div>
                        <span className="text-sm text-gray-600 dark:text-blue-300 mb-2 block">Key Achievements:</span>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement) => (
                            <Badge
                              key={achievement}
                              variant="outline"
                              className="text-xs border-blue-200 dark:border-blue-600 text-blue-700 dark:text-blue-300"
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-sm text-gray-600 dark:text-blue-300 mb-2 block">
                          Relevant Coursework:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course) => (
                            <Badge
                              key={course}
                              variant="secondary"
                              className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-blue-100">Skills Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-blue-100">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "Python", "Java", "C++", "Go"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-blue-100">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "Express"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-blue-100">Databases & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "MongoDB", "Docker", "Git"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
