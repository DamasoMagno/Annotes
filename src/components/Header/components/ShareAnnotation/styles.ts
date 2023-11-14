import styled from 'styled-components'
import * as Popover from '@radix-ui/react-popover'

export const Content = styled(Popover.Content)`
  background-color: ${(props) => props.theme.colors['--zinc-950']};
  border-radius: 8px;
  width: 22.5rem;
  position: relative;
  margin-top: 0.75rem;
  margin-right: 0.5rem;

  display: flex;
  flex-direction: column;

  header {
    color: ${(props) => props.theme.colors['--white']};
    font-size: 1.125rem;
    padding: 1rem 1.5rem;
    font-weight: 600;

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

export const Actions = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`
