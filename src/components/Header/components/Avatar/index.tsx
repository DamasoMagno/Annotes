import { Root, PrimitiveImageProps } from '@radix-ui/react-avatar'

import { Image, NoImage } from './styles'

interface AvatarProps extends PrimitiveImageProps {}

export function Avatar({ alt, ...props }: AvatarProps) {
  return (
    <Root>
      <Image alt={alt} {...props} />
      <NoImage delayMs={350}>DM</NoImage>
    </Root>
  )
}
