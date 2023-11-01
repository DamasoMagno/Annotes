import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 743px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  .filters {
    max-width: 478px;
    width: 100%;

    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    gap: 0.5rem;

    @media (min-width: 523px) {
      grid-template-columns: 1fr 118px;
    }
  }
`

export const AnnotationsList = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
