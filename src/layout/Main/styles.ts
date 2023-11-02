import { styled } from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  position: relative;
  padding: 5rem 1.5rem 1rem;

  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    .content {
      margin-left: 320px;
    }
  }
`
