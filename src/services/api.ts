import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para inserir o token sempre que existir
api.interceptors.request.use((config) => {
  const token =
    typeof window !== 'undefined'
      ? localStorage.getItem('token') || sessionStorage.getItem('token')
      : null

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export type Task = {
  id: number
  title: string
  description: string | null
  is_done: boolean
  created_at: string
  updated_at: string
}

export default api
