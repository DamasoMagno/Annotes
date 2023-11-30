import { useEditor } from '@tiptap/react'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Document from '@tiptap/extension-document'

const CustomDocument = Document.extend({
  content: 'heading block*',
})

let timer: string | number | NodeJS.Timeout | undefined

export function useAnnotation() {
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
    onUpdate: ({ editor }) => {
      const { content } = editor.getJSON()
      clearTimeout(timer)

      timer = setTimeout(() => {
        console.log(content)

        localStorage.setItem('@content', JSON.stringify(content))
      }, 1000)
    },
  })

  return {
    annotation,
  }
}
