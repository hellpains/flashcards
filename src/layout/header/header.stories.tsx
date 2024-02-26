import { Meta, type StoryObj } from '@storybook/react'

import { Header } from '.'

const meta = {
  argTypes: {},
  component: Header,

  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    email: 'rustam2004sadulaev@mail.ru',
    isLoggedIn: true,
    nickname: 'hellpains',
  },
}

export const NotLoggedIn: Story = {
  args: {
    email: 'rustam2004sadulaev@mail.ru',
    isLoggedIn: false,
    nickname: 'hellpains',
  },
}
