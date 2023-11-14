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

    @media (min-width: 728px) {
      grid-template-columns: 1fr 120px;
    }
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    margin-top: 1rem;

    li {
      color: ${(props) => props.theme.colors['--gray-300']};
      padding: 0.5rem 1rem;
      border-radius: 8px;
      background-color: #171717;
      font-size: 0.875rem;

      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
  }
`

export const AnnotationsList = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
