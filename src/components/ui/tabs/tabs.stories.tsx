import { TabsContent } from '@/components/ui'
import { Meta, type StoryObj } from '@storybook/react'

import { Tabs } from './tabs'

const meta = {
  argTypes: {},
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <TabsContent value={'1'}>Switcher1</TabsContent>
        <TabsContent value={'2'}>Switcher2</TabsContent>
        <TabsContent value={'3'}>Switcher3</TabsContent>
        <TabsContent value={'4'}>Switcher4</TabsContent>
      </>
    ),
    defaultValue: '2',
    label: 'Tab Switcher',
    tabs: [
      { title: 'Switcher', value: '1' },
      { title: 'Switcher', value: '2' },
      { title: 'Switcher', value: '3' },
      { title: 'Switcher', value: '4' },
    ],
  },
}
export const Disabled: Story = {
  args: {
    children: (
      <>
        <TabsContent value={'1'}>Switcher1</TabsContent>
        <TabsContent value={'2'}>Switcher2</TabsContent>
        <TabsContent value={'3'}>Switcher3</TabsContent>
        <TabsContent value={'4'}>Switcher4</TabsContent>
      </>
    ),
    defaultValue: '2',
    disabled: true,
    label: 'Tab Switcher',
    tabs: [
      { title: 'Switcher', value: '1' },
      { title: 'Switcher', value: '2' },
      { title: 'Switcher', value: '3' },
      { title: 'Switcher', value: '4' },
    ],
  },
}
