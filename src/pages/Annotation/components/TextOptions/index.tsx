import { TextBolder, TextItalic } from 'phosphor-react'
import { Editor } from '@tiptap/react'

import { Button } from '../../../../components/Button'

import { Options, ToolbarRoot } from './styles'
import { SelectTags } from '../../../../components/SelectTags'

interface TextOptionsProps {
  annotation: Editor | null
}

export function TextOptions({ annotation }: TextOptionsProps) {
  return (
    <ToolbarRoot>
      <Options
        type="multiple"
        aria-label="Text Formatting"
        className="formatText"
      >
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
        <SelectTags variant="ghost" />
      </Options>
    </ToolbarRoot>
  )
}