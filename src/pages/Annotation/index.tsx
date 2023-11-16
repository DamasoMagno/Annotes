import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Document from '@tiptap/extension-document'

import { useEditor, EditorContent } from '@tiptap/react'

// import { ref, set } from 'firebase/database'
// import { database } from '../../services/firebase'

import { Container } from './styles'
import { TextOptions } from './components/TextOptions'

const CustomDocument = Document.extend({
  content: 'heading block*',
})

export function Annotation() {
  const annotation = useEditor({
    extensions: [
      CustomDocument,
      Underline,
      Typography,
      StarterKit.configure({
        document: false,
      }),
      Placeholder.configure({
        emptyEditorClass: 'is-editor-empty',
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'Qual o titulo ?'
          }

          return 'O que você deseja escrever ?'
        },
      }),
    ],
    // onUpdate: async ({ editor }) => {
    //   const path = ref(database, 'users/1')
    //   set(path, {
    //     content: editor.getHTML(),
    //   })
    // },
  })

  return (
    <Container>
      <TextOptions annotation={annotation} />
      <EditorContent editor={annotation} className="editor" />
    </Container>
  )
}
