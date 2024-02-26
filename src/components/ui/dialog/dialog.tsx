import { Button, Modal, ModalProps } from '@/components/ui'

import s from './dialog.module.scss'

type DialogProps = {
  cancelButtonText?: string
  confirmButtonText?: string
  onCancelButtonClick?: () => void
  onConfirmButtonClick?: () => void
} & ModalProps
export const Dialog = ({
  cancelButtonText,
  children,
  confirmButtonText,
  onCancelButtonClick,
  onConfirmButtonClick,
  onOpenChange,
  open,
  ...rest
}: DialogProps) => {
  const handleCancel = () => {
    onOpenChange?.(false)
  }
  const handleConfirm = () => {
    onOpenChange?.(false)
  }

  return (
    <Modal onOpenChange={onOpenChange} open={open} {...rest}>
      {children}

      <div className={s.buttons}>
        <div className={s.cancelButton}>
          <Button onClick={handleCancel} variant={'secondary'}>
            {cancelButtonText}
          </Button>
        </div>
        <div className={s.Confirmbutton}>
          <Button onClick={handleConfirm}>{confirmButtonText}</Button>
        </div>
      </div>
    </Modal>
  )
}
