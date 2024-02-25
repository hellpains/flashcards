import { useState } from 'react'

import { Select, SelectContent, SelectItem, SelectPortal, SelectTrigger } from '@/components/ui'

export function App() {
  const [value, setValue] = useState('select2')

  const options = [
    {
      title: 'Select 1',
      value: 'select1',
    },
    { title: 'Select 2', value: 'select2' },
    { title: 'Select 3', value: 'select3' },
    { title: 'Select 4', value: 'select4' },
    { title: 'Select 5', value: 'select5' },
  ]
  const selectedValue = options.find(o => o.value === value)

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
      <Select onValueChange={setValue} value={value}>
        <SelectTrigger
          style={{ boxSizing: 'border-box', height: '36', minWidth: '210px', padding: '5px 10px' }}
        >
          {selectedValue?.title}
        </SelectTrigger>
        <SelectPortal>
          <SelectContent
            position={'popper'}
            side={'bottom'}
            style={{ boxSizing: 'border-box', minWidth: '210px' }}
          >
            {options.map(o => {
              return (
                <SelectItem
                  key={o.value}
                  style={{
                    height: '36',
                    padding: '5px 10px',
                  }}
                  value={o.value}
                >
                  {o.title}
                </SelectItem>
              )
            })}
          </SelectContent>
        </SelectPortal>
      </Select>
    </div>
  )
}
