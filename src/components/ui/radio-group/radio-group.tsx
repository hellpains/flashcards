import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Checked, Unchecked } from '@/assets'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type RadioGroupProps = {
  options: { title: string; value: string }[]
} & ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>

export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>(
  (props, ref) => {
    const { options, value, ...rest } = props

    return (
      <RadixRadioGroup.Root className={s.root} ref={ref} value={value} {...rest}>
        {options.map(o => {
          return (
            <RadixRadioGroup.Item className={s.item} value={o.value}>
              <RadixRadioGroup.Indicator className={s.indicator} forceMount>
                <div className={s.hover}></div>
                <div className={s.icon}> {o.value === value ? <Checked /> : <Unchecked />}</div>
              </RadixRadioGroup.Indicator>
              {o.title}
            </RadixRadioGroup.Item>
          )
        })}
      </RadixRadioGroup.Root>
    )
  }
)
