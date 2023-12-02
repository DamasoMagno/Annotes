import styled from 'styled-components'

export const Container = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: ${(props) => props.theme.colors['--gray-300']};
  background-color: ${(props) => props.theme.colors['--zinc-850']};
  font-size: 0.875rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`
