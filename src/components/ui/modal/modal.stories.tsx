import { Modal } from '@/components/ui'
import { Meta, type StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '18px 24px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio dolore ex fuga
        hic, labore nisi nulla odio odit omnis, pariatur perferendis quae quas qui quos rem soluta
        ut vel?
      </div>
    ),
    title: 'Title',
  },
}
