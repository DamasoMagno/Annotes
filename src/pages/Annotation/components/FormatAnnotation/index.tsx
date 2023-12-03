import {
  TextBolder,
  TextItalic,
  Tag as IconTag,
  TextUnderline,
} from 'phosphor-react'
import { Editor } from '@tiptap/react'
import { ToggleItem } from '@radix-ui/react-toolbar'

import { SelectTags } from '../../../../components/SelectTags'
import { Tag } from '../../../../components/Tag'

import { ToolbarRoot, Button, FormatText, SpecifyTags } from './styles'

interface TextOptionsProps {
  annotation: Editor | null
}

export function TextOptions({ annotation }: TextOptionsProps) {
  return (
    <ToolbarRoot>
      <FormatText type="multiple" aria-label="Text Formatting">
        <Button
          as={ToggleItem}
          value="Bold"
          onClick={() => annotation?.chain().focus().toggleBold().run()}
        >
          <TextBolder />
        </Button>
        <Button
          as={ToggleItem}
          value="Italic"
          onClick={() => annotation?.chain().focus().toggleItalic().run()}
        >
          <TextItalic />
        </Button>
        <Button
          as={ToggleItem}
          value="Underline"
          onClick={() => annotation?.chain().focus().toggleUnderline().run()}
        >
          <TextUnderline />
        </Button>
      </FormatText>

      <SpecifyTags type="single">
        <SelectTags>
          <Button>
            <IconTag />
          </Button>
        </SelectTags>

        <ul className="tags">
          <Tag>Hello</Tag>
          <Tag>Hello</Tag>
          <Tag>+2</Tag>
        </ul>
      </SpecifyTags>
    </ToolbarRoot>
  )
}
