// src/components/PrivateRoute.tsx

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../hooks/useAuth'

type Props = {
  children: React.ReactNode
}

export default function PrivateRoute({ children }: Props) {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) return null 

  return <>{children}</>
}
