import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowIosUp } from '@/assets'
import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

type SelectProps = {
  options: { title: any; value: any }[]
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>
export const Select = forwardRef<ElementRef<typeof RadixSelect.Trigger>, SelectProps>(
  ({ options, value, ...rest }, ref) => {
    return (
      <RadixSelect.Root {...rest}>
        <RadixSelect.Trigger className={`${s.trigger}`} ref={ref}>
          <div>{value}</div>
          <div className={s.arrowIcon}>
            <ArrowIosUp />
          </div>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className={clsx(s.content)} position={'popper'} side={'bottom'}>
            {options.map(o => {
              return (
                <RadixSelect.Item
                  className={clsx(s.item, value == o.value ? s.activeItem : '')}
                  key={o.value}
                  value={String(o.value)}
                >
                  {o.title}
                </RadixSelect.Item>
              )
            })}
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    )
  }
)
