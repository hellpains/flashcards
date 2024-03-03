import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './dropdown-menu.module.scss'

const DropdownMenu = RadixDropdownMenu.Root

const DropdownMenuTrigger = RadixDropdownMenu.Trigger

const DropdownMenuContent = forwardRef<
  ElementRef<typeof RadixDropdownMenu.Content>,
  ComponentPropsWithoutRef<typeof RadixDropdownMenu.Content>
>(({ alignOffset = 0, children, className, sideOffset = 14, ...rest }, ref) => {
  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        align={'end'}
        alignOffset={alignOffset}
        className={clsx(s.content, className)}
        ref={ref}
        sideOffset={sideOffset}
        {...rest}
      >
        <RadixDropdownMenu.Arrow asChild>
          <div className={s.triangle} />
        </RadixDropdownMenu.Arrow>
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  )
})

DropdownMenuContent.displayName = RadixDropdownMenu.Content.displayName

const DropdownMenuItem = forwardRef<
  ElementRef<typeof RadixDropdownMenu.Item>,
  ComponentPropsWithoutRef<typeof RadixDropdownMenu.Item>
>(({ className, ...rest }, ref) => {
  return <RadixDropdownMenu.Item className={clsx(s.item, className)} ref={ref} {...rest} />
})

DropdownMenuItem.displayName = RadixDropdownMenu.Item.displayName

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof RadixDropdownMenu.Separator>,
  ComponentPropsWithoutRef<typeof RadixDropdownMenu.Separator>
>(({ className, ...rest }, ref) => {
  return (
    <RadixDropdownMenu.Separator className={clsx(s.separator, className)} ref={ref} {...rest} />
  )
})

DropdownMenuSeparator.displayName = RadixDropdownMenu.Separator.displayName
export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
}
