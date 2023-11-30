import { EditorContent } from '@tiptap/react'
import { useAnnotation } from '../../hooks/useEditor'

import { TextOptions } from './components/FormatAnnotation'
import { Container } from './styles'

export function Annotation() {
  const { annotation } = useAnnotation()

  return (
    <Container>
      <TextOptions annotation={annotation} />
      <EditorContent editor={annotation} className="editor" />
    </Container>
  )
}
