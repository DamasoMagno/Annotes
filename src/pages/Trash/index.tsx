import { TrashSimple } from 'phosphor-react'

import { Annotation } from '../../components/Annotation'

import { AnnotationList, TrashAlert, Container } from './styles'

export function Trash() {
  return (
    <>
      <Container>
        <TrashAlert>
          <div className="message">
            <div>
              <TrashSimple />
            </div>
            <p>Suas anotações serão removidas em até 7 dias</p>
          </div>

          <button>excluir anotações</button>
        </TrashAlert>

        <AnnotationList>
          <Annotation type="trashed" to="/" />
        </AnnotationList>
      </Container>
    </>
  )
}
