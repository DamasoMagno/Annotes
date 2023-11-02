import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 743px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  textarea {
    background-color: transparent;
    border: 0;
    font-weight: bold;
    color: white;
    font-size: 1.5rem;
    resize: none;
    outline: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`
