import styled, { css } from 'styled-components'

export type ButtonVariants = 'outline' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariants
}

export const ButtonContainer = styled.button<ButtonProps>`
  padding: 1rem;
  height: 3rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: filter 0.25s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }

  &:has(span) span {
    flex: 1;
  }

  ${(props) => {
    switch (props.variant) {
      case 'outline':
        return css`
          background-color: transparent;
          border: 1px solid #005b41;
          color: #005b41;
        `
      case 'ghost':
        return css`
          background-color: transparent;
          border: 0;
          color: #ffff;
          transition: background 0.25s;

          &:hover {
            background: rgba(255, 255, 255, 0.07);
          }
        `
      default:
        return css`
          color: white;
          border: 0;
          background-color: #005b41;
        `
    }
  }}
`