import { useForm } from 'react-hook-form'

import { Button, Card, ControlledInput, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './create-new-password-form.module.scss'
const schema = z.object({
  password: z.string().min(3),
})

type FormValues = z.infer<typeof schema>

type Props = {
  onSubmit: (data: FormValues) => void
}

export const CreateNewPasswordForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  const handleSubmitted = handleSubmit(onSubmit)

  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'h1'}>
        Create new password
      </Typography>
      <form onSubmit={handleSubmitted}>
        <div className={s.input}>
          <ControlledInput control={control} label={'Password'} name={'password'} password />
        </div>
        <Typography className={s.text} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button fullWidth>Create New Password</Button>
      </form>
    </Card>
  )
}
