import { ComponentProps, ReactNode, forwardRef } from 'react'

import { ButtonVariants, ButtonContainer } from './styles'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariants
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, ...props }, ref) => {
    return (
      <ButtonContainer ref={ref} variant={variant} {...props}>
        {children}
      </ButtonContainer>
    )
  },
)
