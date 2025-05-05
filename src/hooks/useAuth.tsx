import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { useRouter } from 'next/router'

type AuthContextType = {
  token: string | null
  login: (token: string, remember: boolean) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const savedToken = localStorage.getItem('token') || sessionStorage.getItem('token')
    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  const login = (token: string, remember: boolean) => {
    if (remember) {
      localStorage.setItem('token', token)
    } else {
      sessionStorage.setItem('token', token)
    }
    setToken(token)
  }

  const logout = () => {
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
    setToken(null)
    router.push('/login')
  }

  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth precisa estar dentro de AuthProvider')
  }
  return context
}
