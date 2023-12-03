import { MagnifyingGlass, Tag as TagIcon } from 'phosphor-react'

import { Annotation } from '../../components/Annotation'
import { Input } from '../../components/Input'
import { SelectTags } from '../../components/SelectTags'
import { Tag } from '../../components/Tag'

import { AnnotationsList, Container, ShowTagsModal } from './styles'

export function Annotations() {
  return (
    <Container>
      <div className="filters">
        <Input placeholder="Buscar anotações" icon={MagnifyingGlass} />

        <SelectTags>
          <ShowTagsModal>
            <span>Tags</span>
            <TagIcon />
          </ShowTagsModal>
        </SelectTags>
      </div>

      <ul className="tags">
        <Tag>Hello</Tag>
        <Tag>Hello</Tag>
        <Tag>+2</Tag>
      </ul>

      <AnnotationsList>
        <Annotation to="/annotation" />
      </AnnotationsList>
    </Container>
  )
}
