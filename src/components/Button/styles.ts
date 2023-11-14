import styled, { css } from 'styled-components'

export type ButtonVariants = 'outline' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariants
  active?: boolean
}

export const ButtonContainer = styled.button<ButtonProps>`
  padding: 1rem 1rem;
  height: 3rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: filter 0.25s;
  color: ${(props) => props.theme.colors['--gray-300']};
  border: 0;

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
    const { variant, active } = props

    switch (variant) {
      case 'outline':
        return css`
          background-color: transparent;
          border: 1px solid #005b41;
          color: #005b41;
        `
      case 'ghost':
        return css`
          background-color: ${active
            ? 'rgba(255, 255, 255, 0.07)'
            : 'transparent'};
          transition: background 0.25s;

          &:hover {
            background: rgba(255, 255, 255, 0.07);
          }
        `
      default:
        return css`
          background-color: #005b41;
        `
    }
  }}
`
