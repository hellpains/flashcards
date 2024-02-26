import { Logout, Person, PlayCircle } from '@/assets'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui'
import { Meta, type StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const ButtonDropdownMenu: Story = {
  args: {},
  render: args => {
    return (
      <div>
        <DropdownMenu {...args}>
          <DropdownMenuTrigger asChild>
            <Button variant={'icon'}>Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <PlayCircle />
              Learn
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Person />
              My profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Logout />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  },
}

export const HeaderDropdownMenu: Story = {
  args: {},
  render: args => {
    return (
      <div>
        <DropdownMenu {...args}>
          <DropdownMenuTrigger asChild>
            <Button variant={'icon'}>
              <Avatar>
                <AvatarImage />
                <AvatarFallback>H</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <PlayCircle />
              Learn
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Person />
              My profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Logout />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>{' '}
      </div>
    )
  },
}
