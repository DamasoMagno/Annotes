import * as Modal from '@radix-ui/react-alert-dialog'
import styled, { css } from 'styled-components'

export type SelectTagVariants = 'ghost' | 'icon'

interface SelectTagProps {
  variant?: SelectTagVariants
}

export const Overlay = styled(Modal.Overlay)`
  background-color: rgba(10, 10, 10, 0.75);
  position: fixed;
  inset: 0;
`

export const Content = styled(Modal.Content)`
  background: rgba(10, 10, 10, 1);
  height: 90%;
  width: 90%;
  max-width: 450px;
  border-radius: 8px;
  padding: 1rem 1.5rem;
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

export const TagList = styled.div`
  margin-top: 1rem;
  height: 100%;
  max-height: 400px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Tag = styled.div`
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border-radius: 0.25rem;
  background: rgba(39, 39, 42, 0.15);
  color: #e2e8f0;
  transition: filter 0.25s;

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    color: white;

    &.tag-name {
      padding: 1rem;
      width: 100%;
      height: 100%;
      text-align: left;
    }

    &.trash {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 8px;

      &:hover {
        background-color: rgba(255, 255, 255, 0.25);
      }
    }
  }
`

export const MarkedTags = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  flex-direction: column;
  gap: 0.5rem;

  .current-tags {
    max-height: 150px;
    overflow-y: scroll;
    width: 100%;
    border-radius: 1rem;
    border: 1px solid rgba(10, 10, 10, 0.25);
    background: rgba(0, 0, 0, 0.5);
    list-style: none;
    margin-top: 1rem;
    padding: 1rem 0.5rem;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.3rem;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      color: ${(props) => props.theme.colors['--gray-300']};
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      border-radius: 1.5rem;
      background: rgba(51, 51, 51, 0.25);

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;

      button {
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        color: white;
        cursor: pointer;
      }
    }
  }

  > button {
    background-color: transparent;
    border: 0;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    height: 3rem;
    padding: 0 1rem;
  }
`
