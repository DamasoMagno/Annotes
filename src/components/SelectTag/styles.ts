import { css, styled } from 'styled-components'
import Multiselect from 'multiselect-react-dropdown'

export type SelectTagVariants = 'ghost'

interface SelectTagProps {
  variant?: SelectTagVariants
}

interface TagsProps {
  position: 'left' | 'right'
}

export const Container = styled.div`
  position: relative;

  &:focus-within div {
    display: block;
  }
`

export const SelectTag = styled.button<SelectTagProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;

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
`

export const Tags = styled(Multiselect)<TagsProps>`
  position: absolute;
  display: none;
  bottom: -5px;
  transform: translateY(100%);
  width: 100%;
  min-width: 200px;
  background: #18181b;
  border: 0;
  outline: 0;
  border-radius: 8px;
  height: 100%;

  ${(props) => {
    return css`
      ${props.position}: 0;
    `
  }}

  @media (min-width: 768px) {
    width: 300px;
  }

  .searchWrapper {
    border: 1px solid transparent;
    padding: 0.5rem 1rem;
    display: flex;

    input {
      color: ${(props) => props.theme.colors['--gray-300']};
      width: 100%;
      flex: 1;
    }
  }

  .optionListContainer {
    background-color: #18181b;
    max-height: 13rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.15);
      border-radius: 10px;
    }

    ul {
      border: none;

      li {
        border-radius: 8px;
        color: ${(props) => props.theme.colors['--gray-300']};
      }

      .highlightOption,
      li:hover {
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
  }
`
