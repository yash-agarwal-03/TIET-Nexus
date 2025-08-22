"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2, Calendar, Pin } from "lucide-react"

interface FeedPost {
  id: string
  author: string
  authorRole: string
  avatar: string
  content: string
  timestamp: Date
  category: string
  isPinned?: boolean
  likes: number
  comments: number
  isLiked?: boolean
}

export function FeedsPage() {
  const [posts, setPosts] = useState<FeedPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 1000)
  }, [])

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B11317] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading feeds...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TIET Campus Feeds</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest news, announcements, and happenings around campus
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="relative">
              {post.isPinned && (
                <div className="absolute top-4 right-4">
                  <Pin className="w-4 h-4 text-[#B11317]" />
                </div>
              )}

              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={post.avatar || "/place.svg"} />
                    <AvatarFallback className="bg-red-100 text-[#B11317]">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{post.author}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {post.authorRole}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.timestamp.toLocaleDateString()}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="mb-4">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6 pt-3 border-t">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className={`gap-2 ${post.isLiked ? "text-red-600" : "text-gray-500"}`}
                  >
                    <Heart className={`w-4 h-4 ${post.isLiked ? "fill-current" : ""}`} />
                    <span>{post.likes}</span>
                  </Button>

                  <Button variant="ghost" size="sm" className="gap-2 text-gray-500">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </Button>

                  <Button variant="ghost" size="sm" className="gap-2 text-gray-500">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const mockPosts: FeedPost[] = [
  {
    id: "1",
    author: "TIET Admin",
    authorRole: "Official",
    avatar: "/place.svg?height=48&width=48",
    content:
      "🎉 Exciting News! TIET has been ranked among the top 50 engineering colleges in India by NIRF 2024. This achievement reflects our commitment to academic excellence and innovation.\n\nWe thank our dedicated faculty, brilliant students, and supportive alumni for making this possible. Here's to reaching even greater heights! 🚀",
    timestamp: new Date(2024, 2, 15),
    category: "Announcement",
    isPinned: true,
    likes: 245,
    comments: 32,
    isLiked: false,
  },
  {
    id: "2",
    author: "Dr. Sarah Johnson",
    authorRole: "Dean of Students",
    avatar: "/place.svg?height=48&width=48",
    content:
      "Registration for the Annual Tech Fest 'Technovation 2024' is now open! 🔥\n\nEvent Highlights:\n• Coding competitions\n• Robotics challenges\n• Innovation showcase\n• Industry expert talks\n\nDates: March 25-27, 2024\nRegistration deadline: March 20, 2024\n\nDon't miss this opportunity to showcase your skills and learn from the best!",
    timestamp: new Date(2024, 2, 12),
    category: "Events",
    likes: 189,
    comments: 45,
    isLiked: true,
  },
  {
    id: "3",
    author: "Campus Placement Cell",
    authorRole: "Official",
    avatar: "/place.svg?height=48&width=48",
    content:
      "🎯 Placement Update: Microsoft is visiting our campus next week!\n\nPositions available:\n• Software Development Engineer\n• Data Scientist\n• Product Manager\n\nEligible branches: CSE, ECE, IT\nCGPA requirement: 7.5+\n\nPre-placement talk: March 18, 2024 at 4:00 PM in Auditorium Hall\n\nBest of luck to all applicants! 💪",
    timestamp: new Date(2024, 2, 10),
    category: "Placements",
    likes: 156,
    comments: 28,
    isLiked: false,
  },
  {
    id: "4",
    author: "Student Council",
    authorRole: "Student Body",
    avatar: "/place.svg?height=48&width=48",
    content:
      "📚 Library Extended Hours During Exam Season\n\nTo support students during the upcoming mid-semester examinations, the Central Library will extend its operating hours:\n\n• Weekdays: 6:00 AM - 12:00 AM\n• Weekends: 7:00 AM - 11:00 PM\n\nAdditional study spaces have been arranged in the Student Center. Group study rooms can be booked online.\n\nWishing everyone the best for their exams! 📖✨",
    timestamp: new Date(2024, 2, 8),
    category: "Academic",
    likes: 98,
    comments: 15,
    isLiked: false,
  },
  {
    id: "5",
    author: "Sports Committee",
    authorRole: "Committee",
    avatar: "/place.svg?height=48&width=48",
    content:
      "🏆 Inter-College Basketball Tournament Results\n\nProud to announce that TIET Basketball team has won the Regional Championship! 🏀\n\nFinal Score: TIET 78 - 65 Rival College\n\nSpecial congratulations to:\n• Arjun Singh (Team Captain) - 24 points\n• Priya Sharma - 18 points\n• Rohit Kumar - 15 points\n\nNext up: State-level championship in April. Let's cheer for our team! 🎉",
    timestamp: new Date(2024, 2, 5),
    category: "Sports",
    likes: 134,
    comments: 22,
    isLiked: true,
  },
  {
    id: "6",
    author: "Hostel Committee",
    authorRole: "Committee",
    avatar: "/place.svg?height=48&width=48",
    content:
      "🏠 Hostel Maintenance Schedule - March 2024\n\nPlanned maintenance activities:\n\n• Wi-Fi upgrades in all blocks (March 16-17)\n• Water tank cleaning (March 20)\n• Electrical safety checks (March 22-23)\n\nThere might be temporary service interruptions during these times. We apologize for any inconvenience and appreciate your cooperation.\n\nFor any urgent issues, contact the hostel office: +91-175-2393023",
    timestamp: new Date(2024, 2, 3),
    category: "Hostel",
    likes: 67,
    comments: 8,
    isLiked: false,
  },
]
