import { CaretLeft, List, Plus } from 'phosphor-react'
import { Link, useLocation } from 'react-router-dom'

import { Avatar } from './components/Avatar'
import { ShareAnnotation } from './components/ShareAnnotation'
import { Notification } from './components/Notification'

import { HeaderContainer, Options } from './styles'

interface HeaderProps {
  onOpenSideBar(): void
}

export function Header({ onOpenSideBar }: HeaderProps) {
  const { pathname } = useLocation()

  const pages = {
    '/': {
      url: '/annote',
      navigateTitle: 'Nova anotação',
      navigateIcon: <Plus />,
    },
    '/annotation': {
      url: '/',
      navigateTitle: 'Anotações',
      navigateIcon: <CaretLeft />,
    },
  }

  const annotesPage = pathname === '/annote'

  const { url, navigateIcon, navigateTitle } = annotesPage
    ? pages['/annotation']
    : pages['/']

  return (
    <HeaderContainer>
      <Link to={url}>
        {navigateIcon}
        <span>{navigateTitle}</span>
      </Link>

      <Options>
        <div>
          {annotesPage && <ShareAnnotation />}
          <Notification />
          <button onClick={onOpenSideBar} className="menu">
            <List />
          </button>
        </div>

        <Avatar />
      </Options>
    </HeaderContainer>
  )
}
