"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Users } from "lucide-react"

interface BuildingInfo {
  name: string
  description: string
  facilities: string[]
  timings: string
  contact?: string
  capacity?: string
}

const buildingsData: Record<string, BuildingInfo> = {
  "academic-block-a": {
    name: "Academic Block A",
    description: "Main academic building housing Computer Science, Electronics, and Mathematics departments.",
    facilities: ["Computer Labs", "Lecture Halls", "Faculty Offices", "Student Common Area"],
    timings: "8:00 AM - 8:00 PM",
    contact: "+91-175-2393021",
    capacity: "2000 students",
  },
  library: {
    name: "Central Library",
    description: "State-of-the-art library with extensive collection of books, journals, and digital resources.",
    facilities: ["Reading Halls", "Digital Library", "Group Study Rooms", "Research Section"],
    timings: "7:00 AM - 11:00 PM",
    contact: "+91-175-2393022",
    capacity: "800 students",
  },
  "hostel-block": {
    name: "Hostel Complex",
    description: "Residential facilities for students with modern amenities and recreational areas.",
    facilities: ["Mess Hall", "Recreation Room", "Gym", "Wi-Fi", "Laundry"],
    timings: "24/7 Access",
    contact: "+91-175-2393023",
    capacity: "1500 students",
  },
  "sports-complex": {
    name: "Sports Complex",
    description: "Comprehensive sports facilities including indoor and outdoor games.",
    facilities: ["Basketball Court", "Tennis Court", "Swimming Pool", "Gym", "Cricket Ground"],
    timings: "6:00 AM - 10:00 PM",
    contact: "+91-175-2393024",
    capacity: "500 students",
  },
}

export function CampusMapPage() {
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null)

  const handleBuildingClick = (buildingId: string) => {
    setSelectedBuilding(buildingId)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TIET Campus Map</h1>
          <p className="text-lg text-gray-600">
            Explore our beautiful campus and discover all the facilities available to you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Interactive Campus Map
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full p-0">
                {/* Placeholder Map - Replace with actual map implementation */}
                <div className="relative w-full h-full bg-gradient-to-br from-green-100 to-blue-100 rounded-b-lg overflow-hidden">
                  {/* Campus Layout */}
                  <div className="absolute inset-4 bg-green-200 rounded-lg opacity-50"></div>

                  {/* Buildings */}
                  <div
                    className="absolute top-20 left-20 w-24 h-16 bg-blue-500 rounded cursor-pointer hover:bg-blue-600 transition-colors flex items-center justify-center"
                    onClick={() => handleBuildingClick("academic-block-a")}
                  >
                    <span className="text-white text-xs font-semibold text-center">Academic Block A</span>
                  </div>

                  <div
                    className="absolute top-20 right-20 w-20 h-20 bg-purple-500 rounded cursor-pointer hover:bg-purple-600 transition-colors flex items-center justify-center"
                    onClick={() => handleBuildingClick("library")}
                  >
                    <span className="text-white text-xs font-semibold text-center">Library</span>
                  </div>

                  <div
                    className="absolute bottom-20 left-20 w-32 h-20 bg-orange-500 rounded cursor-pointer hover:bg-orange-600 transition-colors flex items-center justify-center"
                    onClick={() => handleBuildingClick("hostel-block")}
                  >
                    <span className="text-white text-xs font-semibold text-center">Hostel Complex</span>
                  </div>

                  <div
                    className="absolute bottom-20 right-20 w-24 h-24 bg-green-500 rounded cursor-pointer hover:bg-green-600 transition-colors flex items-center justify-center"
                    onClick={() => handleBuildingClick("sports-complex")}
                  >
                    <span className="text-white text-xs font-semibold text-center">Sports Complex</span>
                  </div>

                  {/* Paths */}
                  <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-400 opacity-60"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-400 opacity-60"></div>

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
                    <h4 className="font-semibold text-sm mb-2">Legend</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded"></div>
                        <span>Academic Buildings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded"></div>
                        <span>Library</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-500 rounded"></div>
                        <span>Hostels</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded"></div>
                        <span>Sports Facilities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Information Panel */}
          <div className="lg:col-span-1">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle>Building Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedBuilding && buildingsData[selectedBuilding] ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{buildingsData[selectedBuilding].name}</h3>
                      <p className="text-gray-600 text-sm">{buildingsData[selectedBuilding].description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Facilities</h4>
                      <ul className="space-y-1">
                        {buildingsData[selectedBuilding].facilities.map((facility, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            {facility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span>
                          <strong>Timings:</strong> {buildingsData[selectedBuilding].timings}
                        </span>
                      </div>

                      {buildingsData[selectedBuilding].contact && (
                        <div className="flex items-center gap-3 text-sm">
                          <Phone className="w-4 h-4 text-blue-600" />
                          <span>
                            <strong>Contact:</strong> {buildingsData[selectedBuilding].contact}
                          </span>
                        </div>
                      )}

                      {buildingsData[selectedBuilding].capacity && (
                        <div className="flex items-center gap-3 text-sm">
                          <Users className="w-4 h-4 text-blue-600" />
                          <span>
                            <strong>Capacity:</strong> {buildingsData[selectedBuilding].capacity}
                          </span>
                        </div>
                      )}
                    </div>

                    <Button className="w-full mt-4">Get Directions</Button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Click on any building on the map to view detailed information</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
