import {
  TextBolder,
  TextItalic,
  Tag as TagIcon,
  TextUnderline,
} from 'phosphor-react'
import { Editor } from '@tiptap/react'

import { Button } from '../../../../components/Button'
import { SelectTags } from '../../../../components/SelectTags'

import { Options, ToolbarRoot } from './styles'
import { Tag } from '../../../../components/Tag'

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
        <Button
          variant="ghost"
          onClick={() => annotation?.chain().focus().toggleUnderline().run()}
          active={annotation?.isActive('italic')}
        >
          <TextUnderline />
        </Button>
      </Options>

      <Options type="single">
        <SelectTags>
          <Button variant="ghost">
            <TagIcon />
          </Button>
        </SelectTags>

        <ul className="tags">
          <Tag>Hello</Tag>
          <Tag>Hello</Tag>
          <Tag>+2</Tag>
        </ul>
      </Options>
    </ToolbarRoot>
  )
}
