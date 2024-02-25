import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixAvatar from '@radix-ui/react-avatar'
import clsx from 'clsx'

import s from './avatar.module.scss'

type AvatarProps = {
  className?: string
} & ComponentPropsWithoutRef<typeof RadixAvatar.Root>
export const Avatar = forwardRef<ElementRef<typeof RadixAvatar.Root>, AvatarProps>((props, ref) => {
  const { className, ...rest } = props

  return <RadixAvatar.Root className={clsx(s.root, className)} ref={ref} {...rest} />
})
Avatar.displayName = 'Avatar'

type AvatarImageProps = ComponentPropsWithoutRef<typeof RadixAvatar.Image>
export const AvatarImage = forwardRef<ElementRef<typeof RadixAvatar.Image>, AvatarImageProps>(
  (props, ref) => {
    const { className, ...rest } = props

    return <RadixAvatar.Image className={clsx(s.image, className)} ref={ref} {...rest} />
  }
)
AvatarImage.displayName = 'AvatarImage'

type AvatarFallbackProps = ComponentPropsWithoutRef<typeof RadixAvatar.Fallback>
export const AvatarFallback = forwardRef<
  ElementRef<typeof RadixAvatar.Fallback>,
  AvatarFallbackProps
>((props, ref) => {
  const { className, ...rest } = props

  return <RadixAvatar.Fallback className={clsx(s.fallback, className)} ref={ref} {...rest} />
})
AvatarFallback.displayName = 'AvatarFallback'
