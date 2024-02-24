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
    placeholder: 'Input',
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

export const Password: Story = {
  args: {
    label: 'Input',
    password: true,
    placeholder: 'Input',
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

export const Search: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    search: true,
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

export const WithError: Story = {
  args: {
    error: 'Error!',
    label: 'Input',
    placeholder: 'Input',
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
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Input',
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
