import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { ArrowIosUp } from '@/assets'
import * as RadixSelect from '@radix-ui/react-select'

import s from './select.module.scss'

type SelectProps = ComponentPropsWithoutRef<typeof RadixSelect.Root>
const Select = forwardRef<ElementRef<typeof RadixSelect.Root>, SelectProps>(props => {
  const { ...rest } = props

  return <RadixSelect.Root {...rest}></RadixSelect.Root>
})

Select.displayName = 'Select'

type SelectTriggerProps = { children: ReactNode; className?: string } & Omit<
  ComponentPropsWithoutRef<typeof RadixSelect.Trigger>,
  'children'
>
const SelectTrigger = forwardRef<ElementRef<typeof RadixSelect.Trigger>, SelectTriggerProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <RadixSelect.Trigger className={`${s.trigger} ${className}`} ref={ref} {...rest}>
        <div>{children}</div>
        <div className={s.arrowIcon}>
          <ArrowIosUp />
        </div>
      </RadixSelect.Trigger>
    )
  }
)

SelectTrigger.displayName = 'SelectTrigger'

const SelectPortal = forwardRef<ElementRef<typeof RadixSelect.Portal>, SelectContentProps>(
  ({ className, ...rest }) => {
    return <RadixSelect.Portal {...rest} />
  }
)

SelectPortal.displayName = 'SelectPortal'

type SelectContentProps = { className?: string } & ComponentPropsWithoutRef<
  typeof RadixSelect.Content
>
const SelectContent = forwardRef<ElementRef<typeof RadixSelect.Content>, SelectContentProps>(
  ({ className, ...rest }, ref) => {
    return <RadixSelect.Content className={`${s.content} ${className}`} ref={ref} {...rest} />
  }
)

SelectContent.displayName = 'SelectContent'

type SelectItemProps = { className?: string } & ComponentPropsWithoutRef<typeof RadixSelect.Item>
const SelectItem = forwardRef<ElementRef<typeof RadixSelect.Item>, SelectItemProps>(
  ({ className, ...rest }, ref) => {
    return <RadixSelect.Item className={`${s.item} ${className}`} ref={ref} {...rest} />
  }
)

SelectItem.displayName = 'SelectItem'

export { Select, SelectContent, SelectItem, SelectPortal, SelectTrigger }
