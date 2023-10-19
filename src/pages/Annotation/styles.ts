import * as Toolbar from '@radix-ui/react-toolbar'
import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: 743px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  textarea {
    background-color: transparent;
    border: 0;
    font-weight: bold;
    color: white;
    font-size: 1.5rem;
    resize: none;
    outline: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .text {
    margin-top: 1rem;
    outline: 0;
    color: white;
    border: 0;
  }
`

export const ToolbarRoot = styled(Toolbar.Root)`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ToolbarGroup = styled(Toolbar.ToggleGroup)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;

  button {
    background-color: transparent;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 0.5rem;
    border-radius: 8px;
    transform: background 0.25s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
`
