import { useState } from 'react'

import { Slider } from '@/components/ui'
import { Meta, type StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {
    const [value, setValue] = useState([30, 80])

    return <Slider onValueChange={setValue} value={value} {...args} />
  },
}
