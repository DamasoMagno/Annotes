import * as Modal from '@radix-ui/react-alert-dialog'
import styled from 'styled-components'

export type SelectTagVariants = 'ghost' | 'icon'

export const Overlay = styled(Modal.Overlay)`
  background-color: rgba(10, 10, 10, 0.5);
  position: fixed;
  inset: 0;
`

export const Content = styled(Modal.Content)`
  background: ${(props) => props.theme.colors['--zinc-900']};
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
    margin-bottom: 1.5rem;

    h3 {
      color: ${(props) => props.theme.colors['--white']};
      font-size: 1.25rem;
    }

    button {
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      width: 1.25rem;
      height: 1.25rem;
      font-size: 1rem;
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
