import { List } from 'phosphor-react'
import { HeaderContainer } from './styles'

interface HeaderProps {
  onSideIsOpen(value: boolean): void
}

export function Header({ onSideIsOpen }: HeaderProps) {
  return (
    <HeaderContainer>
      <button onClick={() => onSideIsOpen(true)}>
        <List />
      </button>

      <div>
        <span>Damaso</span>
        <img src="https://github.com/DamasoMagno.png" alt="" />
      </div>
    </HeaderContainer>
  )
}
