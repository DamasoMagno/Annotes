import { useState } from 'react'

import { Input } from '../../components/Input'
import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'

import { Container, Content } from './styles'

export function Trash() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)

  return (
    <Container>
      <Sidebar
        isOpen={sideBarIsOpen}
        setsidebarIsOpen={() => setSideBarIsOpen(false)}
      />

      <Content>
        <Header onSideIsOpen={setSideBarIsOpen} />

        <div>
          <Input placeholder="Buscar anotação" />
        </div>

        <main></main>
      </Content>
    </Container>
  )
}
