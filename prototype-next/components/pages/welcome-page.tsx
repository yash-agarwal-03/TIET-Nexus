"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Map, Bot, Rss } from "lucide-react"
import Link from "next/link"

export function WelcomePage() {
  return (
  <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* College Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg bg-white flex items-center justify-center">
                <img
                  src="/logos/tiet.png"
                  alt="Thapar Institute Logo"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-[#B11317]">TIET Nexus</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your comprehensive portal to Thapar Institute of Engineering & Technology. Connect, explore, and engage
              with our vibrant campus community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#B11317] hover:bg-red-800">
                <Link href="/explore">
                  Explore Societies <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/map">Campus Map</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover TIET Nexus</h2>
          <p className="text-lg text-gray-600">Everything you need to stay connected with campus life</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-[#B11317] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Explore Societies</h3>
              <p className="text-gray-600 text-sm">Discover clubs and societies that match your interests</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Map className="w-12 h-12 text-[#B11317] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Campus Map</h3>
              <p className="text-gray-600 text-sm">Navigate the campus with our interactive map</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Bot className="w-12 h-12 text-[#B11317] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Thapar AI</h3>
              <p className="text-gray-600 text-sm">Get instant answers to your campus questions</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Rss className="w-12 h-12 text-[#B11317] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Campus Feeds</h3>
              <p className="text-gray-600 text-sm">Stay updated with the latest campus news</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Thapar Institute</h2>
              <p className="text-gray-600 mb-4">
                Thapar Institute of Engineering & Technology (TIET) is a premier engineering institution established in
                1956. Located in Patiala, Punjab, TIET has been at the forefront of technical education and research in
                India.
              </p>
              <p className="text-gray-600 mb-6">
                With a rich legacy of academic excellence, innovative research, and industry partnerships, TIET
                continues to shape the future of engineering and technology education.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden flex flex-col items-center justify-center min-h-[260px]" style={{ minHeight: '260px', minWidth: '100%' }}>
              {/* Base image */}
              <img
                src="/logos/tiet-base.jpg"
                alt="Thapar Institute Campus"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 1 }}
              />
              {/* Glass overlay */}
              <div
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
                style={{
                  background: 'rgba(255,255,255,0.18)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                  backdropFilter: 'blur(1.5px)',
                  WebkitBackdropFilter: 'blur(1.5px)',
                  zIndex: 2,
                  borderRadius: 'inherit',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                }}
              >
                {/* Large horizontal logo on glass */}
                <div className="w-56 h-20 rounded-xl overflow-hidden shadow-xl bg-white/90 flex items-center justify-center mb-6 mt-2 border border-white/60" style={{maxWidth:'90vw'}}>
                  <img
                    src="/logos/tiet_transparent.png"
                    alt="TIET Logo"
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]" style={{ zIndex: 3 }}>Est. 1956</h3>
                <p className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]" style={{ zIndex: 3 }}>67+ Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
