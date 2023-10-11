import { TrashSimple } from 'phosphor-react'

import { Annotation } from '../../components/Annotation'

import { Annotations, TrashAlert, Container } from './styles'

export function Trash() {
  return (
    <Container>
      <TrashAlert>
        <div>
          <div className="icon">
            <TrashSimple />
          </div>
          Suas anotações serão removidas em até 7 dias
        </div>

        <button>excluir anotações</button>
      </TrashAlert>

      <Annotations>
        <Annotation type="trashed" />
      </Annotations>
    </Container>
  )
}
