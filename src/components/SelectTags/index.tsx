import * as Modal from '@radix-ui/react-alert-dialog'
import { MagnifyingGlass, TrashSimple, X } from 'phosphor-react'

import { Input } from '../Input'

import {
  Content,
  MarkedTags,
  TagList,
  Tag,
  Overlay,
  SelectTagVariants,
} from './styles'
import { ReactNode } from 'react'

interface SelectTagsProps {
  variant?: SelectTagVariants
  children: ReactNode
}

export function SelectTags({ children }: SelectTagsProps) {
  return (
    <Modal.Root>
      <Modal.Trigger asChild>{children}</Modal.Trigger>

      <Modal.Portal>
        <Overlay />

        <Content>
          <header>
            <h3>Tags</h3>
            <Modal.Cancel>
              <X />
            </Modal.Cancel>
          </header>

          <Input placeholder="Digite a tag" icon={MagnifyingGlass} />

          <TagList>
            <Tag>
              <button className="tag-name">Escola</button>
              <button className="trash">
                <TrashSimple />
              </button>
            </Tag>
          </TagList>

          <MarkedTags>
            <ul className="current-tags">
              <li>
                lembranças
                <button>
                  <X />
                </button>
              </li>
            </ul>

            <Modal.Action>Selecionar</Modal.Action>
          </MarkedTags>
        </Content>
      </Modal.Portal>
    </Modal.Root>
  )
}
