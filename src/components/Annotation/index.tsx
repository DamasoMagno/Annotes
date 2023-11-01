import { ComponentProps, ForwardRefExoticComponent } from 'react'
import { ArrowCounterClockwise, TrashSimple } from 'phosphor-react'
import { LinkProps } from 'react-router-dom'

import { Container, Default, Trashed } from './styles'

export type AnnotationType = 'default' | 'trashed'

interface AnnotationProps
  extends ComponentProps<ForwardRefExoticComponent<LinkProps>> {
  type?: AnnotationType
}

export function Annotation({ type = 'default', ...props }: AnnotationProps) {
  return (
    <Container>
      {type === 'default' ? (
        <Default {...props}>
          <header>
            <strong>Lorem ipsum</strong>
            <span>há 5min</span>
          </header>

          <p>
            Lorem ipsum dolor sit amet consectetur. Sem ante ultrices odio dui
            viverra. Non bibendum amet mattis turpis sit semper nibh sit
          </p>
        </Default>
      ) : (
        <Trashed>
          <header>
            <strong>Lorem ipsum</strong>
          </header>

          <p>
            Lorem ipsum dolor sit amet consectetur. Sem ante ultrices odio dui
            viverra. Non bibendum amet mattis turpis sit semper nibh sit
          </p>
        </Trashed>
      )}

      <footer>
        {type === 'trashed' ? (
          <>
            <span>Remoção em 3 dias</span>

            <div className="actions">
              <button>
                <ArrowCounterClockwise />
              </button>

              <button>
                <TrashSimple />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="tags">
              <span>#lorem</span>
            </div>

            <button>
              <TrashSimple />
            </button>
          </>
        )}
      </footer>
    </Container>
  )
}
