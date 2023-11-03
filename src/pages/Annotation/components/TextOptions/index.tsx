import { TextBolder, TextItalic } from 'phosphor-react'
import { Button } from '../../../../components/Button'
import { Editor } from '@tiptap/react'

import { SelectTags } from '../../../../components/SelectTags'
import { CreateTag } from '../../components/CreateTag'
import { Options, ToolbarRoot } from './styles'

interface TextOptionsProps {
  annotation: Editor | null
}

export function TextOptions({ annotation }: TextOptionsProps) {
  return (
    <ToolbarRoot>
      <Options type="multiple" aria-label="Text Formatting">
        <Button
          variant="ghost"
          onClick={() => annotation?.chain().focus().toggleBold().run()}
          active={annotation?.isActive('bold')}
        >
          <TextBolder />
        </Button>
        <Button
          variant="ghost"
          onClick={() => annotation?.chain().focus().toggleItalic().run()}
          active={annotation?.isActive('italic')}
        >
          <TextItalic />
        </Button>
      </Options>

      <Options type="single">
        <CreateTag />
        <SelectTags variant="ghost" position="right" />
      </Options>
    </ToolbarRoot>
  )
}
