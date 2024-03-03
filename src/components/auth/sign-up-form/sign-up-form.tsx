import { useForm } from 'react-hook-form'

import { Button, Card, ControlledInput, Typography } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up-form.module.scss'

type Props = {
  onSubmit: (data: any) => void
}

const schema = z
  .object({
    confirm: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
  })
  .refine(data => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  })

type FormValues = z.infer<typeof schema>

export const SignUpForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      confirm: '',
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  const handleSubmitted = handleSubmit(onSubmit)

  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'h1'}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmitted}>
        <div className={s.inputs}>
          <ControlledInput control={control} label={'Email'} name={'email'} />
          <ControlledInput control={control} label={'Password'} name={'password'} password />
          <ControlledInput control={control} label={'Confirm Password'} name={'confirm'} password />
        </div>
        <Button fullWidth>Sign Up</Button>
      </form>

      <Typography className={s.text} variant={'body2'}>
        Already have an account?
      </Typography>
      <Typography as={'a'} className={s.link} href={'#'} variant={'body2'}>
        Sign In
      </Typography>
    </Card>
  )
}
