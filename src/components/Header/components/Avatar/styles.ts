import styled from 'styled-components'
import * as Avatar from '@radix-ui/react-avatar'

export const Image = styled(Avatar.Image)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`

export const NoImage = styled(Avatar.Fallback)`
  background-color: ${(props) => props.theme.colors['--neutral-850']};
  color: ${(props) => props.theme.colors['--gray-300']};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
