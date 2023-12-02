import * as Popup from '@radix-ui/react-popover'
import { Link } from 'react-router-dom'
import { BellSimple, X } from 'phosphor-react'

import { Content, Notifications, Trigger } from './styles'

export function Notification() {
  return (
    <Popup.Root>
      <Trigger asChild>
        <button title="Notificações">
          <BellSimple />
          <div />
        </button>
      </Trigger>

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
              Teste. <Link to="/trash">Acesse</Link>
            </li>
          </Notifications>
        </Content>
      </Popup.Portal>
    </Popup.Root>
  )
}
