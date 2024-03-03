import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { PersonalInformation } from '@/components'

const meta = {
  component: PersonalInformation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    avatar: '',
    email: '',
    nickname: '',
    onSubmit: () => {},
  },
  render: (...args) => {
    const [nickname, setNickname] = useState('hellains')

    const onSubmit = (data: { nickname: string }) => {
      setNickname(data.nickname)
    }

    return (
      <PersonalInformation
        {...args}
        avatar={'http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128'}
        email={'hellpains@mail.ru'}
        nickname={nickname}
        onSubmit={onSubmit}
      />
    )
  },
}
