import styled from 'styled-components'
import * as Popover from '@radix-ui/react-popover'

export const Trigger = styled(Popover.Trigger)`
  background-color: transparent;
  color: ${(props) => props.theme.colors['--gray-300']};
  border: 0;
  cursor: pointer;
  position: relative;
  height: 2.5rem;
  padding: 0 0.75rem;
  border-radius: 8px;
  transition: background 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  div {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #ef4444;
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateX(-100%);
  }

  @media (min-width: 1024px) {
    svg {
      font-size: 1.25rem;
    }
  }
`

export const Content = styled(Popover.Content)`
  background-color: ${(props) => props.theme.colors['--zinc-950']};
  border-radius: 8px;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  width: 22.5rem;

  header {
    color: ${(props) => props.theme.colors['--white']};
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
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

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
`

export const Notifications = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  max-height: 15rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
  }

  li {
    list-style: none;
    width: 100%;
    color: white;
    font-size: 0.875rem;
    padding: 1.5rem;
    background: rgba(38, 38, 38, 0.5);

    a {
      color: #005b41;
      text-decoration: none;
      margin-left: 0.25rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
