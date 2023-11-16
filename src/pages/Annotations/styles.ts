import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 743px;
  margin: 0 auto;

  .filters {
    max-width: 478px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.5rem;

    > button {
      background: ${(props) => props.theme.colors['--zinc-950']};

      span {
        display: none;
      }

      @media (min-width: 728px) {
        span {
          display: block;
        }
      }
    }

    @media (min-width: 728px) {
      grid-template-columns: 1fr 120px;
    }
  }

  .tags {
    list-style: none;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`

export const AnnotationsList = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
