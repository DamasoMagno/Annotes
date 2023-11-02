import { ComponentProps, ReactNode } from 'react'

import { ButtonVariants, ButtonContainer } from './styles'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariants
  children: ReactNode
  active?: boolean
}

export function Button({ children, variant, active, ...props }: ButtonProps) {
  return (
    <ButtonContainer
      variant={variant}
      className={active ? 'active' : ''}
      {...props}
    >
      {children}
    </ButtonContainer>
  )
}
