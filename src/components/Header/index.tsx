import { List } from 'phosphor-react'
import { HeaderContainer } from './styles'

interface HeaderProps {
  onOpenSideBar(): void
}

export function Header({ onOpenSideBar }: HeaderProps) {
  return (
    <HeaderContainer>
      <button onClick={onOpenSideBar}>
        <List />
      </button>

      <div>
        <span>Damaso</span>
        <img src="https://github.com/DamasoMagno.png" alt="" />
      </div>
    </HeaderContainer>
  )
}
