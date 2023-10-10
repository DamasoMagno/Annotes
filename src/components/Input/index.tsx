import { ComponentProps, forwardRef } from 'react'

import { InputContainer } from './styles'

interface InputProps extends ComponentProps<'input'> {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, refs) => {
    return (
      <InputContainer>
        <label htmlFor={label}>{label}</label>
        <input id={label} {...props} ref={refs} />
      </InputContainer>
    )
  },
)
