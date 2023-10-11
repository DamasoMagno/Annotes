import styled from 'styled-components'

interface SidebarProps {
  isOpen: boolean
}

export const SidebarContainer = styled.aside<SidebarProps>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;

  color: ${(props) => props.theme.colors['--white']};
  background: ${(props) => props.theme.colors['--neutral-950']};
  height: 100vh;
  width: 100%;

  z-index: 9999;
  position: fixed;

  @media (min-width: 1024px) {
    display: flex;
    width: 320px;
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
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 2rem;

    a {
      text-decoration: none;
      font-size: 1rem;
      color: ${(props) => props.theme.colors['--gray-400']};

      &.active {
        color: ${(props) => props.theme.colors['--gray-200']};
      }
    }
  }

  > button {
    margin-top: auto;
  }
`
