import { MagnifyingGlass, Tag as TagIcon } from 'phosphor-react'

import { Annotation } from '../../components/Annotation'
import { Input } from '../../components/Input'

import { AnnotationsList, Container } from './styles'
import { SelectTags } from '../../components/SelectTags'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

export function Annotations() {
  return (
    <Container>
      <div className="filters">
        <Input placeholder="Buscar anotações" icon={MagnifyingGlass} />
        <SelectTags>
          <Button variant="icon">
            <span>Tags</span>
            <TagIcon />
          </Button>
        </SelectTags>
      </div>

      <ul className="tags">
        <Tag>Hello</Tag>
        <Tag>Hello</Tag>
        <Tag>+2</Tag>
      </ul>

      <AnnotationsList>
        <Annotation to="/annote" />
      </AnnotationsList>
    </Container>
  )
}
