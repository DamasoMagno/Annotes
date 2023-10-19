import * as Popup from '@radix-ui/react-popover'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Content, Notifications } from './styles'
import { X } from 'phosphor-react'

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

            <Popup.Close>
              <X />
            </Popup.Close>
          </header>

          <Notifications>
            <li>
              Teste.
              <Link to="/trash">Acesse</Link>
            </li>
            <li>
              Teste.
              <Link to="/trash">Acesse</Link>
            </li>
            <li>
              Teste.
              <Link to="/trash">Acesse</Link>
            </li>
            <li>
              Teste.
              <Link to="/trash">Acesse</Link>
            </li>
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
