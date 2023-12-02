import { styled } from 'styled-components'
import * as Toolbar from '@radix-ui/react-toolbar'

export const ToolbarRoot = styled(Toolbar.Root)`
  display: flex;
  align-items: center;
`

export const Options = styled(Toolbar.ToggleGroup)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;

  &.formatText {
    margin-right: 1rem;
    display: flex;
    gap: 1rem;
  }

  .tag {
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    border-radius: 8px;
    justify-content: center;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['--gray-300']};
    cursor: pointer;
  }

  .tags {
    display: flex;
    gap: 0.25rem;

    @media (max-width: 728px) {
      max-width: 60%;
      overflow-x: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`

export const Formatter = styled(Toolbar.ToggleItem)`
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors['--gray-300']};
  cursor: pointer;

  &[data-state='on'] {
    background: #333;
  }
`
