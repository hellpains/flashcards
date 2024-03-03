import { useForm } from 'react-hook-form'

import { Card, ControlledCheckbox, ControlledInput, Typography } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in-form.module.scss'

import { Button } from '../../ui/button'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(30),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof schema>

type Props = {
  onSubmit: (date: FormValues) => void
}

export const SignIn = (props: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  const handleFormSubmit = handleSubmit(props.onSubmit)

  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'h1'}>
        Sign In
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <div className={s.inputs}>
          <ControlledInput control={control} label={'Email'} name={'email'} />
          <ControlledInput control={control} label={'Password'} name={'password'} password />
        </div>
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Remember Me'}
          name={'rememberMe'}
        />
        <Typography as={'a'} className={s.linkToForgot} href={'#'} variant={'body2'}>
          Forgot Password?
        </Typography>
        <Button className={s.button} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography className={s.text} variant={'body2'}>
        Dont have an account?
      </Typography>
      <Typography as={'a'} className={s.linkToSignUp} href={'#'} variant={'body2'}>
        Sign Up
      </Typography>
    </Card>
  )
}
