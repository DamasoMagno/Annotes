import { MagnifyingGlass } from 'phosphor-react'

import { Annotation } from '../../components/Annotation'
import { Input } from '../../components/Input'

import { AnnotationsList, Container } from './styles'

export function Annote() {
  return (
    <Container>
      <div className="filters">
        <Input placeholder="Buscar anotações" icon={MagnifyingGlass} />
      </div>

      <AnnotationsList>
        <div className="annotations">
          <Annotation to="/" />
        </div>
      </AnnotationsList>
    </Container>
  )
}
