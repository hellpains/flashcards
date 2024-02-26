import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Close } from '@/assets'
import { Button, Typography } from '@/components/ui'
import * as RadixDialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

export type ModalProps = {
  children?: ReactNode
  onOpenChange?: (open: boolean) => void
  open?: boolean
  title?: string
} & Omit<ComponentPropsWithoutRef<typeof RadixDialog.Root>, 'onOpenChange' | 'open'>
export const Modal = ({ children, title, ...rest }: ModalProps) => {
  return (
    <RadixDialog.Root {...rest}>
      <RadixDialog.Trigger className={s.trigger}>trigger</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={s.overlay} />
        <RadixDialog.Content className={s.content}>
          <div className={s.header}>
            <RadixDialog.Title className={s.title}>
              <Typography variant={'h3'}>{title}</Typography>
            </RadixDialog.Title>
            <RadixDialog.Close asChild>
              <Button className={s.buttonClose}>
                <Close />
              </Button>
            </RadixDialog.Close>
          </div>
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
