// src/pages/register.tsx

import { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import api from '../services/api'

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
const ToLogin = styled.p`
  text-align: center;
`

const Error = styled.p`
  color: red;
  font-size: 0.9rem;
`

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (form.password !== form.password_confirmation) {
      return setError('As senhas não coincidem.')
    }
    if (form.password.length < 6) {
      return setError('A senha deve ter pelo menos 6 caracteres.')
    }
    try {
      const res = await api.post(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        form
      )
      localStorage.setItem('token', res.data.token)
      router.push('/login')
    } catch (err: any) {
      const msg = err?.response?.data?.message || 'Erro ao registrar.'
      setError(msg)
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Crie sua conta</h2>
        <Input
          name="name"
          type="text"
          placeholder="Nome"
          value={form.name}
          onChange={handleChange}
          required
        />
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
        <Input
          name="password_confirmation"
          type="password"
          placeholder="Confirme sua senha"
          value={form.password_confirmation}
          onChange={handleChange}
          required
        />
        {error && <Error>Email ja registrado!</Error>}
        <Button type="submit">Registrar</Button>
        <ToLogin>
          Já tem uma conta?{' '}
          <a
            href="/login"
            style={{
              color: '#2a5298',
              fontWeight: 'bold',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            Entre
          </a>
        </ToLogin>
      </Form>
    </Container>
  )
}
