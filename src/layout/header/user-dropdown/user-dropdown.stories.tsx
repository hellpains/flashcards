import { Meta, type StoryObj } from '@storybook/react'

import { UserDropdown } from '.'

const meta = {
  argTypes: {},
  component: UserDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/UserDropdown',
} satisfies Meta<typeof UserDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    email: 'rustam2004sadulaev@mail.ru',
    nickname: 'hellpains',
  },
}
