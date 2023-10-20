import { MagnifyingGlass } from 'phosphor-react'

import { Annotation } from '../../components/Annotation'
import { Input } from '../../components/Input'

import { AnnotationsList, Container } from './styles'
import { SelectTags } from '../../components/SelectTag'

export function Annotations() {
  return (
    <Container>
      <div className="filters">
        <Input placeholder="Buscar anotações" icon={MagnifyingGlass} />
        <SelectTags position="left" />
      </div>

      <AnnotationsList>
        <div className="annotations">
          <Annotation to="/annote" />
        </div>
      </AnnotationsList>
    </Container>
  )
}
