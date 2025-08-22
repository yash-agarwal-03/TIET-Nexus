import { NextResponse } from "next/server"

// Sample data - In a real application, this would come from a database
const societies = [
  {
    logo: "/society-logos/1.png",
    id: "1",
    name: "Creative Computing Society ( CCS )",
    shortDescription:
      "Creative Computing Society is an elite technical society with the vision to help students achieve hands on experience in technical experience",
    fullDescription:
      "Creative Computing Society strive to encourage students to develop an analytical temperament in the field of technology and innovation. The society conducts workshops and coding competitions on a regular basis, thus acting as a platform for students to showcase and nurture their technical skill to discover their best lying potential. Over the years the society has had numerous pivotal collaborations with organizations like Google Developers Group, Women Techmaker, Mozilla Webmaker, PyData to name a few.",
    category: "Technical",
    memberCount: 245,
    establishedYear: 2004,
    meetingSchedule: "Every Friday 4:00 PM",
    location: "Computer Lab, Building A",
    contactEmail: "ccs@thapar.edu",
    contactPhone: "+1 (555) 123-4567",
    website: "www.ccstiet.com",
    socialMedia: {
      instagram: "https://www.instagram.com/ccs_tiet/",
      github: "https://twitter.com/cs_society",
    },
    executiveMembers: [
      {
        name: "Dr. Anju Bala",
        position: "President",
        email: "anjubala@thapar.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Dr. Gurpal Singh",
        position: "Vice President",
        email: "gurpal.singh@thapar.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Sarthak Tyagi",
        position: "General Secretary",
        email: "sarthak@tietexample.com",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Kanav Dhanda",
        position: "Finance Secretary",
        email: "kanav@tietexample.com",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Aayush Goyal",
        position: "Joint Secretary",
        email: "aayush@tietexample.com",
        avatar: "/place.svg?height=40&width=40",
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
    logo: "/society-logos/2.png",
    id: "2",
    name: "Microsoft Student Chapter (MLSC)",
    shortDescription:
      "The aim of MLSC is to provide guidance, technical trainings, project guidance that improve students knowledge and learning skills.",
    fullDescription:
      "We at Microsoft Learn Student Chapter believe that youth encompassed with appropriate technology holds the potential to revolutionize the world we perceive today and we have done a fair share in that through multiple events organised over the years. Microsoft Learn Student Chapter was institutionalized by the virtue of providing students a systemic platform for cultivating technical skills and a spirit of teamwork. Our vision is to create a community of computer enthusiasts with a mindset of development.",
    category: "Technical",
    memberCount: 89,
    establishedYear: 2010,
    meetingSchedule: "Tuesday & Thursday 6:00 PM",
    location: "Theatre Hall, Arts Building",
    contactEmail: "msc@thapar.edu",
    contactPhone: "+1 (555) 234-5678",
    website: "https://mlsctiet.com/",
    socialMedia: {
      instagram: "https://instagram.com/drama_club",
      twitter: "https://twitter.com/drama_club",
    },
    executiveMembers: [
      {
        name: "Dr. Prashant Singh Rana",
        position: "president",
        email: "prashant.singh@thapar.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Prisha Khandari",
        position: "Secretary",
        email: "prisha@college.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Mankirat Singh",
        position: "Head",
        email: "mankirat@college.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Krishnam Agarwal",
        position: "Secretary",
        email: "krishnam@college.edu",
        avatar: "/place.svg?height=40&width=40",
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
    logo: "/society-logos/3.png",
    id: "3",
    name: "Thapar Venture Club (Formerly EDC)",
    shortDescription:
      "EDC is an initiative under Thapar University to promote and stimulate innovative ideas in technical field to incubate Entrepreneurs of tomorrow. If you have an idea, they should be the ones you should approach",
    fullDescription:
      "Thapar Venture Club (TVC)—formerly known as the Entrepreneurship Development Cell (EDC, TIET)—is the driving force behind entrepreneurial innovation at Thapar University.Through high-impact events, venture-building initiatives, and a dynamic support network, TVC has been instrumental in igniting the spirit of entrepreneurship on campus. As we evolve, our mission remains stronger than ever: to nurture a community of bold thinkers, innovators, and changemakers ready to shape the future.",
    category: "Entrepreneurship",
    memberCount: 209,
    establishedYear: 2014,
    meetingSchedule: "Every Wednesday 5:30 PM",
    location: "Environmental Science Building",
    contactEmail: "environmental@college.edu",
    contactPhone: "+1 (555) 345-6789",
    website: "https://environmental.college.edu",
    socialMedia: {
      instagram: "https://instagram.com/env_action",
      linkedin: "https://www.linkedin.com/school/thaparventureclub/about/",
    },
    executiveMembers: [
      {
        name: "Dr. M.D. Singh",
        position: "President",
        email: "mdsingh@thapar.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Dr. Vineet Srivastava",
        position: "Vice President",
        email: "vineet.srivastava@thapar.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Zoe Anderson",
        position: "Campaign Coordinator",
        email: "zoe.anderson@college.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Carlos Mendez",
        position: "Outreach Director",
        email: "carlos.mendez@college.edu",
        avatar: "/place.svg?height=40&width=40",
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
    logo: "/society-logos/4.png",
    id: "4",
    name: "Fine Arts & Photography Society (FAPS)",
    shortDescription:
      "Capturing moments and developing artistic vision through photography workshops, exhibitions, and photo walks.",
    fullDescription:
      "The Photography Club is a creative community for students passionate about visual storytelling through photography. We welcome photographers of all skill levels, from smartphone enthusiasts to advanced DSLR users. Our club organizes regular photo walks, technical workshops, critique sessions, and annual exhibitions. We explore various genres including portrait, landscape, street, and documentary photography.",
    category: "Arts",
    memberCount: 78,
    establishedYear: 2018,
    meetingSchedule: "Every Saturday 2:00 PM",
    location: "Art Studio, Creative Arts Building",
    contactEmail: "faps@thapar.edu",
    contactPhone: "+1 (555) 456-7890",
    socialMedia: {
      instagram: "https://instagram.com/photo_club",
      twitter: "https://twitter.com/photo_club",
    },
    executiveMembers: [
      {
        name: "Dr. Ashima Singh",
        position: "President",
        email: "ashima@thapar.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Dr. Vikas Sharma",
        position: "Vice President",
        email: "vikas.sharma@thapar.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Marcus Johnson",
        position: "Exhibition Manager",
        email: "marcus.johnson@college.edu",
        avatar: "/place.svg?height=40&width=40",
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
    logo: "/society-logos/5.png",
    id: "5",
    name: "Thapar Amateur Astronomers Society (TAAS)",
    shortDescription:
      "Explore The Cosmos with Science and Engineering.\nA students' club dedicated to the love of space and astronomy.",
    fullDescription:
      "TAAS explores the cosmos with science and engineering with the objective of cultivating scientific temperament, nourishing inquisitive young minds and encouraging innovation in those who do not get a chance in the daily load of the engineering course. This society creates a platform for students who are interested in applying their knowledge and skills in the field of Astronomy and opens up opportunities for students willing to work as professionals in the subject.",
    category: "Astronomy",
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
        name: "Dr. Debabrata Deb",
        position: "President",
        email: "victoria.chang@college.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Dr. Mamta Gulati",
        position: "Vice President",
        email: "benjamin.clark@college.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Saksham  ",
        position: "General Secretary",
        email: "saksham@college.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Aarushi Kapoor ",
        position: "Event Management Head",
        email: "akapoor_be22@thapar.edu",
        avatar: "/place.svg?height=40&width=40",
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
    logo: "/society-logos/6.png",
    id: "6",
    name: "Music and Dramatic Society (MUDRA)",
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
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Jake Morrison",
        position: "Performance Director",
        email: "jake.morrison@college.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Aria Kim",
        position: "Workshop Coordinator",
        email: "aria.kim@college.edu",
        avatar: "/place.svg?height=40&width=40",
      },
      {
        name: "Thomas Brown",
        position: "Technical Manager",
        email: "thomas.brown@college.edu",
        avatar: "/place.svg?height=40&width=40",
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
