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

export const OpenTagsModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 0;
  color: ${(props) => props.theme.colors['--gray-300']};
  background: rgba(38, 38, 38, 0.5);
  cursor: pointer;
  padding: 1rem;

  span {
    @media (max-width: 768px) {
      display: none;
    }
  }
`
