import { Avatar } from '@/components/ui'
import { Meta, type StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    image: 'http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128',
  },
}
