import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import { useEditor } from '@tiptap/react'
import { ref, set } from 'firebase/database'

import { database } from '../../services/firebase'

import { Editor } from './components/Editor'

import { Container } from './styles'

const CustomDocument = Document.extend({
  content: 'heading block*',
})

export function Annotation() {
  const annotation = useEditor({
    extensions: [
      CustomDocument,
      StarterKit.configure({
        document: false,
      }),
      Placeholder.configure({
        placeholder: 'Can you add some further context?',
      }),
    ],
    onUpdate: async ({ editor }) => {
      const path = ref(database, 'users/1')
      set(path, {
        content: editor.getHTML(),
      })
    },
  })

  return (
    <Container>
      <Editor annotation={annotation} />
    </Container>
  )
}
