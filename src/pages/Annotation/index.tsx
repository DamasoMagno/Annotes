import Placeholder from '@tiptap/extension-placeholder'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { Container } from './styles'
import { Editor } from './components/Editor'

export function Annotation() {
  const annotation = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'Escreva seu titulo'
          }

          return 'Escreva algo'
        },
      }),
    ],
  })

  return (
    <Container>
      <textarea placeholder="Insira um título" />

      <Editor annotation={annotation} />
    </Container>
  )
}
