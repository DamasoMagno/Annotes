import styled from 'styled-components'

interface SidebarProps {
  open: boolean
}

export const SidebarContainer = styled.aside<SidebarProps>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  color: ${(props) => props.theme.colors['--white']};
  background: ${(props) => props.theme.colors['--neutral-950']};
  height: 100vh;
  width: 100%;
  z-index: 1;
  position: fixed;

  @media (min-width: 1024px) {
    display: flex;
    max-width: 320px;
  }

  header {
    margin: 1.5rem 2rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: transparent;
      border: 0;
      color: white;
      font-size: 1.5rem;

      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;

      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  nav {
    margin-top: 4rem;
    padding: 0 2rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    a {
      text-decoration: none;
      font-size: 1rem;
      text-align: center;
      color: ${(props) => props.theme.colors['--gray-400']};
      transition: color 0.25s;

      &.active,
      &:hover {
        color: ${(props) => props.theme.colors['--gray-200']};
      }
    }

    @media (min-width: 1024px) {
      a {
        text-align: left;
      }
    }
  }

  > button {
    margin-top: auto;
  }
`
