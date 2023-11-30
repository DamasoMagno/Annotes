import { MagnifyingGlass, Tag as TagIcon } from 'phosphor-react'

import { Annotation } from '../../components/Annotation'
import { Input } from '../../components/Input'
import { SelectTags } from '../../components/SelectTags'
import { Tag } from '../../components/Tag'

import { AnnotationsList, Container, OpenTagsModal } from './styles'

export function Annotations() {
  return (
    <Container>
      <div className="filters">
        <Input placeholder="Buscar anotações" icon={MagnifyingGlass} />

        <SelectTags>
          <OpenTagsModal>
            <span>Tags</span>
            <TagIcon />
          </OpenTagsModal>
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
