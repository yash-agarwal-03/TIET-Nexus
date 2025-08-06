"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  role: string
  type: "developer" | "supervisor"
  image: string
  bio: string
  skills?: string[]
  email: string
  linkedin?: string
  github?: string
  portfolio?: string
}

const teamMembers: TeamMember[] = [
  // Supervisors
  {
    id: "1",
    name: "Dr. Rajesh Kumar",
    role: "Project Supervisor",
    type: "supervisor",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Professor of Computer Science with 15+ years of experience in software engineering and student mentorship. Passionate about innovative educational technologies.",
    email: "rajesh.kumar@thapar.edu",
    linkedin: "https://linkedin.com/in/rajeshkumar",
  },
  {
    id: "2",
    name: "Dr. Priya Sharma",
    role: "Technical Advisor",
    type: "supervisor",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Associate Professor specializing in web technologies and database systems. Guides students in building scalable and efficient applications.",
    email: "priya.sharma@thapar.edu",
    linkedin: "https://linkedin.com/in/priyasharma",
  },
  // Developers
  {
    id: "3",
    name: "Arjun Singh",
    role: "Full Stack Developer & Team Lead",
    type: "developer",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Final year CSE student passionate about creating seamless user experiences. Leads the development team and specializes in React and Node.js.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    email: "arjun.singh@student.thapar.edu",
    linkedin: "https://linkedin.com/in/arjunsingh",
    github: "https://github.com/arjunsingh",
    portfolio: "https://arjunsingh.dev",
  },
  {
    id: "4",
    name: "Sneha Patel",
    role: "Frontend Developer & UI/UX Designer",
    type: "developer",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Creative developer with an eye for design. Focuses on creating intuitive interfaces and ensuring excellent user experience across all platforms.",
    skills: ["React", "Next.js", "Tailwind CSS", "Figma", "Adobe XD"],
    email: "sneha.patel@student.thapar.edu",
    linkedin: "https://linkedin.com/in/snehapatel",
    github: "https://github.com/snehapatel",
    portfolio: "https://snehapatel.design",
  },
  {
    id: "5",
    name: "Rohit Kumar",
    role: "Backend Developer",
    type: "developer",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Backend enthusiast who loves building robust APIs and managing databases. Ensures the application runs smoothly and securely behind the scenes.",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    email: "rohit.kumar@student.thapar.edu",
    linkedin: "https://linkedin.com/in/rohitkumar",
    github: "https://github.com/rohitkumar",
  },
  {
    id: "6",
    name: "Ananya Gupta",
    role: "Mobile Developer & QA Engineer",
    type: "developer",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Mobile development specialist ensuring the platform works seamlessly across all devices. Also handles quality assurance and testing.",
    skills: ["React Native", "Flutter", "Jest", "Cypress", "Firebase"],
    email: "ananya.gupta@student.thapar.edu",
    linkedin: "https://linkedin.com/in/ananyagupta",
    github: "https://github.com/ananyagupta",
  },
]

export function TeamPage() {
  const supervisors = teamMembers.filter((member) => member.type === "supervisor")
  const developers = teamMembers.filter((member) => member.type === "developer")

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The dedicated individuals behind TIET Nexus - bringing together expertise, creativity, and passion to build
            the ultimate campus platform
          </p>
        </div>

        {/* Supervisors Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Project Supervisors</h2>
            <p className="text-gray-600">Guiding and mentoring the development process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supervisors.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={member.image || "/placeholder.svg"} />
                    <AvatarFallback className="text-2xl bg-blue-100 text-blue-700">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>

                  <div className="flex justify-center gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </a>
                    </Button>
                    {member.linkedin && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Developers Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Development Team</h2>
            <p className="text-gray-600">The talented students building TIET Nexus</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {developers.map((member) => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={member.image || "/placeholder.svg"} />
                      <AvatarFallback className="bg-blue-100 text-blue-700">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>

                      {member.skills && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {member.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="w-4 h-4 mr-1" />
                        Email
                      </a>
                    </Button>
                    {member.linkedin && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4 mr-1" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                    {member.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {member.portfolio && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Portfolio
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-16 text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About TIET Nexus</h3>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                TIET Nexus is a comprehensive campus platform developed as a final year project by Computer Science
                students at Thapar Institute of Engineering & Technology. The platform aims to connect students,
                faculty, and staff while providing essential campus services and information in one unified digital
                space.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <Badge variant="outline" className="px-3 py-1">
                  React.js
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Next.js
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Node.js
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  TypeScript
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
