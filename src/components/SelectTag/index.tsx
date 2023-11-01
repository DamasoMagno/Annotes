import { Tag } from 'phosphor-react'

import { Container, SelectTagVariants, Tags, SelectTag } from './styles'

interface SelectTagProps {
  variants?: SelectTagVariants
  position: 'left' | 'right'
}

export function SelectTags({ variants, position }: SelectTagProps) {
  const options = [
    { name: 'Escola', id: 1 },
    { name: 'Técnico', id: 2 },
  ]

  return (
    <Container>
      <SelectTag variant={variants}>
        <Tag />
        <span>Tags</span>
      </SelectTag>

      <Tags
        position={position}
        placeholder="Buscar tags"
        options={options}
        displayValue="name"
        showCheckbox
        hideSelectedList
      />
    </Container>
  )
}
