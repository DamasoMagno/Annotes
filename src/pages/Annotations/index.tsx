import { MagnifyingGlass } from 'phosphor-react'

import { Annotation } from '../../components/Annotation'
import { Input } from '../../components/Input'
import { SelectTag } from './components/SelectTag'

import { AnnotationsList, Container } from './styles'

export function Annotations() {
  return (
    <Container>
      <div className="filters">
        <Input placeholder="Buscar anotações" icon={MagnifyingGlass} />

        <SelectTag />
      </div>

      <AnnotationsList>
        <div className="annotations">
          <Annotation to="/annote" />
        </div>
      </AnnotationsList>
    </Container>
  )
}
