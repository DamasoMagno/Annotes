import { styled } from 'styled-components'
import * as Toolbar from '@radix-ui/react-toolbar'

export const ToolbarRoot = styled(Toolbar.Root)`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Options = styled(Toolbar.ToggleGroup)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;

  button {
    background-color: transparent;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transform: background 0.25s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
`
