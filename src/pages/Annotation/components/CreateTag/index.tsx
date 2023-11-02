import { useState, MouseEvent } from 'react'
import * as Modal from '@radix-ui/react-alert-dialog'
import { Plus, X } from 'phosphor-react'

import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'

import { Content, Overlay } from './styles'

export function CreateTag() {
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState(['Escolar'])

  const handleRemoveTagFromTags = (tag: string): void => {
    setTags((tags) => {
      return tags.filter((tagName) => tagName !== tag)
    })
  }

  const handleAddTagToTags = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()

    if (!tag) return

    setTags((tags) => [...tags, tag])
    setTag('')
  }

  return (
    <Modal.Root>
      <Modal.Trigger asChild>
        <Button variant="ghost" title="Nova tag">
          <Plus />
        </Button>
      </Modal.Trigger>

      <Modal.Portal>
        <Overlay />

        <Content>
          <Input
            placeholder="Digite a tag"
            onChange={(e) => setTag(e.target.value)}
            value={tag}
          />

          <div className="tags">
            {tags.length > 0 ? (
              <ul>
                {tags.map((tag) => (
                  <li key={tag}>
                    {tag}
                    <button onClick={() => handleRemoveTagFromTags(tag)}>
                      <X />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <p>Nenhuma tag cadastrada</p>
              </div>
            )}
          </div>

          <footer>
            <Modal.Cancel>Fechar</Modal.Cancel>
            <Modal.Action onClick={handleAddTagToTags}>Cadastrar</Modal.Action>
          </footer>
        </Content>
      </Modal.Portal>
    </Modal.Root>
  )
}
