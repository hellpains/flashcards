import type { Meta, StoryObj } from '@storybook/react'

import { SignUpForm } from './sign-up-form'

const meta = {
  component: SignUpForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/SignUpForm',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    onSubmit: () => {},
  },
}
