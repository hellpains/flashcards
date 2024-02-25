import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Selected, Unselected } from '@/assets'
import { Typography } from '@/components/ui'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  label?: string
  position?: 'left' | 'right'
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  (props, ref) => {
    const { disabled, label, position = 'right', ...rest } = props

    return (
      <Typography
        as={'label'}
        className={`${s.container} ${disabled ? s.disabled : ''}`}
        variant={'body2'}
      >
        {position === 'left' && label}
        <RadixCheckbox.Root className={s.root} disabled={disabled} ref={ref} {...rest}>
          <RadixCheckbox.Indicator className={s.indicator} forceMount>
            <div className={s.hover}></div>
            <div className={s.icon}>{rest.checked ? <Selected /> : <Unselected />}</div>
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>

        {position === 'right' && label}
      </Typography>
    )
  }
)
