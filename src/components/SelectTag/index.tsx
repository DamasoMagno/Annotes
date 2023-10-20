import { Tag } from 'phosphor-react'

import { SelectTag, Tags } from './styles'

interface SelectTagProps {
  type?: 'default' | 'ghost'
  position: 'left' | 'right'
}

export function SelectTags({ type = 'default', position }: SelectTagProps) {
  const options = [
    { name: 'Escola', id: 1 },
    { name: 'Técnico', id: 2 },
    { name: 'Técnico', id: 3 },
    { name: 'Técnico', id: 4 },
    { name: 'Técnico', id: 5 },
    { name: 'Técnico', id: 6 },
  ]

  return (
    <>
      <SelectTag type={type}>
        <Tag />
        <p>Tags</p>

        <Tags
          position={position}
          placeholder="Buscar tags"
          options={options}
          displayValue="name"
          showCheckbox
          hideSelectedList
        />
      </SelectTag>
    </>
  )
}
