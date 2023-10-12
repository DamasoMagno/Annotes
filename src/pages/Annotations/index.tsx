import { MagnifyingGlass } from 'phosphor-react'

import { Annotation } from '../../components/Annotation'
import { Input } from '../../components/Input'

import { AnnotationsList, Container, Tags } from './styles'
import { SelectTag } from './components/SelectTag'

export function Annotations() {
  return (
    <Container>
      <div className="filters">
        <Input placeholder="Buscar anotações" icon={MagnifyingGlass} />

        <Tags>
          <SelectTag />

          <div className="separator" />

          <div className="tags">
            <span>escola</span>
            <span>+2</span>
          </div>
        </Tags>
      </div>

      <AnnotationsList>
        <div className="annotations">
          <Annotation to="/" />
        </div>
      </AnnotationsList>
    </Container>
  )
}
