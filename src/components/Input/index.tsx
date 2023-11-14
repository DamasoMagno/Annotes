import { ComponentProps, ComponentType, forwardRef } from 'react'
import { IconProps } from 'phosphor-react'

import { Container } from './styles'

interface InputProps extends ComponentProps<'input'> {
  icon?: ComponentType<IconProps>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon: Icon, ...props }, refs) => {
    return (
      <Container>
        <input {...props} ref={refs} />
        {Icon && <Icon />}
      </Container>
    )
  },
)
