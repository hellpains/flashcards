import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './page.module.scss'
type PageProps = ComponentPropsWithoutRef<'div'>

export const Page = ({ className, ...rest }: PageProps) => {
  return <div className={clsx(s.page, className)} {...rest} />
}
