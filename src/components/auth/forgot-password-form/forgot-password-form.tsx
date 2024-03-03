import { useForm } from 'react-hook-form'

import { Button, Card, ControlledInput, Typography } from '@/components/ui'

import s from './forgot-password-form.module.scss'

type Props = {
  onSubmit: (data: any) => void
}
export const ForgotPasswordForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm()

  const handleSubmitted = handleSubmit(onSubmit)

  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'h1'}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmitted}>
        <div className={s.input}>
          <ControlledInput control={control} label={'Email'} name={'email'} />
        </div>
        <Typography className={s.text1} variant={'body2'}>
          Enter your email address and we will send you further instructions{' '}
        </Typography>
        <Button fullWidth>Send Instructions</Button>
      </form>
      <Typography className={s.text2} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Typography as={'a'} className={s.link} href={'#'} variant={'body2'}>
        Try logging in
      </Typography>
    </Card>
  )
}
