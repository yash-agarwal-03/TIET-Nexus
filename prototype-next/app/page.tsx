"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Users, Calendar, MapPin, Mail, Phone, Globe, Instagram, Twitter } from "lucide-react"
import { MainLayout } from "@/components/layout/main-layout"
import { WelcomePage } from "@/components/pages/welcome-page"
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

export default function HomePage() {
  return (
    <MainLayout>
      <WelcomePage />
    </MainLayout>
  )
}
