import { ReactNode } from 'react'

import { Container } from './styles'

interface TagProps {
  children: ReactNode
}

export const Tag = ({ children }: TagProps) => {
  return <Container>{children}</Container>
}
