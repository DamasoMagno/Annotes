import * as Popup from '@radix-ui/react-popover'
import { Button } from '../../Button'
import { Share, X } from 'phosphor-react'
import { ReactNode } from 'react'
import { Content } from './styles'

interface PopoverProps {
  children: ReactNode
}

export function Popover({ children }: PopoverProps) {
  return (
    <Popup.Root>
      <Popup.Trigger asChild>{children}</Popup.Trigger>
      <Popup.Portal>
        <Content>
          <header>
            <h3>Compartilhar</h3>
            <Popup.Close>
              <X />
            </Popup.Close>
          </header>

          <div>
            <Button>publico</Button>
            <Button variant="ghost">
              <Share />
              <span>copiar link</span>
            </Button>
          </div>
        </Content>
      </Popup.Portal>
    </Popup.Root>
  )
}
