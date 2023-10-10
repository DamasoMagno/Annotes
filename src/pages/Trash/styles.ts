import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const Content = styled.div`
  position: relative;
  width: 100%;
`

export const Header = styled.header`
  position: absolute;
  padding: 1rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 1rem;

    span {
      color: ${(props) => props.theme.colors['--gray-300']};
      font-size: 0.875rem;
    }

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    border: 0;
    color: ${(props) => props.theme.colors['--gray-400']};
    font-size: 1.5rem;
    cursor: pointer;

    @media (min-width: 728px) {
      display: none;
    }
  }
`
