import { useState } from 'react'

import { Button, Modal } from '@/components/ui'
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
    title: 'Modal',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(prevState => !prevState)}>open dialog</Button>
        <Modal onOpenChange={setOpen} open={open} {...args}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolor dolorem
          eligendi iusto pariatur quae, sapiente velit veritatis. Ab autem consequatur dolorem
          libero magnam molestias mollitia nesciunt perspiciatis quisquam repudiandae?
        </Modal>
      </>
    )
  },
}
