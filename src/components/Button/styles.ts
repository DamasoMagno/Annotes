import styled, { css } from 'styled-components'

export type ButtonVariants = 'outline'

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

  ${(props) => {
    switch (props.variant) {
      case 'outline':
        return css`
          background-color: transparent;
          border: 1px solid #005b41;
          color: #005b41;
        `
      default:
        return css`
          color: white;
          border: 0;
          background-color: #005b41;
        `
    }
  }}

  &:hover {
    filter: brightness(0.9);
  }

  &:has(span) span {
    flex: 1;
  }
`
