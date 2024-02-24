import { useState } from 'react'

import { Meta, type StoryObj } from '@storybook/react'

import { Input } from './input'

const meta = {
  argTypes: {},
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input',
  },
  render: args => {
    const [value, setValue] = useState('')

    return (
      <>
        <Input onValueChange={setValue} value={value} {...args} />
      </>
    )
  },
}
