import { useState } from 'react'

import { Meta, type StoryObj } from '@storybook/react'

import { Select, SelectContent, SelectItem, SelectTrigger } from './select'

const meta = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {
    const [value, setValue] = useState('select2')

    const options = [
      { title: 'Select 1', value: 'select1' },
      { title: 'Select 2', value: 'select2' },
      { title: 'Select 3', value: 'select3' },
      { title: 'Select 4', value: 'select4' },
      { title: 'Select 5', value: 'select5' },
    ]
    const selectedValue = options.find(o => o.value === value)

    return (
      <Select onValueChange={setValue} value={value} {...args}>
        <SelectTrigger
          style={{ boxSizing: 'border-box', height: '36', padding: '5px 10px', width: '210px' }}
        >
          {selectedValue?.title}
        </SelectTrigger>
        <SelectContent
          position={'popper'}
          side={'bottom'}
          style={{ boxSizing: 'border-box', width: '210px' }}
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
      </Select>
    )
  },
}
export const Disabled: Story = {
  args: {},
  render: args => {
    const [value, setValue] = useState('select2')

    const options = [
      { title: 'Select 1', value: 'select1' },
      { title: 'Select 2', value: 'select2' },
      { title: 'Select 3', value: 'select3' },
      { title: 'Select 4', value: 'select4' },
      { title: 'Select 5', value: 'select5' },
    ]
    const selectedValue = options.find(o => o.value === value)

    return (
      <Select disabled onValueChange={setValue} value={value} {...args}>
        <SelectTrigger
          style={{ boxSizing: 'border-box', height: '36', padding: '5px 10px', width: '210px' }}
        >
          {selectedValue?.title}
        </SelectTrigger>
        <SelectContent
          position={'popper'}
          side={'bottom'}
          style={{ boxSizing: 'border-box', width: '210px' }}
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
      </Select>
    )
  },
}
