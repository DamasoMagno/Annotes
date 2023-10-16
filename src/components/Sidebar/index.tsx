import { NavLink } from 'react-router-dom'
import { Note, SignOut, TrashSimple, X } from 'phosphor-react'

import { Button } from '../Button'

import { SidebarContainer } from './styles'

interface SidebarProps {
  sidebarIsOpen: boolean
  onCloseSidebar: () => void
}

export function Sidebar({ sidebarIsOpen, onCloseSidebar }: SidebarProps) {
  return (
    <SidebarContainer open={sidebarIsOpen}>
      <header>
        <h1>Annotes</h1>
        <button onClick={onCloseSidebar}>
          <X />
        </button>
      </header>

      <nav>
        <NavLink to="/">
          <Note /> <span>Anotações</span>
        </NavLink>

        <NavLink to="/trash">
          <TrashSimple /> <span>Lixeira</span>
        </NavLink>
      </nav>

      <Button variant="ghost">
        <SignOut />
        <span>Sair</span>
      </Button>
    </SidebarContainer>
  )
}
