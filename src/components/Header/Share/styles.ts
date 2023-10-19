import styled from 'styled-components'
import * as Popover from '@radix-ui/react-popover'

export const Content = styled(Popover.Content)`
  background-color: ${(props) => props.theme.colors['--zinc-950']};
  border-radius: 4px;
  width: 360px;
  margin-top: 0.5rem;
  margin-right: 0.5rem;

  display: flex;
  flex-direction: column;

  header {
    color: ${(props) => props.theme.colors['--white']};
    font-size: 1.25rem;
    padding: 1.5rem;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: transparent;
      border: 0;
      color: white;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  div {
    padding: 1rem 1.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`
