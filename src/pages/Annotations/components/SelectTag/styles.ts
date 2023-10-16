import * as Select from '@radix-ui/react-select'
import { styled } from 'styled-components'

export const Trigger = styled(Select.Trigger)`
  background-color: transparent;
  border: 0;
  outline: 0;
  border-radius: 8px;
  padding: 0 1rem;
  height: 3rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors['--zinc-950']};
  color: ${(props) => props.theme.colors['--gray-300']};
  font-size: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Content = styled(Select.Content)`
  position: absolute;
  top: 0;
  left: 25%;
  width: 250px;
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
