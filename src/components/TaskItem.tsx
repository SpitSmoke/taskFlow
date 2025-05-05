import React, { useState } from 'react'
import styled from 'styled-components'
import { Task } from '../services/api'

type Props = {
  task: Task
  onToggle: (task: Task) => void
  onDelete: (id: number) => void
  onUpdateDescription?: (task: Task, description: string) => void
}

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
`

const Checkbox = styled.input`
  margin-top: 0.3rem;
  cursor: pointer;
`

interface TaskTitleProps {
  isDone: boolean
}

const TaskTitle = styled.span<TaskTitleProps>`
  display: block;
  font-weight: bold;
  text-decoration: ${props => (props.isDone ? 'line-through' : 'none')};
  color: ${props =>
    props.isDone ? props.theme.colors.textSecondary : props.theme.colors.text};
  transition: color ${props => props.theme.transition};
`

const DescriptionInput = styled.textarea<{ isDone: boolean }>`
  width: 100%;
  resize: none;
  border: none;
  background: transparent;
  color: ${props =>
    props.isDone ? props.theme.colors.textSecondary : props.theme.colors.text};
  text-decoration: ${props => (props.isDone ? 'line-through' : 'none')};
  font-size: 0.875rem;
  outline: none;
  margin-top: 0.25rem;

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }
`

const DeleteButton = styled.button`
  color: ${props => props.theme.colors.error};
  margin-left: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.errorHover};
  }
`

export default function TaskItem({
  task,
  onToggle,
  onDelete,
  onUpdateDescription,
}: Props) {
  const [editingDescription, setEditingDescription] = useState(task.description ?? '')

  const handleBlur = () => {
    if (editingDescription !== task.description && onUpdateDescription) {
      onUpdateDescription(task, editingDescription)
    }
  }

  return (
    <ListItem>
      <Checkbox
        type="checkbox"
        checked={task.is_done}
        onChange={() => onToggle(task)}
      />
      <div style={{ flexGrow: 1 }}>
        <TaskTitle isDone={task.is_done}>{task.title}</TaskTitle>
        <DescriptionInput
          value={editingDescription}
          onChange={(e) => setEditingDescription(e.target.value)}
          onBlur={handleBlur}
          isDone={task.is_done}
          placeholder="Adicione uma descrição..."
        />
      </div>
      <DeleteButton onClick={() => onDelete(task.id)}>X</DeleteButton>
    </ListItem>
  )
}
