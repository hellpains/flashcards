import { useState } from 'react'

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function App() {
  const [value, setValue] = useState('')

  return (
    <Card style={{ margin: '100px', padding: '30px', width: '600px' }}>
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
    </Card>
  )
}
