import { Root, Fallback } from '@radix-ui/react-avatar'

import { Image } from './styles'

interface IAvatarProps {
  src?: string
  alt?: string
}

export function Avatar({ src = '', alt = '' }: IAvatarProps) {
  return (
    <Root>
      <Image src={src} alt={alt} />
      <Fallback delayMs={350}>DM</Fallback>
    </Root>
  )
}
