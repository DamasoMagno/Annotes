import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 10px;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    margin-left: 320px;
  }

  button {
    background-color: transparent;
    color: ${(props) => props.theme.colors['--gray-300']};
    border: 0;
    cursor: pointer;
    font-size: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors['--gray-300']};
    font-size: 1.25rem;

    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  div.actions {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 1rem;

    .menu {
      @media (min-width: 1024px) {
        display: none;
      }
    }

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
  }
`
