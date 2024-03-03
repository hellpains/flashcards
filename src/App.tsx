import { CreateNewPasswordForm } from '@/components'
import { Header } from '@/layout/header'

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
        <CreateNewPasswordForm onSubmit={() => {}} />
      </div>
    </div>
  )
}
