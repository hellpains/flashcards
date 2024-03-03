import { Header } from '@/layout/header'

import { SignIn } from './components/auth'

export function App() {
  return (
    <div>
      <Header email={'rustam2004sadulaev@mail.ru'} isLoggedIn nickname={'hellpains'} />
      <div
        style={{
          height: '600px',
          margin: '10px auto',
          // padding: '200px',
          width: '500px',
        }}
      >
        <SignIn onSubmit={(data: any) => console.log(data)} />
      </div>
    </div>
  )
}
