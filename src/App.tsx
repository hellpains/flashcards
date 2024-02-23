import { useState } from 'react'

import { Input } from '@/components/ui/input'

export function App() {
  const [value, setValue] = useState('')

  return (
    <div
      style={{
        backgroundColor: '#171717',
        height: '600px',
        margin: '300px',
        padding: '50px',
        width: '600px',
      }}
    >
      <Input
        disabled
        label={'Input1'}
        onValueChange={setValue}
        placeholder={'Input'}
        value={value}
      />
      <Input label={'Input2'} onValueChange={setValue} password value={value} />
      <Input label={'Input3'} onValueChange={setValue} value={value} />
      <Input label={'Input3'} onValueChange={setValue} placeholder={'Input'} search value={value} />
      <Input
        error={'Error!'}
        label={'Input4'}
        onValueChange={setValue}
        placeholder={'Input'}
        search
        value={value}
      />
      <Input label={'Input3'} onValueChange={setValue} value={value} />
    </div>
  )
}
