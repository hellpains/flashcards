import { useState } from 'react'

import { Meta, type StoryObj } from '@storybook/react'

import { Select } from './select'

const meta = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onValueChange: () => {},
    options: [],
    value: '123',
  },
  render: args => {
    const [value, setValue] = useState('select2')

    const options = [
      { title: 'Select 1', value: 'select1' },
      { title: 'Select 2', value: 'select2' },
      { title: 'Select 3', value: 'select3' },
      { title: 'Select 4', value: 'select4' },
      { title: 'Select 5', value: 'select5' },
    ]

    return <Select {...args} onValueChange={setValue} options={options} value={String(value)} />
  },
}
export const Disabled: Story = {
  args: {
    onValueChange: () => {},
    options: [],
    value: '123',
  },
  render: args => {
    const [value, setValue] = useState('select2')

    const options = [
      { title: 'Select 1', value: 'select1' },
      { title: 'Select 2', value: 'select2' },
      { title: 'Select 3', value: 'select3' },
      { title: 'Select 4', value: 'select4' },
      { title: 'Select 5', value: 'select5' },
    ]

    return (
      <Select disabled {...args} onValueChange={setValue} options={options} value={String(value)} />
    )
  },
}
