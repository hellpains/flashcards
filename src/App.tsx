import { useState } from 'react'

import { Checkbox } from './components/ui'

export function App() {
  const [checked, setChecked] = useState(false)

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
      <Checkbox
        checked={checked}
        label={'Check-box'}
        onCheckedChange={() => setChecked(prevState => !prevState)}
      />
    </div>
  )
}
