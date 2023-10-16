import * as Select from '@radix-ui/react-select'
import { styled } from 'styled-components'

export const Trigger = styled(Select.Trigger)`
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors['--gray-300']};
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
`

export const Content = styled(Select.Content)`
  position: absolute;
  top: 0;
  left: 25%;
  border-radius: 6px;
  background-color: white;
`

export const Viewport = styled(Select.Viewport)`
  padding: 5;
`
export const Item = styled(Select.Item)`
  font-size: 13px;
  line-height: 1;
  color: violet;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;
`
