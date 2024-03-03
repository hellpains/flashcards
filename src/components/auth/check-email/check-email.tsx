import { CheckEmailSvg } from '@/assets'
import { Button, Card, Typography } from '@/components/ui'

import s from './check-email.module.scss'

export const CheckEmail = () => {
  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'h1'}>
        Check Email
      </Typography>
      <div className={s.svg}>
        <CheckEmailSvg />
      </div>
      <Typography className={s.text} variant={'body2'}>
        We've sent an Email with instructions to example@gmail.com
      </Typography>
      <Button as={'a'} fullWidth href={'#'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
