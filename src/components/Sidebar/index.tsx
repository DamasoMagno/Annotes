import { NavLink, useNavigate } from 'react-router-dom'
import { X } from 'phosphor-react'

import { Button } from '../Button'

import { SidebarContainer } from './styles'

interface SidebarProps {
  sidebarIsOpen: boolean
  onCloseSidebar: () => void
}

export function Sidebar({ sidebarIsOpen, onCloseSidebar }: SidebarProps) {
  const navigate = useNavigate()

  const logout = async () => {
    navigate('/login')
  }

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

      <Button variant="ghost" onClick={logout}>
        <span>Sair</span>
      </Button>
    </SidebarContainer>
  )
}
