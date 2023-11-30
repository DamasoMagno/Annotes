import {
  TextBolder,
  TextItalic,
  Tag as TagIcon,
  TextUnderline,
} from 'phosphor-react'
import { Editor } from '@tiptap/react'

import { Button } from '@radix-ui/react-toolbar'

import { SelectTags } from '../../../../components/SelectTags'
import { Tag } from '../../../../components/Tag'

import { Options, ToolbarRoot } from './styles'

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
        <Button onClick={() => annotation?.chain().focus().toggleBold().run()}>
          <TextBolder />
        </Button>
        <Button
          onClick={() => annotation?.chain().focus().toggleItalic().run()}
        >
          <TextItalic />
        </Button>
        <Button
          onClick={() => annotation?.chain().focus().toggleUnderline().run()}
        >
          <TextUnderline />
        </Button>
      </Options>

      <Options type="single">
        <SelectTags>
          <Button>
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
