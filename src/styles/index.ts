// Arquivo de barril para exportar todos os componentes estilizados
import styled from 'styled-components'

// Componentes comuns
export const Container = styled.div`
  max-width: ${(props) => props.theme.sizes.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  border: none;
  cursor: pointer;
  transition: background-color ${(props) => props.theme.transition};

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  transition: border-color ${(props) => props.theme.transition},
    background-color ${(props) => props.theme.transition},
    color ${(props) => props.theme.transition};

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`

export * from '../theme/Theme'
