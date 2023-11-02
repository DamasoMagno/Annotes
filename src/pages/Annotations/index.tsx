import { MagnifyingGlass } from 'phosphor-react'

import { Annotation } from '../../components/Annotation'
import { Input } from '../../components/Input'
import { SelectTags } from '../../components/SelectTags'

import { AnnotationsList, Container } from './styles'

export function Annotations() {
  return (
    <Container>
      <div className="filters">
        <Input placeholder="Buscar anotações" icon={MagnifyingGlass} />
        <SelectTags position="left" />
      </div>

      <AnnotationsList>
        <Annotation to="/annote" />
      </AnnotationsList>
    </Container>
  )
}
