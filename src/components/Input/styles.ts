import { styled } from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  label {
    color: ${(props) => props.theme.colors['--gray-300']};
    font-size: 1rem;
  }

  input {
    background: ${(props) => props.theme.colors['--zinc-950']};
    border: 1px solid transparent;
    color: ${(props) => props.theme.colors['--gray-300']};
    height: 3rem;
    border-radius: 8px;
    outline: 0;
    padding: 1rem;

    &:focus-within {
      border: 1px solid #005b41;
    }
  }
`
