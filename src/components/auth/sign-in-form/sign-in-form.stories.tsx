import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/components'

const meta = {
  component: SignInForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/SignIn',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: () => {},
  },
}
