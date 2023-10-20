import styled from 'styled-components'
import * as Popover from '@radix-ui/react-popover'

export const Content = styled(Popover.Content)`
  background-color: ${(props) => props.theme.colors['--zinc-950']};
  border-radius: 8px;
  margin-top: 0.75rem;
  margin-right: 0.5rem;
  width: 22.5rem;

  header {
    color: ${(props) => props.theme.colors['--white']};
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: transparent;
      border: 0;
      color: ${(props) => props.theme.colors['--white']};
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export const Notifications = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  height: 15rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
  }

  li {
    list-style: none;
    color: white;
    font-size: 1rem;
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