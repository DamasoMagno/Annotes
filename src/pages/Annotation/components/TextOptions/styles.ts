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
