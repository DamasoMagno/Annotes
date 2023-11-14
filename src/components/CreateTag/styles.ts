import * as Modal from '@radix-ui/react-alert-dialog'
import styled, { css } from 'styled-components'

export const Overlay = styled(Modal.Overlay)`
  background-color: rgba(255, 255, 255, 0.1);
  position: fixed;
  inset: 0;
  z-index: 5;
`

export const Content = styled(Modal.Content)`
  background: ${(props) => props.theme.colors['--zinc-950']};
  position: fixed;
  height: 50%;
  width: 90%;
  max-width: 450px;
  top: 50%;
  right: 50%;
  border-radius: 24px;
  transform: translate(50%, -50%);
  padding: 1.5rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .tags {
    height: 50%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      p {
        font-size: 0.75rem;
        color: white;
        font-weight: 500;
      }
    }

    ul {
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.25rem;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border-radius: 5rem;
        border: 1px solid rgba(255, 255, 255, 0.25);
        color: white;
        padding: 0.5rem 1rem;
        font-size: 0.875rem;

        button {
          background-color: transparent;
          border: 0;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
        }
      }
    }
  }

  footer {
    margin-top: auto;
    align-self: flex-end;
    display: flex;
    gap: 2rem;

    button {
      background-color: transparent;
      border: 0;
      font-size: 1rem;
      color: white;
      cursor: pointer;
      border-radius: 4px;
      height: 2rem;
      padding: 0 1rem;

      &:last-child {
        background-color: #005b41;
      }
    }
  }
`

export type SelectTagVariants = 'ghost'

interface SelectTagProps {
  variant?: SelectTagVariants
}

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

  svg {
    font-size: 1rem;
  }

  @media (max-width: 728px) {
    span {
      display: none;
    }
  }
`
