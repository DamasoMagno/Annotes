import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 10px;
  width: 100%;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 1rem;

    .notification {
      position: relative;
      cursor: pointer;

      svg {
        font-size: 1.25rem;
        color: ${(props) => props.theme.colors['--gray-300']};
      }

      div {
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background: red;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }

    img {
      width: 2rem;
      height: 2rem;
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

    @media (min-width: 1024px) {
      display: none;
    }
  }
`
