import { ReactNode } from 'react'
import * as Popup from '@radix-ui/react-popover'
import { Link } from 'react-router-dom'
import { X } from 'phosphor-react'

import { Content, Notifications } from './styles'

interface Notification {
  children: ReactNode
}

export function Notification({ children }: Notification) {
  return (
    <Popup.Root>
      <Popup.Trigger asChild>{children}</Popup.Trigger>

      <Popup.Portal>
        <Content>
          <header>
            <h3>Notificações</h3>

            <Popup.Close asChild>
              <button>
                <X />
              </button>
            </Popup.Close>
          </header>

          <Notifications>
            <li>
              Teste.
              <Link to="/trash">Acesse</Link>
            </li>
          </Notifications>
        </Content>
      </Popup.Portal>
    </Popup.Root>
  )
}
