import { MagnifyingGlass } from 'phosphor-react'

import { Annotation } from '../../components/Annotation'
import { Input } from '../../components/Input'

import { AnnotationsList, Container } from './styles'
import { CreateTag } from '../../components/CreateTag'

export function Annotations() {
  return (
    <Container>
      <div className="filters">
        <Input placeholder="Buscar anotações" icon={MagnifyingGlass} />
        <CreateTag />
      </div>

      <ul className="tags">
        <li>lembranças</li>
        <li>+2</li>
      </ul>

      <AnnotationsList>
        <Annotation to="/annote" />
      </AnnotationsList>
    </Container>
  )
}
