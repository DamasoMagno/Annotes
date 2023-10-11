import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 5rem 1.5rem 1rem;

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
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 728px) {
    flex-direction: row;
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .icon {
      border-radius: 0.375rem;
      background: rgba(32, 32, 36, 0.5);
      font-size: 1rem;
      padding: 0.25rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  button {
    background-color: transparent;
    border-radius: 8px;
    border: 0;
    width: 100%;
    color: ${(props) => props.theme.colors['--gray-300']};
    cursor: pointer;
    background-color: #202024;
    padding: 0.5rem 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 728px) {
      width: auto;
    }
  }
`

export const Annotations = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`
