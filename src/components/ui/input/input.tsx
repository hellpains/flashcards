import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Close, Eye, EyeOff, Search } from '@/assets'
import { Button, Typography } from '@/components/ui'

import s from './input.module.scss'

export type InputProps = {
  className?: string
  disabled?: boolean
  error?: string
  label?: string
  onValueChange?: (value: string) => void
  password?: boolean
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  const {
    className,
    disabled,
    error,
    label,
    onChange,
    onValueChange,
    password,
    search,
    value,
    ...rest
  } = props
  const [passwordVisible, setPasswordVisible] = useState(false)

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange?.(e.target.value)
  }

  return (
    <div className={`${s.container} ${disabled ? s.disabled : ''}`}>
      <Typography as={'label'} className={s.label} variant={'body2'}>
        {label}
      </Typography>
      <div className={s.inputWrapper}>
        {search && (
          <Button className={s.searchButton} variant={'icon'}>
            {search ? <Search /> : ''}
          </Button>
        )}
        <input
          className={`${s.input} ${className} ${value && search && s.close}  ${
            password ? s.password : ''
          } ${search ? s.search : ''} ${error ? s.error : ''}`}
          disabled={disabled}
          ref={ref}
          type={password ? inputType(passwordVisible) : 'text'}
          {...rest}
          onChange={onHandleChange}
          value={value}
        />
        {search && value && (
          <Button className={s.closeButton} onClick={() => onValueChange?.('')} variant={'icon'}>
            <Close />
          </Button>
        )}
        {password && (
          <Button
            className={s.eye}
            onClick={() => {
              setPasswordVisible(prevState => !prevState)
            }}
            variant={'icon'}
          >
            {password && passwordVisible ? <EyeOff /> : <Eye />}
          </Button>
        )}
      </div>
      <Typography as={'label'} className={s.errorText} variant={'caption'}>
        {error}
      </Typography>
    </div>
  )
})

function inputType(passwordVisible: boolean) {
  return passwordVisible ? 'text' : 'password'
}
