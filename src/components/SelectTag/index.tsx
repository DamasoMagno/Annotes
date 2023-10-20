import { Tag } from 'phosphor-react'

import { SelectTag, Tags } from './styles'

interface SelectTagProps {
  type?: 'default' | 'ghost'
}

export function SelectTags({ type = 'default' }: SelectTagProps) {
  const options = [
    { name: 'Option 1️⃣', id: 1 },
    { name: 'Option 2️⃣', id: 2 },
  ]

  return (
    <SelectTag type={type}>
      <Tag />
      <p>Tags</p>

      <Tags
        placeholder="Buscar tags"
        options={options}
        displayValue="name"
        showCheckbox
        hidePlaceholder
        hideSelectedList
      />
    </SelectTag>
  )
}
