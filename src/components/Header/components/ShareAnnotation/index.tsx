import * as Popup from '@radix-ui/react-popover'
import { ShareNetwork, X } from 'phosphor-react'

import { Button } from '../../../Button'

import { Actions, Content, Trigger } from './styles'

export function ShareAnnotation() {
  return (
    <Popup.Root>
      <Trigger asChild>
        <button title="Compartilhar">
          <span>compartilhar</span>
          <ShareNetwork />
        </button>
      </Trigger>

      <Popup.Portal>
        <Content>
          <header>
            <h3>Compartilhar</h3>

            <Popup.Close asChild>
              <button>
                <X />
              </button>
            </Popup.Close>
          </header>

          <Actions>
            <Button variant="ghost">
              <span>Publico</span>
            </Button>

            <Button>
              <span>Copiar link</span>
            </Button>
          </Actions>
        </Content>
      </Popup.Portal>
    </Popup.Root>
  )
}
