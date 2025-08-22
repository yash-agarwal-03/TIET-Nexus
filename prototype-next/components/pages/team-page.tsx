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
    name: "Dr. Ashima Singh",
    role: "Project Mentor",
    type: "supervisor",
    image: "/place.svg?height=200&width=200",
    bio: "Professor of Computer Science with 15+ years of experience in software engineering and student mentorship. Passionate about innovative educational technologies.",
    email: "ashima@thapar.edu",
    linkedin: "https://linkedin.com/in/rajeshkumar",
  },
  {
    id: "2",
    name: "Dr. Jaskirat Singh",
    role: "Project Co-Mentor",
    type: "supervisor",
    image: "/place.svg?height=200&width=200",
    bio: "Associate Professor specializing in web technologies and database systems. Guides students in building scalable and efficient applications.",
    email: "jaskirat@thapar.edu",
    linkedin: "https://linkedin.com/in/priyasharma",
  },
  // Developers
  {
    id: "3",
    name: "Yash Agarwal",
    role: "Team Lead, Full Stack Developer & Map Designer ",
    type: "developer",
    image: "/placeholders.svg?height=200&width=200",
    bio: "Final year CSE student passionate about creating seamless user experiences. Leads the development team and specializes in React and Node.js.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "Backend Architecture"],
    email: "arjun.singh@student.thapar.edu",
    linkedin: "https://linkedin.com/in/arjunsingh",
    github: "https://github.com/arjunsingh",
    portfolio: "https://arjunsingh.dev",
  },
  {
    id: "4",
    name: "Geetansh Mohindru",
    role: "Frontend Developer & UI/UX Designer",
    type: "developer",
    image: "/placeholders.svg?height=200&width=200",
    bio: "Creative developer with an eye for design. Focuses on creating intuitive interfaces and ensuring excellent user experience across all platforms.",
    skills: ["React", "Next.js", "Tailwind CSS", "Figma", "Adobe XD"],
    email: "sneha.patel@student.thapar.edu",
    linkedin: "https://linkedin.com/in/snehapatel",
    github: "https://github.com/snehapatel",
    portfolio: "https://snehapatel.design",
  },
  {
    id: "5",
    name: "Jyotansh Mohindru",
    role: "Backend Developer & Map Designer",
    type: "developer",
    image: "/placeholdesr.svg?height=200&width=200",
    bio: "Backend enthusiast who loves building robust APIs and managing databases. Ensures the application runs smoothly and securely behind the scenes.",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    email: "rohit.kumar@student.thapar.edu",
    linkedin: "https://linkedin.com/in/rohitkumar",
    github: "https://github.com/rohitkumar",
  },
  {
    id: "6",
    name: "Arnav Sen",
    role: "Chatbot designer",
    type: "developer",
    image: "/placeholsder.svg?height=200&width=200",
    bio: "Chatbot Developer who builds practical conversational agents to process user requests and execute automated workflows.",
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
                    <AvatarImage src={member.image || "/place.svg"} />
                    <AvatarFallback className="text-2xl bg-red-100 text-[#B11317]">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#B11317] font-medium mb-4">{member.role}</p>

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
                      <AvatarImage src={member.image || "/place.svg"} />
                      <AvatarFallback className="bg-red-100 text-[#B11317]">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-[#B11317] font-medium text-sm mb-2">{member.role}</p>

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
        <div className="mt-16 flex justify-center">
          <Card className="bg-red-50 border-red-200 w-full max-w-4xl mx-auto flex items-center justify-center">
            <CardContent className="flex flex-row items-center justify-center w-full p-8 gap-4">
              {/* Logo on the left, 80% of about div height */}
              <div className="flex-shrink-0 flex items-center justify-center h-full" style={{height:'100%'}}>
                <div className="rounded-full overflow-hidden bg-white flex items-center justify-center ml-10" style={{ height: '80%', aspectRatio: '1/1', minHeight: '80px', minWidth: '80px', maxHeight: '180px', maxWidth: '180px' }}>
                  <img
                    src="/logos/tiet.png"
                    alt="TIET Logo"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              {/* Content shrunk horizontally, close to logo */}
              <div className="flex-1 flex flex-col items-start justify-center ml-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">About TIET Nexus</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  TIET Nexus is a comprehensive campus platform developed as a final year project by Computer Science
                  students at Thapar Institute of Engineering & Technology. The platform aims to connect students,
                  faculty, and staff while providing essential campus services and information in one unified digital
                  space.
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <Badge variant="outline" className="px-3 py-1">React.js</Badge>
                  <Badge variant="outline" className="px-3 py-1">Next.js</Badge>
                  <Badge variant="outline" className="px-3 py-1">Node.js</Badge>
                  <Badge variant="outline" className="px-3 py-1">MongoDB</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
