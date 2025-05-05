import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Moon, Sun } from 'react-feather'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Wrapper = styled.div<{ dark: boolean }>`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ dark }) => (dark ? '#1f2937' : '#f9fafb')};
  color: ${({ dark }) => (dark ? '#f9fafb' : '#1f2937')};
`

const IconWrapper = styled.div`
  animation: ${spin} 1.5s linear infinite;
`

export default function LoadingScreen() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true)
    }
  }, [])

  return (
    <Wrapper dark={isDark}>
      <IconWrapper>
        {isDark ? <Moon size={32} /> : <Sun size={32} />}
      </IconWrapper>
    </Wrapper>
  )
}
