import { styled } from 'styled-components'

export const AnnotationContainer = styled.div`
  background-color: ${(props) => props.theme.colors['--neutral-950']};
  border-radius: 4px;
  padding: 1.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      color: ${(props) => props.theme.colors['--gray-50']};
      font-weight: bold;
      font-size: 1.5rem;
    }

    span {
      color: ${(props) => props.theme.colors['--gray-400']};
      font-size: 0.875rem;
    }
  }

  p {
    color: ${(props) => props.theme.colors['--gray-300']};
    line-height: 1.6;
    font-size: 1rem;
    margin: 1rem 0 2rem;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors['--gray-400']};
    }

    .tags {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        color: ${(props) => props.theme.colors['--gray-600']};
      }
    }

    button {
      border: 0;
      background-color: transparent;
      color: white;
      font-size: 1rem;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
