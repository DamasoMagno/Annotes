import {
  TextBolder,
  TextItalic,
  Tag as IconTag,
  TextUnderline,
} from 'phosphor-react'
import { Editor } from '@tiptap/react'
import { Button } from '@radix-ui/react-toolbar'

import { SelectTags } from '../../../../components/SelectTags'
import { Tag } from '../../../../components/Tag'

import { Options, ToolbarRoot, Formatter } from './styles'

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
        <Formatter
          value="Bold"
          onClick={() => annotation?.chain().focus().toggleBold().run()}
        >
          <TextBolder />
        </Formatter>
        <Formatter
          value="Italic"
          onClick={() => annotation?.chain().focus().toggleItalic().run()}
        >
          <TextItalic />
        </Formatter>
        <Formatter
          value="Underline"
          onClick={() => annotation?.chain().focus().toggleUnderline().run()}
        >
          <TextUnderline />
        </Formatter>
      </Options>

      <Options type="single">
        <SelectTags>
          <Button className="tag">
            <IconTag />
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
