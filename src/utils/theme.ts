// utils/theme.ts - Utilitários para gerenciamento de tema
import { useState, useEffect } from 'react'
import { lightTheme, darkTheme } from '../theme/Theme'
import { DefaultTheme } from 'styled-components'

// Chave para armazenar a preferência de tema no localStorage
const THEME_KEY = 'task-app-theme'

// storage
export function useTheme() {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme)
  const [isReady, setIsReady] = useState(false)

  // Carrega o tema salvo no primeiro carregamento
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY)
    if (savedTheme === 'dark') {
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
    setIsReady(true)
  })

  // Função para alternar entre os temas
  const toggleTheme = () => {
    const newTheme = theme.name === 'light' ? darkTheme : lightTheme
    setTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme.name)
  }

  return { theme, toggleTheme, isReady }
}


export function prefersDarkMode(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
}
