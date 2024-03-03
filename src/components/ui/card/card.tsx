import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, forwardRef } from 'react'

import { ButtonPolymorph } from '@/components/ui'

import s from './card.module.scss'

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
  className?: string
} & ComponentPropsWithoutRef<T>
export const CardPolymorph = <T extends ElementType = 'div'>(props: CardProps<T>, ref: any) => {
  const { as: Component = 'div', className, ...rest } = props

  return <Component className={`${s.card} ${className}`} ref={ref} {...rest} />
}

export const Card = forwardRef(CardPolymorph) as <T extends ElementType = 'div'>(
  props: CardProps<T> &
    Omit<
      ComponentPropsWithoutRef<T>,
      keyof CardProps<T> & {
        ref?: ForwardedRef<ElementRef<T>>
      }
    >
) => ReturnType<typeof ButtonPolymorph>
