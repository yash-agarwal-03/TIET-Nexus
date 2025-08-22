"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Users, Calendar, MapPin, Mail, Phone, Globe, Instagram, Twitter } from "lucide-react"

interface ExecutiveMember {
  name: string
  position: string
  email: string
  avatar?: string
}

interface Society {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  category: string
  memberCount: number
  establishedYear: number
  meetingSchedule: string
  location: string
  contactEmail: string
  contactPhone: string
  website?: string
  socialMedia: {
    instagram?: string
    twitter?: string
  }
  executiveMembers: ExecutiveMember[]
  activities: string[]
  achievements: string[]
  upcomingEvents: Array<{
    name: string
    date: string
    location: string
  }>
}

export function ExplorePage() {
  const [societies, setSocieties] = useState<Society[]>([])
  const [selectedSociety, setSelectedSociety] = useState<Society | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSocieties()
  }, [])

  const fetchSocieties = async () => {
    try {
      const response = await fetch("/api/societies")
      const data = await response.json()
      setSocieties(data)
    } catch (error) {
      console.error("Error fetching societies:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleCardClick = (society: Society) => {
    setSelectedSociety(society)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedSociety(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading societies...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore TIET Societies & Clubs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing communities, develop new skills, and make lifelong connections. Join a society that matches
            your interests and passions.
          </p>
        </div>

        {/* Societies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {societies.map((society) => (
            <Card
              key={society.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-md"
              onClick={() => handleCardClick(society)}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">{society.name}</CardTitle>
                  <Badge variant="secondary" className="ml-2 shrink-0">
                    {society.category}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{society.shortDescription}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <span>{society.memberCount} members</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Est. {society.establishedYear}</span>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Executive Team:</p>
                    <div className="flex -space-x-2">
                      {society.executiveMembers.slice(0, 4).map((member, index) => (
                        <Avatar key={index} className="w-8 h-8 border-2 border-white">
                          <AvatarImage src={member.avatar || "/place.svg"} />
                          <AvatarFallback className="text-xs bg-blue-100 text-blue-700">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {society.executiveMembers.length > 4 && (
                        <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                          <span className="text-xs text-gray-600">+{society.executiveMembers.length - 4}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Modal */}
        <Dialog open={isModalOpen} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedSociety && (
              <>
                <DialogHeader className="pb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedSociety.name}
                      </DialogTitle>
                      <Badge variant="secondary" className="mb-4">
                        {selectedSociety.category}
                      </Badge>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  {/* About Section */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">About Us</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedSociety.fullDescription}</p>
                  </div>

                  <Separator />

                  {/* Quick Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span>
                          <strong>{selectedSociety.memberCount}</strong> active members
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span>
                          Established in <strong>{selectedSociety.establishedYear}</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <span>{selectedSociety.location}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span>{selectedSociety.contactEmail}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <span>{selectedSociety.contactPhone}</span>
                      </div>
                      {selectedSociety.website && (
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-blue-600" />
                          <a href={selectedSociety.website} className="text-blue-600 hover:underline">
                            Visit Website
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Executive Members */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Executive Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedSociety.executiveMembers.map((member, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={member.avatar || "/place.svg"} />
                            <AvatarFallback className="bg-blue-100 text-blue-700">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">{member.name}</p>
                            <p className="text-sm text-gray-600">{member.position}</p>
                            <p className="text-xs text-gray-500">{member.email}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Activities & Achievements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Our Activities</h3>
                      <ul className="space-y-2">
                        {selectedSociety.activities.map((activity, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                            <span className="text-gray-600">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Recent Achievements</h3>
                      <ul className="space-y-2">
                        {selectedSociety.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Separator />

                  {/* Upcoming Events */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
                    <div className="space-y-3">
                      {selectedSociety.upcomingEvents.map((event, index) => (
                        <div key={index} className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-gray-900">{event.name}</h4>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {event.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Media & Actions */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                    <div className="flex gap-3">
                      {selectedSociety.socialMedia.instagram && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={selectedSociety.socialMedia.instagram}>
                            <Instagram className="w-4 h-4 mr-2" />
                            Instagram
                          </a>
                        </Button>
                      )}
                      {selectedSociety.socialMedia.twitter && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={selectedSociety.socialMedia.twitter}>
                            <Twitter className="w-4 h-4 mr-2" />
                            Twitter
                          </a>
                        </Button>
                      )}
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">Join Society</Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
