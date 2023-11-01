import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 743px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TrashAlert = styled.div`
  border-radius: 0.5rem;
  border: 1px solid rgba(10, 10, 10, 0.25);
  background: rgba(10, 10, 10, 0.25);
  color: ${(props) => props.theme.colors['--gray-300']};
  padding: 1rem;
  width: 80%;
  max-width: 650px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .message {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      border-radius: 0.375rem;
      background: rgba(32, 32, 36, 0.5);
      font-size: 1.5rem;
      padding: 0.25rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      line-height: 1.6;
    }
  }

  button {
    border-radius: 8px;
    border: 0;
    color: ${(props) => props.theme.colors['--gray-300']};
    cursor: pointer;
    background-color: #202024;
    padding: 0.5rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
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
  gap: 1rem;
`
