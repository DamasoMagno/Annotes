import { BellSimple, List } from 'phosphor-react'
import * as Avatar from '@radix-ui/react-avatar'

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
        <div className="notification">
          <BellSimple />
          <div />
        </div>

        <Avatar.Root>
          <Avatar.Image src="https://github.com/DamasoMagno.png" alt="" />
          <Avatar.Fallback delayMs={350}>DM</Avatar.Fallback>
        </Avatar.Root>
      </div>
    </HeaderContainer>
  )
}
