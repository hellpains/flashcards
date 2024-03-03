import { useState } from 'react'

import { PersonalInformation } from '@/components'
import { Header } from '@/layout/header'

export function App() {
  const [nickname, setNickname] = useState('hellpains')

  const onSubmit = (data: { nickname: string }) => {
    setNickname(data.nickname)
  }

  return (
    <div>
      <Header email={'rustam2004sadulaev@mail.ru'} isLoggedIn nickname={'hellpains'} />
      <div
        style={{
          height: '600px',
          margin: '10px auto',
          width: '500px',
        }}
      >
        <PersonalInformation
          avatar={'http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128'}
          email={'hellpains@mail.ru'}
          nickname={nickname}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}
