import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui'

type ControlledRadioGroupProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<RadioGroupProps, 'onValueChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  shouldUnregister,
  ...rest
}: ControlledRadioGroupProps<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    disabled: rest.disabled,
    name: rest.name,
    shouldUnregister,
  })

  return <RadioGroup {...rest} {...field} onValueChange={onChange} value={value} />
}
