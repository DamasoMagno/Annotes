import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  position: absolute;
  top: 4px;
  right: 24px;
  left: 0;
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    width: auto;
    margin-left: 320px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors['--gray-300']};
    padding: 0 0.5rem;
    font-size: 1rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Options = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;

    .menu {
      background-color: transparent;
      border: 0;
      border-radius: 4px;
      width: 2rem;
      height: 2rem;
      color: ${(props) => props.theme.colors['--white']};
      cursor: pointer;
      transition: background-color 0.25s;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (min-width: 1024px) {
        display: none;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
`
