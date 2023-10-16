import { ComponentProps, ComponentType, forwardRef, useId } from 'react'
import { IconProps } from 'phosphor-react'

import { Container } from './styles'

interface InputProps extends ComponentProps<'input'> {
  label?: string
  icon?: ComponentType<IconProps>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon: Icon, ...props }, refs) => {
    const inputId = useId()

    return (
      <Container>
        {label && <label htmlFor={inputId}>{label}</label>}

        <div className="field">
          <input id={inputId} {...props} ref={refs} />
          {Icon && <Icon />}
        </div>
      </Container>
    )
  },
)
