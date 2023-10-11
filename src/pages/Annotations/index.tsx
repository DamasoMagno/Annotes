import { Annotation } from '../../components/Annotation'

import { AnnotationsList, Container } from './styles'

export function Annotations() {
  return (
    <Container>
      <AnnotationsList>
        <Annotation />
        <Annotation />
        <Annotation />
        <Annotation />
        <Annotation />
        <Annotation />
      </AnnotationsList>
    </Container>
  )
}
