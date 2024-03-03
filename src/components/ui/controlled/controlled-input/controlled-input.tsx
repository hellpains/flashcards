import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components/ui'

type ControlledInputProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<InputProps, 'onValueChange' | 'value'>

export const ControlledInput = <T extends FieldValues>({
  control,
  shouldUnregister,
  ...rest
}: ControlledInputProps<T>) => {
  const {
    field: { onChange, value, ...field },
    fieldState: { error },
  } = useController({
    control,
    disabled: rest.disabled,
    name: rest.name,
    shouldUnregister,
  })

  return (
    <Input {...rest} error={error?.message} {...field} onValueChange={onChange} value={value} />
  )
}
