import { useState } from 'react'
import { TrashSimple } from 'phosphor-react'

import { Sidebar } from '../../components/Sidebar'
import { Header } from '../../components/Header'
import { Annotation } from '../../components/Annotation'

import {
  Annotations,
  Container,
  Content,
  TrashAlert,
  TrashContainer,
} from './styles'

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

        <TrashContainer>
          <TrashAlert>
            <div>
              <div className="icon">
                <TrashSimple />
              </div>
              Suas anotações serão removidas em até 7 dias
            </div>
            <button>Excluir anotações</button>
          </TrashAlert>

          <Annotations>
            <Annotation type="trashed" />
            <Annotation type="trashed" />
            <Annotation type="trashed" />
            <Annotation type="trashed" />
            <Annotation type="trashed" />
            <Annotation type="trashed" />
          </Annotations>
        </TrashContainer>
      </Content>
    </Container>
  )
}
