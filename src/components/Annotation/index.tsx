import { ComponentProps, ForwardRefExoticComponent } from 'react'
import { LinkProps } from 'react-router-dom'
import { ArrowCounterClockwise, TrashSimple } from 'phosphor-react'

import { Container, Default, Trashed, Tags } from './styles'

export type AnnotationType = 'default' | 'trashed'

interface AnnotationProps
  extends ComponentProps<ForwardRefExoticComponent<LinkProps>> {
  trashed?: boolean
}

export function Annotation({ trashed = false, ...props }: AnnotationProps) {
  return (
    <Container>
      {!trashed ? (
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

      <Tags>
        {!trashed ? (
          <>
            <div className="tags">
              <span>#lorem</span>
            </div>

            <button>
              <TrashSimple />
            </button>
          </>
        ) : (
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
        )}
      </Tags>
    </Container>
  )
}
