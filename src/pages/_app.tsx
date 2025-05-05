// _app.tsx - Configuração do ThemeProvider e toggle de tema
import type { AppProps } from 'next/app'
import styled, { ThemeProvider } from 'styled-components'
import LoadingScreen from '../components/LoadingScreen'
import { Sun, Moon } from 'react-feather'
import { GlobalStyle } from '../styles/globalsStyles'
import { useTheme } from '../utils/theme'
import { AuthProvider } from '../hooks/useAuth'

const ThemeToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  z-index: 10;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: background-color ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) =>
      theme.name === 'light'
        ? 'rgba(0, 0, 0, 0.1)'
        : 'rgba(255, 255, 255, 0.1)'};
  }
`

export default function MyApp({ Component, pageProps }: AppProps) {
  
  const { theme, toggleTheme, isReady } = useTheme()
  if(!isReady) return <LoadingScreen />

  return (
    <AuthProvider>
          <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeToggleButton onClick={toggleTheme}>
        {theme.name === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </ThemeToggleButton>
      <Component {...pageProps} />
    </ThemeProvider>
    </AuthProvider>
  )
}
