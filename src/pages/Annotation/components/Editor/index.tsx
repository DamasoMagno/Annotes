import { EditorContent, Editor as EditorType } from '@tiptap/react'
import { TextOptions } from '../TextOptions'
import { Container } from './styles'

interface EditorProps {
  annotation: EditorType | null
}

export function Editor({ annotation }: EditorProps) {
  return (
    <Container>
      <TextOptions annotation={annotation} />
      <EditorContent editor={annotation} className="editor" />
    </Container>
  )
}
