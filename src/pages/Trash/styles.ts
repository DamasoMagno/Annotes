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
    align-items: center;

    p {
      font-size: 1rem;
    }

    svg {
      border-radius: 0.375rem;
      background: rgba(32, 32, 36, 0.5);
      font-size: 1.5rem;
      padding: 0.25rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  button {
    border-radius: 8px;
    border: 0;
    color: ${(props) => props.theme.colors['--gray-300']};
    cursor: pointer;
    background-color: ${(props) => props.theme.colors['--red-500']};
    padding: 0.5rem 1rem;
    transition: filter 0.25s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.95);
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
