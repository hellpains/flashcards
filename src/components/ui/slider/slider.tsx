import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './slider.module.scss'

export const Slider = forwardRef<
  ElementRef<typeof RadixSlider.Root>,
  Omit<ComponentPropsWithoutRef<typeof RadixSlider.Root>, 'value'> & {
    value?: (number | undefined)[]
  }
>((props, ref) => {
  const { className, max, onValueChange, value, ...rest } = props

  useEffect(() => {
    if (value?.[1] === undefined || value?.[1] === null) {
      onValueChange?.([value?.[0] ?? 0, max ?? 0])
    }
  })

  return (
    <div className={s.slider}>
      <div className={s.value}>{value?.[0]}</div>
      <RadixSlider.Root
        className={clsx(s.root, className)}
        max={100}
        onValueChange={onValueChange}
        ref={ref}
        step={1}
        value={[value?.[0] ?? 0, value?.[1] ?? 30]}
        {...rest}
      >
        <RadixSlider.Track className={s.track}>
          <RadixSlider.Range className={s.range} />
        </RadixSlider.Track>

        <RadixSlider.Thumb className={s.thumb} />
        <RadixSlider.Thumb className={s.thumb} />
      </RadixSlider.Root>
      <div className={s.value}>{value?.[1]}</div>
    </div>
  )
})
