import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 3rem;

  label {
    color: ${(props) => props.theme.colors['--gray-300']};
    font-size: 1rem;
  }

  .field {
    background: ${(props) => props.theme.colors['--zinc-950']};
    display: flex;
    align-items: center;
    gap: 2px;
    border: 1px solid transparent;
    border-radius: 8px;
    padding-right: 1rem;
    color: ${(props) => props.theme.colors['--gray-300']};

    input {
      background-color: transparent;
      color: ${(props) => props.theme.colors['--gray-300']};
      height: 3rem;
      outline: 0;
      padding: 0 1rem;
      flex: 1;
      border: 0;
    }

    &:focus-within {
      border: 1px solid #005b41;
    }
  }
`
