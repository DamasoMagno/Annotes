import { css, styled } from 'styled-components'
import Multiselect from 'multiselect-react-dropdown'

interface SelectTagProps {
  type: 'default' | 'ghost'
}

export const SelectTag = styled.button<SelectTagProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border: 0;
  border-radius: 8px;
  height: 3rem;
  padding: 1rem;
  color: ${(props) => props.theme.colors['--gray-300']};
  cursor: pointer;
  background-color: ${(props) =>
    props.type === 'default'
      ? props.theme.colors['--zinc-950']
      : 'transparent'};

  svg {
    font-size: 1rem;
    min-width: 1rem;
    min-height: 1rem;
  }

  &:focus-within div {
    display: block;
  }
`

interface TagsProps {
  position: 'left' | 'right'
}

export const Tags = styled(Multiselect)<TagsProps>`
  position: absolute;
  display: none;
  bottom: -10px;
  z-index: 9999;
  transform: translateY(100%);
  width: 100%;
  min-width: 200px;
  background: #18181b;
  border: 0;
  outline: 0;
  border-radius: 8px;

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
    }

    button {
      border: 1px solid red;
    }
  }

  .optionListContainer {
    background-color: #18181b;
    border-radius: 8px;
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

        &:hover {
          background-color: rgba(255, 255, 255, 0.15);
        }
      }

      .highlightOption {
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
  }
`
