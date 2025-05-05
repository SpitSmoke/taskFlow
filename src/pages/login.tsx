// src/pages/login.tsx

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import api from '../services/api'
import { useAuth } from '../hooks/useAuth'


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem;
`

const Form = styled.form`
  background-color: #c3c3c3;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
`

const Button = styled.button`
  background-color: #2a5298;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e3c72;
  }
`

const ToRegister = styled.p`
text-align: center;
`

const Error = styled.p`
  color: red;
  font-size: 0.9rem;
`
const RememberMe = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const { login, isAuthenticated } = useAuth()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const res = await api.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        form
      )
      localStorage.setItem('token', res.data.token)
      login(res.data.token, rememberMe)
      router.push('/dashboard')
    } catch (err: any) {
      const msg = err?.response?.data?.error || 'Erro ao fazer login.'
      setError(msg)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated, router])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Entrar na sua conta</h2>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={handleChange}
          required
        />
        <RememberMe>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Lembrar de mim
        </RememberMe>
        {error && <Error>Credenciais erradas !</Error>}
        <Button type="submit">Entrar</Button>
        <ToRegister>
          Não tem uma conta?{' '}
          <a
            href="/register"
            style={{
              color: '#2a5298',
              fontWeight: 'bold',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            Crie uma
          </a>
        </ToRegister>
      </Form>
    </Container>
  )
}
