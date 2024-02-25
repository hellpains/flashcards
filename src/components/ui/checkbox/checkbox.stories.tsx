import { useState } from 'react'

import { Meta, type StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <Checkbox
        checked={checked}
        onCheckedChange={() => setChecked(prevState => !prevState)}
        {...args}
      />
    )
  },
}

export const WithLabel: Story = {
  args: { label: 'Check-box' },
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <Checkbox
        checked={checked}
        onCheckedChange={() => setChecked(prevState => !prevState)}
        {...args}
      />
    )
  },
}

export const LabelLeft: Story = {
  args: { label: 'Check-box', position: 'left' },
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <Checkbox
        checked={checked}
        onCheckedChange={() => setChecked(prevState => !prevState)}
        {...args}
      />
    )
  },
}

export const Disabled: Story = {
  args: { disabled: true, label: 'Check-box' },
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <Checkbox
        checked={checked}
        onCheckedChange={() => setChecked(prevState => !prevState)}
        {...args}
      />
    )
  },
}
