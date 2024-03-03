import { useState } from 'react'

import { Page, PersonalInformation } from '@/components'
import { Header } from '@/layout/header'

export function App() {
  return (
    <div>
      <Header email={'rustam2004sadulaev@mail.ru'} isLoggedIn nickname={'hellpains'} />
    </div>
  )
}
