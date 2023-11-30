import * as Modal from '@radix-ui/react-alert-dialog'
import styled, { css } from 'styled-components'

export type SelectTagVariants = 'ghost' | 'icon'

interface SelectTagProps {
  variant?: SelectTagVariants
}

export const Overlay = styled(Modal.Overlay)`
  background-color: rgba(10, 10, 10, 0.5);
  position: fixed;
  inset: 0;
`

export const SelectTag = styled.button<SelectTagProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;
  border-radius: 8px;
  width: 100%;
  height: 3rem;
  padding: 0 1.5rem;
  color: ${(props) => props.theme.colors['--gray-300']};
  cursor: pointer;

  svg {
    font-size: 1rem;
  }

  @media (max-width: 728px) {
    span {
      display: none;
    }
  }

  ${(props) => {
    switch (props.variant) {
      case 'ghost':
        return css`
          background-color: transparent;
        `
      default:
        return css`
          background-color: ${(props) => props.theme.colors['--zinc-950']};
        `
    }
  }}
`

export const Content = styled(Modal.Content)`
  background: ${(props) => props.theme.colors['--zin-900']};
  height: 90%;
  width: 90%;
  max-width: 450px;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    h3 {
      color: white;
      font-size: 1.5rem;
    }

    button {
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      width: 1.25rem;
      height: 1.25rem;
      color: white;
      cursor: pointer;
    }
  }

  footer {
    margin-top: auto;
  }
`

export const MarkedTags = styled.div`
  margin-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;

  li button {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    color: white;
    cursor: pointer;
  }
`
