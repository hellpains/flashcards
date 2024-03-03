import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Edit, Logout } from '@/assets'
import { Avatar, Button, Card, ControlledInput, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './personal-information.module.scss'

const schema = z.object({
  nickname: z.string().min(3),
})

type FormValues = z.infer<typeof schema>

type Props = {
  avatar: string
  email: string
  nickname: string
  onSubmit: (data: FormValues) => void
}

export const PersonalInformation = ({ avatar, email, nickname, onSubmit }: Props) => {
  const [isEditNickname, setIsEditNickname] = useState(false)

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      nickname,
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  const handleSubmitted = (data: FormValues) => {
    onSubmit(data)
    setIsEditNickname(false)
  }

  return (
    <Card className={s.container}>
      <Typography className={s.title} variant={'h1'}>
        Personal Information
      </Typography>

      <div className={s.avatar}>
        <Avatar image={avatar} size={96} />
      </div>

      {!isEditNickname && (
        <>
          <div className={s.nickname}>
            <Typography variant={'h2'}>{nickname}</Typography>
            <Button onClick={() => setIsEditNickname(true)} variant={'icon'}>
              <Edit />
            </Button>
          </div>
          <Typography className={s.email} variant={'body2'}>
            {email}
          </Typography>

          <Button className={s.logout} onClick={() => {}} variant={'secondary'}>
            <Logout />
            Logout
          </Button>
        </>
      )}
      {isEditNickname && (
        <div className={s.editableNickname}>
          <form onSubmit={handleSubmit(handleSubmitted)}>
            <div className={s.input}>
              <ControlledInput control={control} label={'Nickname'} name={'nickname'} />
            </div>

            <Button fullWidth>Save Changes</Button>
          </form>
        </div>
      )}
    </Card>
  )
}
