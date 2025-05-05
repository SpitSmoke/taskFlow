import { useState, useEffect, FormEvent } from 'react'
import styled from 'styled-components'
import api, { Task } from '../services/api'
import TaskItem from '../components/TaskItem'
import PrivateRoute from '../components/PrivateRoute'
import { useAuth } from '../hooks/useAuth'



const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  padding: 2rem;
  transition: background-color ${(props) => props.theme.transition};
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.typography.fontSizes.xlarge};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.text};
  transition: color ${(props) => props.theme.transition};
  text-align: center;
`


const Card = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  padding: 2rem;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: ${(props) => props.theme.sizes.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;
`

const Form = styled.form`
  display: flex;
  gap: 1rem;
`

const Input = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  transition: all ${(props) => props.theme.transition};

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  border: none;
  cursor: pointer;
  transition: background-color ${(props) => props.theme.transition};

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`

const LogoutButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #ff5e57;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #e04b45;
  }
`


const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 300px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.border};
    border-radius: 3px;
  }
`

export default function Home() {
  const { logout } = useAuth()
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  async function loadTasks() {
    try {
      const res = await api.get<Task[]>('/tasks')
      setTasks(res.data)
    } catch (err) {
      console.error('Erro ao carregar tasks', err)
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])

  async function handleAdd(e: FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    try {
      const res = await api.post<Task>('/tasks', { title, description})
      setTitle('')
      setDescription('')
      await loadTasks()
    } catch (err) {
      console.error('Erro ao criar task', err)
    }
  }

  async function handleToggle(task: Task) {
    try {
      await api.put<Task>(`/tasks/${task.id}`, { 
        title: task.title,
        description: task.description,
        is_done: !task.is_done })
      await loadTasks()
    } catch (err) {
      console.error('Erro ao atualizar task', err)
    }
  }

  async function handleDelete(id: number) {
    try {
      await api.delete(`/tasks/${id}`)
      await loadTasks()
    } catch (err) {
      console.error('Erro ao deletar task', err)
    }
  }

  return (
    <PrivateRoute>
      <PageWrapper>
      <Title>Minhas Tasks</Title>
      <LogoutButton onClick={logout}>Sair</LogoutButton>

      <Card>
        <Form onSubmit={handleAdd}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nova task"
          />
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição (opcional)"
          />
          <Button type="submit">Adicionar</Button>
        </Form>

        <TaskList>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </TaskList>
      </Card>
    </PageWrapper>
    </PrivateRoute>
  )
}
