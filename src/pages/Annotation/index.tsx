import * as Toolbar from '@radix-ui/react-toolbar'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { TextBolder, TextItalic } from 'phosphor-react'

import { Container, ToolbarGroup, ToolbarRoot } from './styles'
import { SelectTags } from '../../components/SelectTag'

export function Annotation() {
  const annotation = useEditor({
    extensions: [StarterKit],
  })

  return (
    <Container>
      <textarea placeholder="Insira um conteúdo" />

      <div>
        <ToolbarRoot>
          <ToolbarGroup type="single">
            <SelectTags type="ghost" />
          </ToolbarGroup>
          <ToolbarGroup type="multiple" aria-label="Text Formatting">
            <Toolbar.Button
              onClick={() => annotation?.chain().focus().toggleBold().run()}
            >
              <TextBolder />
            </Toolbar.Button>
            <Toolbar.Button
              onClick={() => annotation?.chain().focus().toggleItalic().run()}
            >
              <TextItalic />
            </Toolbar.Button>
          </ToolbarGroup>
        </ToolbarRoot>

        <EditorContent editor={annotation} value="Awddwa" className="text" />
      </div>
    </Container>
  )
}
