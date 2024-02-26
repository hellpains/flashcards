import { Logout, Person } from '@/assets'
import {
  Avatar,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Typography,
} from '@/components/ui'

import s from '@/layout/header/header.module.scss'

type UserDropdownProps = {
  email?: string
  nickname?: string
}
export const UserDropdown = ({ email, nickname }: UserDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={s.avatar}>
        <Button variant={'icon'}>
          <div className={s.blur} />
          <Avatar nickname={nickname} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={11}>
        <div className={s.user}>
          <Avatar nickname={nickname} />
          <div className={s.userInfo}>
            <Typography as={'div'} className={s.nickname} variant={'subtitle2'}>
              {nickname}
            </Typography>
            <Typography as={'div'} className={s.email} variant={'caption'}>
              {email}
            </Typography>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Person /> My profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Logout /> Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
