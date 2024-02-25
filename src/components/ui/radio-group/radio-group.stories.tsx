import { useState } from 'react'

import { Meta, type StoryObj } from '@storybook/react'

import { RadioGroup } from './radio-group'

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { title: 'RadioGroup', value: 'radio1' },
      { title: 'RadioGroup', value: 'radio2' },
      { title: 'RadioGroup', value: 'radio3' },
      { title: 'RadioGroup', value: 'radio4' },
      { title: 'RadioGroup', value: 'radio5' },
    ],
  },
  render: args => {
    const [value, setValue] = useState('radio2')

    return <RadioGroup onValueChange={setValue} value={value} {...args} />
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { title: 'RadioGroup', value: 'radio1' },
      { title: 'RadioGroup', value: 'radio2' },
      { title: 'RadioGroup', value: 'radio3' },
      { title: 'RadioGroup', value: 'radio4' },
      { title: 'RadioGroup', value: 'radio5' },
    ],
  },
  render: args => {
    const [value, setValue] = useState('radio3')

    return <RadioGroup onValueChange={setValue} value={value} {...args} />
  },
}
