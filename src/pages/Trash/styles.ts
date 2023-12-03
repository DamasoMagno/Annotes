import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 743px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TrashAlert = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(10, 10, 10, 0.25);
  background: rgba(10, 10, 10, 0.25);
  color: ${(props) => props.theme.colors['--gray-300']};
  padding: 1rem 1.5rem;
  width: 100%;
  max-width: 42.6812rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .message {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    p {
      font-size: 1rem;
    }

    div {
      background-color: #202024;
      padding: 0.25rem;
      border-radius: 0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        background: rgba(32, 32, 36, 0.5);
        font-size: 1rem;
      }
    }
  }

  button {
    border-radius: 8px;
    border: 0;
    color: ${(props) => props.theme.colors['--gray-300']};
    background-color: ${(props) => props.theme.colors['--red-500']};
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: filter 0.25s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 568px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`

export const AnnotationList = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`
