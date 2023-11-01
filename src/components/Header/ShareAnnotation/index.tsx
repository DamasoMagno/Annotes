import { ReactNode } from 'react'
import * as Popup from '@radix-ui/react-popover'
import { LockOpen, Share, X } from 'phosphor-react'

import { Button } from '../../Button'

import { Content } from './styles'

interface ShareAnnotationProps {
  children: ReactNode
}

export function ShareAnnotation({ children }: ShareAnnotationProps) {
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
            <Button>
              <LockOpen />
              <span>publico</span>
            </Button>
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
