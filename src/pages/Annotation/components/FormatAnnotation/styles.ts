import { styled } from 'styled-components'
import * as Toolbar from '@radix-ui/react-toolbar'

export const ToolbarRoot = styled(Toolbar.Root)`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const FormatText = styled(Toolbar.ToggleGroup)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-right: 1rem;
`

export const SpecifyTags = styled(Toolbar.ToggleGroup)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .tags {
    display: flex;
    max-width: 200px;
    overflow-x: scroll;
    gap: 0.25rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const Button = styled(Toolbar.Button)`
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  font-size: 1.25rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors['--gray-300']};
  cursor: pointer;

  &[data-state='on'],
  &:hover {
    background: #333;
  }
`
