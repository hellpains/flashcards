import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Selected, Unselected } from '@/assets'
import { Typography } from '@/components/ui'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  label?: string
  onCheckedChange?: (checked: boolean) => void
  position?: 'left' | 'right'
} & Omit<ComponentPropsWithoutRef<typeof RadixCheckbox.Root>, 'checked' | 'onCheckedChange'>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  (props, ref) => {
    const {
      checked,
      className,
      disabled,
      label,
      onCheckedChange,
      position = 'right',
      ...rest
    } = props

    return (
      <Typography
        as={'label'}
        className={`${s.container} ${disabled ? s.disabled : ''} ${className}`}
        variant={'body2'}
      >
        {position === 'left' && label}
        <RadixCheckbox.Root
          checked={checked}
          className={s.root}
          disabled={disabled}
          onCheckedChange={onCheckedChange}
          ref={ref}
          {...rest}
        >
          <RadixCheckbox.Indicator className={s.indicator} forceMount>
            <div className={s.hover}></div>
            <div className={s.icon}>{checked ? <Selected /> : <Unselected />}</div>
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>

        {position === 'right' && label}
      </Typography>
    )
  }
)
