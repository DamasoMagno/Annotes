import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { Container } from './styles'

export function Annotation() {
  const annotation = useEditor({
    extensions: [StarterKit],
  })

  return (
    <Container>
      <input placeholder="Insira um conteúdo" />
      <EditorContent editor={annotation} placeholder="Insira o conteudo" />
    </Container>
  )
}
