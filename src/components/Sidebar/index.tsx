import { NavLink, useLocation } from 'react-router-dom'
import { SignOut, X } from 'phosphor-react'

import { Button } from '../Button'

import { SidebarContainer } from './styles'
import { useEffect } from 'react'

interface SidebarProps {
  sidebarIsOpen: boolean
  onCloseSidebar: () => void
}

export function Sidebar({ sidebarIsOpen, onCloseSidebar }: SidebarProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    onCloseSidebar()
  }, [pathname])

  return (
    <SidebarContainer open={sidebarIsOpen}>
      <header>
        <h1>Annotes</h1>
        <button onClick={onCloseSidebar}>
          <X />
        </button>
      </header>

      <nav>
        <NavLink to="/">Anotações</NavLink>
        <NavLink to="/trash">Lixeira</NavLink>
      </nav>

      <Button variant="ghost">
        <SignOut />
        <span>Sair</span>
      </Button>
    </SidebarContainer>
  )
}
