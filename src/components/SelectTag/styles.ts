import { styled } from 'styled-components'
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

export const Tags = styled(Multiselect)`
  position: absolute;
  z-index: 999999999;
  left: 0;
  display: none;
  bottom: -10px;
  transform: translateY(100%);
  width: 100%;
  min-width: 200px;
  background: #18181b;
  border: 0;
  outline: 0;
  border-radius: 8px;

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

    ul {
      border: none;

      .highlightOption {
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.15);
      }
    }
  }
`
