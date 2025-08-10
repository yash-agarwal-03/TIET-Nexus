"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  name: string
  email: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (user: User) => void
  logout: () => void
  isGuest: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function Providers({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (userData: User) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  const isGuest = user === null

  return <AuthContext.Provider value={{ user, login, logout, isGuest }}>{children}</AuthContext.Provider>
}
