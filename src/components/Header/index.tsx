import { BellSimple, CaretLeft, List, Plus, ShareNetwork } from 'phosphor-react'
import { Link, useLocation } from 'react-router-dom'

import { Avatar } from './Avatar'

import { HeaderContainer, Actions } from './styles'

interface HeaderProps {
  onOpenSideBar(): void
}

export function Header({ onOpenSideBar }: HeaderProps) {
  const { pathname } = useLocation()

  const header = {
    '/': {
      title: 'Nova anotação',
      icon: <Plus />,
      url: '/annote',
    },
    '/trash': {
      title: 'inicio',
      icon: <CaretLeft />,
      url: '/',
    },
    '/annote': {
      title: 'anotações',
      icon: <CaretLeft />,
      url: '/',
    },
  }

  const { icon, title, url } = header[pathname as keyof typeof header]

  return (
    <HeaderContainer>
      <Link to={url}>
        {icon} <span>{title}</span>
      </Link>

      <div className="options">
        <Actions>
          {pathname.includes('/annote') && (
            <button>
              <span>compartilhar</span>
              <ShareNetwork />
            </button>
          )}

          <button className="notification">
            <BellSimple />
            <div />
          </button>

          <button onClick={onOpenSideBar} className="menu">
            <List />
          </button>
        </Actions>

        <Avatar src="https://github.com/DamasoMagno.png" />
      </div>
    </HeaderContainer>
  )
}
