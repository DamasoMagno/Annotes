import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Plus, TextBolder, TextItalic } from 'phosphor-react'

import { SelectTags } from '../../components/SelectTag'
import { Button } from '../../components/Button'

import { Container, ToolbarGroup, ToolbarRoot } from './styles'

export function Annotation() {
  const annotation = useEditor({
    extensions: [StarterKit],
  })

  return (
    <Container>
      <textarea placeholder="Insira um conteúdo" />

      <div>
        <ToolbarRoot>
          <ToolbarGroup type="multiple" aria-label="Text Formatting">
            <Button
              onClick={() => annotation?.chain().focus().toggleBold().run()}
            >
              <TextBolder />
            </Button>
            <Button
              onClick={() => annotation?.chain().focus().toggleItalic().run()}
            >
              <TextItalic />
            </Button>
          </ToolbarGroup>
          <ToolbarGroup type="single">
            <Button variant="ghost" title="Nova tag">
              <Plus />
            </Button>
            <SelectTags type="ghost" position="right" />
          </ToolbarGroup>
        </ToolbarRoot>

        <EditorContent editor={annotation} value="Awddwa" className="text" />
      </div>
    </Container>
  )
}
