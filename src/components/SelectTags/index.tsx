import { ReactNode } from 'react'
import * as Modal from '@radix-ui/react-alert-dialog'
import { MagnifyingGlass, X } from 'phosphor-react'

import { Input } from '../Input'
import { Tag } from '../Tag'
import { Button } from '../Button'

import { Content, MarkedTags, Overlay } from './styles'

interface SelectTagsProps {
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

          <main>
            <Input placeholder="Digite a tag" icon={MagnifyingGlass} />

            <MarkedTags>
              <Tag>
                Lembranças
                <button>
                  <X />
                </button>
              </Tag>
            </MarkedTags>
          </main>

          <footer>
            <Modal.Action asChild>
              <Button variant="ghost">Selecionar</Button>
            </Modal.Action>
          </footer>
        </Content>
      </Modal.Portal>
    </Modal.Root>
  )
}
