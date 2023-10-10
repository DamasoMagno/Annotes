import { useState } from 'react'

import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'

import { Container, Content } from './styles'

export function Annotations() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)

  return (
    <Container>
      <Sidebar
        isOpen={sideBarIsOpen}
        setsidebarIsOpen={() => setSideBarIsOpen(false)}
      />

      <Content>
        <Header onSideIsOpen={setSideBarIsOpen} />
      </Content>
    </Container>
  )
}
