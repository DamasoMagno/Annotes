import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import { useEditor } from '@tiptap/react'

import { Editor } from './components/Editor'

import { Container } from './styles'

export function Annotation() {
  const annotation = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Escreva algo',
      }),
    ],
  })

  annotation?.on('update', (event) => {
    console.log(event.transaction)
  })

  return (
    <Container>
      <textarea placeholder="Insira um título" />

      <Editor annotation={annotation} />
    </Container>
  )
}
