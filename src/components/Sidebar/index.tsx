import { NavLink } from 'react-router-dom'
import { SignOut, X } from 'phosphor-react'

import { Button } from '../Button'

import { SidebarContainer } from './styles'

interface SidebarProps {
  sidebarIsOpen: boolean
  onCloseSidebar: () => void
}

export function Sidebar({ sidebarIsOpen, onCloseSidebar }: SidebarProps) {
  return (
    <SidebarContainer isOpen={sidebarIsOpen}>
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
