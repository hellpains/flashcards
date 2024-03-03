import { Header } from '@/layout/header'

import { ForgotPasswordForm, SignUpForm } from './components/auth'

export function App() {
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
        <ForgotPasswordForm
          onSubmit={(data: { email: string; password: string }) =>
            console.log({ email: data.email, password: data.password })
          }
        />
      </div>
    </div>
  )
}
