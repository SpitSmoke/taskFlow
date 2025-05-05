// src/pages/index.tsx

import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/login') // redireciona para a página de login
  }, [router])

  return null
}
