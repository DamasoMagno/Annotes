import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 743px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .filters {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    width: 100%;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }
`

export const Tags = styled.div`
  height: 3rem;
  background-color: ${(props) => props.theme.colors['--zinc-950']};
  border-radius: 4px;
  border: 1px dashed black;
  padding: 0 1rem;
  max-width: 290px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  div.separator {
    height: 25px;
    width: 2px;
    border-radius: 24px;
    background-color: #374151;
  }

  div.tags {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    span {
      background-color: #202024;
      color: ${(props) => props.theme.colors['--gray-300']};
      font-size: 0.875rem;
      border-radius: 4px;
      padding: 0.25rem 0.5rem;
    }
  }
`

export const AnnotationsList = styled.div`
  margin-top: 3rem;

  .select {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    color: white;
    width: 100%;
  }

  .annotations {
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
