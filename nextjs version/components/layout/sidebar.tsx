"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/components/providers"
import { Home, Compass, Map, Bot, Rss, Phone, Users, LogIn, LogOut, X, User } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { name: "Welcome", href: "/", icon: Home },
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "Campus Map", href: "/map", icon: Map },
  { name: "Thapar AI", href: "/ai", icon: Bot },
  { name: "Feeds", href: "/feeds", icon: Rss },
  { name: "Contact Us", href: "/contact", icon: Phone },
  { name: "Team", href: "/team", icon: Users },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const { user, login, logout, isGuest } = useAuth()

  const handleLogin = () => {
    login({
      name: "John Doe",
      email: "john.doe@thapar.edu",
      avatar: "/placeholder.svg?height=40&width=40",
    })
  }

  // Responsive sidebar width
  const sidebarWidth = 260

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden lg:flex fixed inset-y-0 left-0 z-50 flex-col justify-between bg-white border-r border-gray-200 transition-all duration-300"
        style={{ width: sidebarWidth }}
      >
        <div className="flex flex-col flex-1 overflow-y-auto px-4 pt-4 pb-2">
          {/* Logo */}
          <div className="flex h-16 items-center mb-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TIET Nexus</span>
            </div>
          </div>
          {/* Navigation */}
          <nav className="flex-1">
            <ul className="flex flex-col gap-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      pathname === item.href
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md p-2 text-base leading-6 font-semibold transition-colors items-center",
                    )}
                  >
                    <item.icon
                      className={cn(
                        pathname === item.href ? "text-blue-700" : "text-gray-400 group-hover:text-blue-700",
                        "h-6 w-6 shrink-0",
                      )}
                    />
                    <span className="hidden md:inline">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* User Info & Login/Logout at bottom */}
        <div className="flex flex-col gap-2 px-4 pb-4">
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
            <User className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-900 truncate">{isGuest ? "Guest" : user?.name}</span>
          </div>
          <Button
            className="w-full h-10 rounded-lg text-base font-semibold"
            variant={isGuest ? "default" : "destructive"}
            onClick={isGuest ? handleLogin : logout}
          >
            {isGuest ? (
              <><LogIn className="w-5 h-5 mr-2" /> Login</>
            ) : (
              <><LogOut className="w-5 h-5 mr-2" /> Logout</>
            )}
          </Button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col justify-between bg-white border-r border-gray-200 transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ width: sidebarWidth }}
      >
        <div className="flex flex-col flex-1 overflow-y-auto px-4 pt-4 pb-2">
          {/* Logo & Close */}
          <div className="flex h-16 items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TIET Nexus</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          {/* Navigation */}
          <nav className="flex-1">
            <ul className="flex flex-col gap-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      pathname === item.href
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:text-blue-700 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md p-2 text-base leading-6 font-semibold transition-colors items-center",
                    )}
                  >
                    <item.icon
                      className={cn(
                        pathname === item.href ? "text-blue-700" : "text-gray-400 group-hover:text-blue-700",
                        "h-6 w-6 shrink-0",
                      )}
                    />
                    <span className="hidden md:inline">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* User Info & Login/Logout at bottom */}
        <div className="flex flex-col gap-2 px-4 pb-4">
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
            <User className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-900 truncate">{isGuest ? "Guest" : user?.name}</span>
          </div>
          <Button
            className="w-full h-10 rounded-lg text-base font-semibold"
            variant={isGuest ? "default" : "destructive"}
            onClick={isGuest ? handleLogin : logout}
          >
            {isGuest ? (
              <><LogIn className="w-5 h-5 mr-2" /> Login</>
            ) : (
              <><LogOut className="w-5 h-5 mr-2" /> Logout</>
            )}
          </Button>
        </div>
      </aside>
    </>
  )
}
