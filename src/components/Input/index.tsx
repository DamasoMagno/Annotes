import { ComponentProps, ComponentType, forwardRef } from 'react'
import { IconProps } from 'phosphor-react'

import { Container } from './styles'

interface InputProps extends ComponentProps<'input'> {
  label?: string
  icon?: ComponentType<IconProps>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon: Icon, ...props }, refs) => {
    return (
      <Container>
        <label htmlFor={label}>{label}</label>

        <div className="field">
          <input id={label} {...props} ref={refs} />
          {Icon && <Icon />}
        </div>
      </Container>
    )
  },
)
