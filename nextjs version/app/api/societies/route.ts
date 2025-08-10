import { NextResponse } from "next/server"

// Sample data - In a real application, this would come from a database
const societies = [
  {
    id: "1",
    name: "Computer Science Society",
    shortDescription:
      "Fostering innovation in technology and programming through workshops, hackathons, and coding competitions.",
    fullDescription:
      "The Computer Science Society is dedicated to bringing together students passionate about technology, programming, and innovation. We organize regular workshops on cutting-edge technologies, host hackathons, participate in coding competitions, and provide a platform for students to collaborate on exciting projects. Whether you're a beginner or an expert, our society welcomes all skill levels and provides opportunities for growth and learning.",
    category: "Academic",
    memberCount: 245,
    establishedYear: 2015,
    meetingSchedule: "Every Friday 4:00 PM",
    location: "Computer Lab, Building A",
    contactEmail: "cs.society@college.edu",
    contactPhone: "+1 (555) 123-4567",
    website: "https://cs-society.college.edu",
    socialMedia: {
      instagram: "https://instagram.com/cs_society",
      twitter: "https://twitter.com/cs_society",
    },
    executiveMembers: [
      {
        name: "Alex Johnson",
        position: "President",
        email: "alex.johnson@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Sarah Chen",
        position: "Vice President",
        email: "sarah.chen@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Michael Rodriguez",
        position: "Technical Lead",
        email: "michael.rodriguez@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Emily Davis",
        position: "Event Coordinator",
        email: "emily.davis@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "David Kim",
        position: "Treasurer",
        email: "david.kim@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    activities: [
      "Weekly coding workshops and tutorials",
      "Annual hackathon with industry sponsors",
      "Guest lectures from tech industry professionals",
      "Open source project collaborations",
      "Programming competition training",
      "Career guidance and internship support",
    ],
    achievements: [
      "Won 1st place in Inter-College Hackathon 2023",
      "Successfully organized TechFest with 500+ participants",
      "Launched 3 open-source projects with community adoption",
      "Secured internships for 80% of final year members",
      "Published research paper on AI applications",
    ],
    upcomingEvents: [
      {
        name: "AI Workshop Series",
        date: "March 15, 2024",
        location: "Auditorium Hall",
      },
      {
        name: "Spring Hackathon 2024",
        date: "April 20-21, 2024",
        location: "Innovation Center",
      },
      {
        name: "Industry Networking Night",
        date: "May 10, 2024",
        location: "Student Center",
      },
    ],
  },
  {
    id: "2",
    name: "Drama & Theatre Club",
    shortDescription:
      "Bringing stories to life through passionate performances, creative workshops, and theatrical productions.",
    fullDescription:
      "The Drama & Theatre Club is a vibrant community of storytellers, actors, directors, and theatre enthusiasts. We believe in the power of performance to inspire, educate, and entertain. Our club produces multiple shows throughout the year, ranging from classical plays to contemporary works and original student productions. We also offer acting workshops, script writing sessions, and technical theatre training.",
    category: "Arts",
    memberCount: 89,
    establishedYear: 2010,
    meetingSchedule: "Tuesday & Thursday 6:00 PM",
    location: "Theatre Hall, Arts Building",
    contactEmail: "drama.club@college.edu",
    contactPhone: "+1 (555) 234-5678",
    socialMedia: {
      instagram: "https://instagram.com/drama_club",
      twitter: "https://twitter.com/drama_club",
    },
    executiveMembers: [
      {
        name: "Isabella Martinez",
        position: "Director",
        email: "isabella.martinez@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "James Wilson",
        position: "Assistant Director",
        email: "james.wilson@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Sophie Turner",
        position: "Stage Manager",
        email: "sophie.turner@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Ryan O'Connor",
        position: "Technical Director",
        email: "ryan.oconnor@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    activities: [
      "Bi-annual major theatrical productions",
      "Monthly one-act play performances",
      "Acting and improvisation workshops",
      "Script writing and playwriting sessions",
      "Technical theatre training (lighting, sound, set design)",
      "Community outreach performances",
    ],
    achievements: [
      "Best College Production Award 2023",
      "Raised $5000 for local charity through benefit show",
      "Featured in Regional Theatre Festival",
      "Original student play selected for state competition",
      "Collaboration with professional theatre company",
    ],
    upcomingEvents: [
      {
        name: 'Spring Musical: "Into the Woods"',
        date: "March 25-28, 2024",
        location: "Main Theatre",
      },
      {
        name: "Improv Comedy Night",
        date: "April 5, 2024",
        location: "Black Box Theatre",
      },
      {
        name: "Student Playwright Showcase",
        date: "May 15, 2024",
        location: "Studio Theatre",
      },
    ],
  },
  {
    id: "3",
    name: "Environmental Action Society",
    shortDescription:
      "Promoting sustainability and environmental awareness through campus initiatives and community outreach.",
    fullDescription:
      "The Environmental Action Society is committed to creating a more sustainable future through education, advocacy, and direct action. We work on campus sustainability projects, organize environmental awareness campaigns, and participate in community conservation efforts. Our members are passionate about addressing climate change, promoting renewable energy, and protecting natural ecosystems.",
    category: "Social Impact",
    memberCount: 156,
    establishedYear: 2012,
    meetingSchedule: "Every Wednesday 5:30 PM",
    location: "Environmental Science Building",
    contactEmail: "environmental@college.edu",
    contactPhone: "+1 (555) 345-6789",
    website: "https://environmental.college.edu",
    socialMedia: {
      instagram: "https://instagram.com/env_action",
      twitter: "https://twitter.com/env_action",
    },
    executiveMembers: [
      {
        name: "Maya Patel",
        position: "President",
        email: "maya.patel@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Lucas Thompson",
        position: "Vice President",
        email: "lucas.thompson@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Zoe Anderson",
        position: "Campaign Coordinator",
        email: "zoe.anderson@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Carlos Mendez",
        position: "Outreach Director",
        email: "carlos.mendez@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    activities: [
      "Campus sustainability audits and improvements",
      "Weekly beach and park cleanup drives",
      "Environmental education workshops",
      "Renewable energy advocacy campaigns",
      "Community garden maintenance",
      "Climate change awareness events",
    ],
    achievements: [
      "Reduced campus plastic waste by 40%",
      "Installed 50 solar panels on campus buildings",
      "Planted 1000+ trees in local community",
      "Won State Environmental Leadership Award",
      "Established campus-wide recycling program",
    ],
    upcomingEvents: [
      {
        name: "Earth Day Festival",
        date: "April 22, 2024",
        location: "Campus Quad",
      },
      {
        name: "Renewable Energy Symposium",
        date: "May 3, 2024",
        location: "Science Auditorium",
      },
      {
        name: "Community Tree Planting",
        date: "May 18, 2024",
        location: "Riverside Park",
      },
    ],
  },
  {
    id: "4",
    name: "Photography Club",
    shortDescription:
      "Capturing moments and developing artistic vision through photography workshops, exhibitions, and photo walks.",
    fullDescription:
      "The Photography Club is a creative community for students passionate about visual storytelling through photography. We welcome photographers of all skill levels, from smartphone enthusiasts to advanced DSLR users. Our club organizes regular photo walks, technical workshops, critique sessions, and annual exhibitions. We explore various genres including portrait, landscape, street, and documentary photography.",
    category: "Arts",
    memberCount: 78,
    establishedYear: 2018,
    meetingSchedule: "Every Saturday 2:00 PM",
    location: "Art Studio, Creative Arts Building",
    contactEmail: "photo.club@college.edu",
    contactPhone: "+1 (555) 456-7890",
    socialMedia: {
      instagram: "https://instagram.com/photo_club",
      twitter: "https://twitter.com/photo_club",
    },
    executiveMembers: [
      {
        name: "Aiden Foster",
        position: "President",
        email: "aiden.foster@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Lily Zhang",
        position: "Workshop Coordinator",
        email: "lily.zhang@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Marcus Johnson",
        position: "Exhibition Manager",
        email: "marcus.johnson@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    activities: [
      "Weekly photo walks around campus and city",
      "Technical workshops on camera settings and editing",
      "Monthly themed photography challenges",
      "Guest lectures from professional photographers",
      "Annual photography exhibition",
      "Photo critique and feedback sessions",
    ],
    achievements: [
      "Annual exhibition featured in local gallery",
      "Student work published in college magazine",
      "Won inter-college photography competition",
      "Documented major campus events and milestones",
      "Raised funds through photo sales for club equipment",
    ],
    upcomingEvents: [
      {
        name: "Portrait Photography Workshop",
        date: "March 20, 2024",
        location: "Photography Studio",
      },
      {
        name: "Spring Photo Exhibition",
        date: "April 15-30, 2024",
        location: "Student Gallery",
      },
      {
        name: "Nature Photography Trip",
        date: "May 25, 2024",
        location: "National Park",
      },
    ],
  },
  {
    id: "5",
    name: "Debate Society",
    shortDescription:
      "Developing critical thinking and public speaking skills through competitive debates and discussion forums.",
    fullDescription:
      "The Debate Society is dedicated to fostering critical thinking, research skills, and eloquent public speaking among students. We participate in intercollegiate debate competitions, host weekly practice sessions, and organize public forums on current issues. Our members learn various debate formats including parliamentary, policy, and public forum debates while building confidence in articulating their thoughts.",
    category: "Academic",
    memberCount: 67,
    establishedYear: 2008,
    meetingSchedule: "Monday & Friday 7:00 PM",
    location: "Debate Hall, Liberal Arts Building",
    contactEmail: "debate@college.edu",
    contactPhone: "+1 (555) 567-8901",
    socialMedia: {
      instagram: "https://instagram.com/debate_society",
    },
    executiveMembers: [
      {
        name: "Victoria Chang",
        position: "President",
        email: "victoria.chang@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Benjamin Clark",
        position: "Vice President",
        email: "benjamin.clark@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Priya Sharma",
        position: "Tournament Director",
        email: "priya.sharma@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    activities: [
      "Weekly debate practice sessions",
      "Participation in regional and national tournaments",
      "Public speaking workshops and training",
      "Current affairs discussion forums",
      "Mock trial competitions",
      "Mentorship program for new debaters",
    ],
    achievements: [
      "Regional Champions 2023",
      "Qualified for National Debate Tournament",
      "Best Speaker awards at multiple competitions",
      "Hosted successful inter-college debate tournament",
      "Alumni working in law, politics, and journalism",
    ],
    upcomingEvents: [
      {
        name: "Spring Debate Tournament",
        date: "April 8-9, 2024",
        location: "Campus Conference Center",
      },
      {
        name: "Public Forum: Climate Policy",
        date: "April 25, 2024",
        location: "Main Auditorium",
      },
      {
        name: "Mock Trial Competition",
        date: "May 12, 2024",
        location: "Law School Courtroom",
      },
    ],
  },
  {
    id: "6",
    name: "Music Society",
    shortDescription:
      "Creating harmony through diverse musical performances, jam sessions, and collaborative compositions.",
    fullDescription:
      "The Music Society brings together musicians of all genres and skill levels to create, perform, and appreciate music. From classical to contemporary, rock to jazz, our society embraces all musical styles. We organize regular concerts, open mic nights, jam sessions, and music workshops. Whether you play an instrument, sing, compose, or simply love music, you'll find your place in our musical family.",
    category: "Arts",
    memberCount: 134,
    establishedYear: 2005,
    meetingSchedule: "Thursday 6:30 PM",
    location: "Music Room, Performing Arts Center",
    contactEmail: "music@college.edu",
    contactPhone: "+1 (555) 678-9012",
    website: "https://music.college.edu",
    socialMedia: {
      instagram: "https://instagram.com/music_society",
      twitter: "https://twitter.com/music_society",
    },
    executiveMembers: [
      {
        name: "Elena Rodriguez",
        position: "President",
        email: "elena.rodriguez@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Jake Morrison",
        position: "Performance Director",
        email: "jake.morrison@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Aria Kim",
        position: "Workshop Coordinator",
        email: "aria.kim@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Thomas Brown",
        position: "Technical Manager",
        email: "thomas.brown@college.edu",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    activities: [
      "Monthly concerts and recitals",
      "Weekly jam sessions and open mic nights",
      "Music theory and composition workshops",
      "Collaborative recording projects",
      "Guest artist masterclasses",
      "Community performance opportunities",
    ],
    achievements: [
      'Released debut album "Campus Harmonies"',
      "Performed at city music festival",
      "Won inter-college battle of the bands",
      "Raised $3000 for music education programs",
      "Featured on local radio stations",
    ],
    upcomingEvents: [
      {
        name: "Spring Concert Series",
        date: "March 30, 2024",
        location: "Concert Hall",
      },
      {
        name: "Jazz Night",
        date: "April 18, 2024",
        location: "Student Lounge",
      },
      {
        name: "Battle of the Bands",
        date: "May 20, 2024",
        location: "Outdoor Amphitheater",
      },
    ],
  },
]

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(societies)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch societies" }, { status: 500 })
  }
}
