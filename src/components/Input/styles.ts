import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  background: rgba(38, 38, 38, 0.5);
  color: ${(props) => props.theme.colors['--gray-300']};
  border: 1px solid transparent;
  border-radius: 8px;
  width: 100%;

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors['--green-500']};
  }

  input {
    background-color: transparent;
    color: ${(props) => props.theme.colors['--gray-300']};
    height: 3rem;
    outline: 0;
    padding: 0 1rem;
    border: 0;
    flex: 1;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.colors['--gray-400']};
    margin-right: 0.5rem;
  }
`
