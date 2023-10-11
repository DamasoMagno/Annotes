import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'

import { Container, Content } from './styles'

export function Dashboard() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)

  function handleToggleSidebar() {
    setSideBarIsOpen((state) => !state)
  }

  return (
    <Container>
      <Sidebar
        sidebarIsOpen={sideBarIsOpen}
        onCloseSidebar={handleToggleSidebar}
      />

      <Content>
        <Header onOpenSideBar={handleToggleSidebar} />

        <div className="content">
          <Outlet />
        </div>
      </Content>
    </Container>
  )
}
