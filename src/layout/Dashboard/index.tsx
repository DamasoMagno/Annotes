import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ArrowLeft, Plus } from 'phosphor-react'

import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'

import { Container, Content } from './styles'

export function Dashboard() {
  const { pathname } = useLocation()
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)

  function handleToggleSidebar() {
    setSideBarIsOpen((state) => !state)
  }

  const home = pathname === '/'

  const headerInfo = {
    title: home ? 'Nova anotação' : 'anotações',
    icon: home ? <Plus /> : <ArrowLeft />,
    url: home ? '/' : '/annote/123',
  }

  return (
    <Container>
      <Sidebar
        sidebarIsOpen={sideBarIsOpen}
        onCloseSidebar={handleToggleSidebar}
      />

      <Content>
        <Header onOpenSideBar={handleToggleSidebar} configs={headerInfo} />

        <div className="content">
          <Outlet />
        </div>
      </Content>
    </Container>
  )
}
