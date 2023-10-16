import * as Select from '@radix-ui/react-select'
import { Tag } from 'phosphor-react'

import { Trigger, Content, Item, Viewport } from './styles'

export function SelectTag() {
  return (
    <Select.Root>
      <Trigger>
        <Select.Icon>
          <Tag />
        </Select.Icon>
        <Select.Value placeholder="Tags" />
      </Trigger>

      <Select.Portal>
        <Content position="popper" sideOffset={5}>
          <Viewport>
            <Select.Group>
              <Item value="t">T</Item>
              <Item value="t">T</Item>
              <Item value="t">T</Item>
              <Item value="t">T</Item>
              <Item value="t">T</Item>
              <Item value="t">T</Item>
            </Select.Group>
          </Viewport>
        </Content>
      </Select.Portal>
    </Select.Root>
  )
}
