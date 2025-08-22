"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/components/providers"
import { Home, Compass, Map, Bot, Rss, Phone, Users, LogIn, LogOut, X } from "lucide-react"

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
  { name: "Lost & Found", href: "http://localhost:3001", icon: Users },
  { name: "Contact Us", href: "/contact", icon: Phone },
  { name: "Team", href: "/team", icon: Users },
]

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const { user, login, logout, isGuest } = useAuth()

  const handleLogin = () => {
    // Mock login - in real app, this would open a login modal/redirect
    login({
      name: "John Doe",
      email: "john.doe@thapar.edu",
      avatar: "/place.svg?height=40&width=40",
    })
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white border-r border-gray-200 px-6 pb-4">
          {/* Logo */}
          <div className="flex h-16 shrink-0 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <img
                  src="/logos/tiet.png"
                  alt="Thapar Institute Logo"
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">TIET Nexus</span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Avatar className="w-10 h-10">
              <AvatarImage src={user?.avatar || "/place.svg?height=40&width=40"} />
              <AvatarFallback className="bg-red-100 text-[#B11317]">
                {isGuest
                  ? "G"
                  : user?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{isGuest ? "Guest" : user?.name}</p>
              {!isGuest && <p className="text-xs text-gray-500 truncate">{user?.email}</p>}
            </div>
            {isGuest ? (
              <Button size="sm" variant="outline" onClick={handleLogin}>
                <LogIn className="w-4 h-4" />
              </Button>
            ) : (
              <Button size="sm" variant="ghost" onClick={logout}>
                <LogOut className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      {item.href.startsWith('http') ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "text-gray-700 hover:text-[#B11317] hover:bg-gray-50",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors",
                          )}
                        >
                          <item.icon className={cn("text-gray-400 group-hover:text-[#B11317]", "h-6 w-6 shrink-0")} />
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className={cn(
                            pathname === item.href
                              ? "bg-red-50 text-[#B11317]"
                              : "text-gray-700 hover:text-[#B11317] hover:bg-gray-50",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors",
                          )}
                        >
                          <item.icon
                            className={cn(
                              pathname === item.href ? "text-[#B11317]" : "text-gray-400 group-hover:text-[#B11317]",
                              "h-6 w-6 shrink-0",
                            )}
                          />
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 z-50 flex w-64 flex-col transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white border-r border-gray-200 px-6 pb-4">
          {/* Mobile Header */}
          <div className="flex h-16 shrink-0 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#B11317] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">TIET Nexus</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Avatar className="w-10 h-10">
              <AvatarImage src={user?.avatar || "/place.svg?height=40&width=40"} />
              <AvatarFallback className="bg-red-100 text-[#B11317]">
                {isGuest
                  ? "G"
                  : user?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{isGuest ? "Guest" : user?.name}</p>
              {!isGuest && <p className="text-xs text-gray-500 truncate">{user?.email}</p>}
            </div>
            {isGuest ? (
              <Button size="sm" variant="outline" onClick={handleLogin}>
                <LogIn className="w-4 h-4" />
              </Button>
            ) : (
              <Button size="sm" variant="ghost" onClick={logout}>
                <LogOut className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          pathname === item.href
                            ? "bg-red-50 text-[#B11317]"
                            : "text-gray-700 hover:text-[#B11317] hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors",
                        )}
                      >
                        <item.icon
                          className={cn(
                            pathname === item.href ? "text-[#B11317]" : "text-gray-400 group-hover:text-[#B11317]",
                            "h-6 w-6 shrink-0",
                          )}
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
