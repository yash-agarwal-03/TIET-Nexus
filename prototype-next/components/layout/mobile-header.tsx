"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

interface MobileHeaderProps {
  onMenuClick: () => void
}

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:hidden">
      <Button variant="ghost" size="sm" onClick={onMenuClick}>
        <Menu className="h-6 w-6" />
      </Button>

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
  )
}
