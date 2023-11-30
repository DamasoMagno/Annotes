import styled, { css } from 'styled-components'

export type ButtonVariants = 'outline' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariants
}

export const ButtonContainer = styled.button<ButtonProps>`
  height: 3rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  border: 0;
  color: ${(props) => props.theme.colors['--gray-300']};
  background-color: ${(props) => props.theme.colors['--green-500']};
  transition: filter 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }

  ${(props) => {
    switch (props.variant) {
      case 'outline':
        return css`
          background-color: transparent;
          border: 1px solid ${(props) => props.theme.colors['--green-500']};
        `
      case 'ghost':
        return css`
          background-color: transparent;
        `
    }
  }}
`
