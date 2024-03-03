import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixAvatar from '@radix-ui/react-avatar'
import clsx from 'clsx'

import s from './avatar.module.scss'

type AvatarProps = {
  className?: string
  image?: string
  nickname?: string
  size?: CSSProperties['width']
} & ComponentPropsWithoutRef<typeof RadixAvatar.Root>
export const Avatar = forwardRef<ElementRef<typeof RadixAvatar.Root>, AvatarProps>((props, ref) => {
  const { className, image, nickname, size = '36px', style, ...rest } = props

  return (
    <RadixAvatar.Root
      className={clsx(s.root, className)}
      ref={ref}
      style={{ ...style, height: size, width: size }}
      {...rest}
    >
      <RadixAvatar.Image className={s.image} src={image} />
      <RadixAvatar.Fallback className={s.fallback}>
        {nickname?.[0].toUpperCase()}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
})
Avatar.displayName = RadixAvatar.Root.displayName
