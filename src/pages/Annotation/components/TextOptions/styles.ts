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
`
