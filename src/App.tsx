import { useState } from 'react'

import { Header } from '@/layout/header'

import { Button, Dialog } from './components/ui'

export function App() {
  const [open, setOpen] = useState(false)

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
        <Button onClick={() => setOpen(prevState => !prevState)}>hello</Button>
        <Dialog
          cancelButtonText={'Cancel'}
          confirmButtonText={'Confirm'}
          onOpenChange={setOpen}
          open={open}
          title={'Title'}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolor dolorem
          eligendi iusto pariatur quae, sapiente velit veritatis. Ab autem consequatur dolorem
          libero magnam molestias mollitia nesciunt perspiciatis quisquam repudiandae?
        </Dialog>
      </div>
    </div>
  )
}
