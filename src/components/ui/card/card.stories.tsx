import { Button } from '@/components/ui'
import { Meta, type StoryObj } from '@storybook/react'

import { Card } from './card'

const meta = {
  argTypes: {},
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '30px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, illo, iusto? Maiores,
        neque sapiente. Consequuntur corporis eligendi eos fuga fugiat non nulla, ullam? Culpa cum
        dicta doloremque dolorum earum eligendi explicabo illo ipsam, ipsum magni maiores minima
        minus nemo praesentium quam quas quia recusandae repudiandae, voluptatem voluptatum. Debitis
        dolorum eligendi eos necessitatibus optio? Deleniti maiores numquam porro, praesentium
        provident ratione repellat.
        <Button fullWidth variant={'secondary'}>
          Siuuuuuuuu
        </Button>
      </div>
    ),
  },
}
