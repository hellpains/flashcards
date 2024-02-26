import { useState } from 'react'

import { Button, Dialog } from '@/components/ui'
import { Meta, type StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Dialog,
  tags: ['autodocs'],
  title: 'Components/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Confirm',
    title: 'Dialog',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        {' '}
        <Button onClick={() => setOpen(prevState => !prevState)}>open dialog</Button>
        <Dialog onOpenChange={setOpen} open={open} {...args}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolor dolorem
          eligendi iusto pariatur quae, sapiente velit veritatis. Ab autem consequatur dolorem
          libero magnam molestias mollitia nesciunt perspiciatis quisquam repudiandae?
        </Dialog>
      </>
    )
  },
}
