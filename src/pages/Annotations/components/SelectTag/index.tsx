import * as Select from '@radix-ui/react-select'
import { Tag } from 'phosphor-react'

import { Trigger } from './styles'

export function SelectTag() {
  return (
    <Select.Root>
      <Trigger>
        <Select.Icon>
          <Tag />
        </Select.Icon>
        <Select.Value placeholder="Selecionar tags" />
      </Trigger>

      {/* <Select.Portal>
        <Content>
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
      </Select.Portal> */}
    </Select.Root>
  )
}
