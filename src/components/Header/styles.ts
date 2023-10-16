import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  right: 24px;
  left: 0;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
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

  .options {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Actions = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;

  @media (min-width: 1024px) {
    .menu {
      display: none;
    }
  }

  button {
    background-color: transparent;
    color: ${(props) => props.theme.colors['--gray-300']};
    border: 0;
    cursor: pointer;
    height: 2rem;
    padding: 0 0.75rem;
    border-radius: 8px;
    transition: background 0.25s;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      font-size: 1.25rem;
    }

    span {
      display: none;
      font-size: 1rem;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }

    @media (min-width: 1024px) {
      span {
        display: block;
      }
    }
  }

  .notification {
    position: relative;

    div {
      width: 8px;
      height: 8px;
      border-radius: 100%;
      background: #ef4444;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translate(-100%, -100%);
    }
  }
`
