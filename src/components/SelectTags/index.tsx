import { Tag } from 'phosphor-react'

import { SelectTagVariants, SelectTag } from './styles'

interface SelectTagProps {
  variant?: SelectTagVariants
}

export function SelectTags({ variant }: SelectTagProps) {
  return (
    <SelectTag variant={variant}>
      <span>Tags</span>
      <Tag />
    </SelectTag>
  )
}

// ;<Tags
//   placeholder="Buscar tags"
//   options={options}
//   displayValue="name"
//   showCheckbox
//   hideSelectedList
// />
