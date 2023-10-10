import { NavLink } from 'react-router-dom'
import { SidebarContainer } from './styles'
import { Button } from '../Button'
import { SignOut, X } from 'phosphor-react'

interface SidebarProps {
  isOpen: boolean
  setsidebarIsOpen: () => void
}

export function Sidebar({ isOpen, setsidebarIsOpen }: SidebarProps) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <header>
        <h1>Annotes</h1>
        <button onClick={setsidebarIsOpen}>
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
