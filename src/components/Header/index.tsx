import { BellSimple, List, ShareNetwork } from 'phosphor-react'

import { Avatar } from './Avatar'
import { HeaderContainer } from './styles'
import { Link } from 'react-router-dom'

interface HeaderProps {
  onOpenSideBar(): void
  configs: {
    title: string
    icon: JSX.Element
    url: string
  }
}

export function Header({ configs, onOpenSideBar }: HeaderProps) {
  return (
    <HeaderContainer>
      <Link to={configs.url}>
        {configs.icon}
        {configs.title}
      </Link>

      <div className="actions">
        {configs.url.includes('/annote') && (
          <button>
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
        <Avatar src="https://github.com/DamasoMagno.png" />
      </div>
    </HeaderContainer>
  )
}
