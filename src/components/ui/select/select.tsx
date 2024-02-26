import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowIosUp } from '@/assets'
import * as RadixSelect from '@radix-ui/react-select'

import s from './select.module.scss'

const Select = RadixSelect.Root

Select.displayName = 'Select'

const SelectTrigger = forwardRef<
  ElementRef<typeof RadixSelect.Trigger>,
  ComponentPropsWithoutRef<typeof RadixSelect.Trigger>
>(({ children, className, ...rest }, ref) => {
  return (
    <RadixSelect.Trigger className={`${s.trigger} ${className}`} ref={ref} {...rest}>
      <div>{children}</div>
      <div className={s.arrowIcon}>
        <ArrowIosUp />
      </div>
    </RadixSelect.Trigger>
  )
})

SelectTrigger.displayName = RadixSelect.Trigger.displayName

const SelectContent = forwardRef<
  ElementRef<typeof RadixSelect.Content>,
  ComponentPropsWithoutRef<typeof RadixSelect.Content>
>(({ className, ...rest }, ref) => {
  return (
    <RadixSelect.Portal>
      <RadixSelect.Content className={`${s.content} ${className}`} ref={ref} {...rest} />
    </RadixSelect.Portal>
  )
})

SelectContent.displayName = RadixSelect.Content.displayName

const SelectItem = forwardRef<
  ElementRef<typeof RadixSelect.Item>,
  ComponentPropsWithoutRef<typeof RadixSelect.Item>
>(({ className, ...rest }, ref) => {
  return <RadixSelect.Item className={`${s.item} ${className}`} ref={ref} {...rest} />
})

SelectItem.displayName = RadixSelect.Item.displayName

export { Select, SelectContent, SelectItem, SelectTrigger }
