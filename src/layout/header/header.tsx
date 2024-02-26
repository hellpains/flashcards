import { Logo } from '@/assets'
import { Button } from '@/components/ui'
import { UserDropdown } from '@/layout/header/user-dropdown'

import s from './header.module.scss'

type HeaderProps = {
  email?: string
  isLoggedIn?: boolean
  nickname?: string
}
export const Header = ({ email, isLoggedIn = false, nickname }: HeaderProps) => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <Button className={s.logo} onClick={() => alert('this is link to main page')}>
          <Logo />
          flashcards
        </Button>
        <div className={s.userWrapper}>
          {isLoggedIn && (
            <>
              <Button className={s.nickname} onClick={() => alert('link to profile')}>
                {nickname}
              </Button>
              <UserDropdown email={email} nickname={nickname} />
            </>
          )}
          {!isLoggedIn && (
            <Button onClick={() => alert('link to sign in')} variant={'secondary'}>
              Sign In
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
