import { ComponentProps, ReactNode } from 'react'

import { ButtonVariants, ButtonContainer } from './styles'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariants
  children: ReactNode
}

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...props}>
      {children}
    </ButtonContainer>
  )
}
