import { Modal } from '@/components/ui'
import { Header } from '@/layout/header'

export function App() {
  return (
    <div>
      <Header email={'rustam2004sadulaev@mail.ru'} isLoggedIn nickname={'hellpains'} />
      <div
        style={{
          backgroundColor: '#332525',
          height: '600px',
          margin: '100px',
          padding: '200px',
          width: '600px',
        }}
      >
        <Modal>sdfsdf</Modal>
      </div>
    </div>
  )
}
