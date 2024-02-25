import { useState } from 'react'

import { RadioGroup } from './components/ui'

export function App() {
  const [value, setValue] = useState('radio3')

  return (
    <div
      style={{
        backgroundColor: '#171717',
        height: '600px',
        margin: '100px',
        padding: '50px',
        width: '600px',
      }}
    >
      <RadioGroup
        disabled
        onValueChange={setValue}
        options={[
          { title: 'Radio 1', value: 'radio1' },
          { title: 'Radio 2', value: 'radio2' },
          { title: 'Radio 3', value: 'radio3' },
          { title: 'Radio 4', value: 'radio4' },
        ]}
        value={value}
      />
      {value}
    </div>
  )
}
