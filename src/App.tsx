import { useState } from 'react'

import { Header } from '@/layout/header'

import { Slider } from './components/ui'

export function App() {
  const [value, setValue] = useState([30, 80])

  return (
    <div>
      <Header email={'rustam2004sadulaev@mail.ru'} isLoggedIn nickname={'hellpains'} />
      <div
        style={{
          // backgroundColor: '#332525',
          height: '600px',
          margin: '100px',
          padding: '200px',
          width: '600px',
        }}
      >
        <Slider disabled onValueChange={setValue} value={value} />
      </div>
    </div>
  )
}
