import { ArrowCounterClockwise, TrashSimple } from 'phosphor-react'

import { AnnotationContainer } from './styles'

interface AnnotationProps {
  type?: 'default' | 'trashed'
}

export function Annotation({ type = 'default' }: AnnotationProps) {
  return (
    <AnnotationContainer>
      <header>
        <strong>Lorem ipsum</strong>

        {type === 'default' && <span>há 5min</span>}
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur. Sem ante ultrices odio dui
        viverra. Non bibendum amet mattis turpis sit semper nibh sit
      </p>

      <footer>
        {type === 'trashed' ? (
          <>
            <span>Remoção em 3 dias</span>
            <button>
              <ArrowCounterClockwise />
            </button>
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
    </AnnotationContainer>
  )
}
