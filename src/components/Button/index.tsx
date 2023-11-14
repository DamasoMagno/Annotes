import { ComponentProps, ReactNode, forwardRef } from 'react'

import { ButtonVariants, ButtonContainer } from './styles'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariants
  active?: boolean
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, active, ...props }, ref) => {
    return (
      <ButtonContainer
        ref={ref}
        variant={variant}
        className={active ? 'active' : ''}
        {...props}
      >
        {children}
      </ButtonContainer>
    )
  },
)
