import type { Meta, StoryObj } from '@storybook/react'

import { TableHead, TableHeadCell } from '@/components/ui'

import s from './table.module.scss'

import { Table, TableBody, TableCell, TableRow } from './table'

const meta = {
  argTypes: {},
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => {
    return (
      <>
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell style={{ width: '30%' }}>Name</TableHeadCell>
              <TableHeadCell style={{ width: '20%' }}>Cards</TableHeadCell>
              <TableHeadCell style={{ width: '20%' }}>Last Update</TableHeadCell>
              <TableHeadCell style={{ width: '20%' }}>Created by</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>DeckName</TableCell>
              <TableCell>8</TableCell>
              <TableCell>12.10.2023</TableCell>
              <TableCell>hellpains</TableCell>
              <TableCell className={s.actionsCell}>actions</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>DeckName2</TableCell>
              <TableCell>0</TableCell>
              <TableCell>10.09.1999</TableCell>
              <TableCell>thefredressor</TableCell>
              <TableCell className={s.actionsCell}>actions</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => {
    return (
      <>
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell style={{ width: '30%' }}>Name</TableHeadCell>
              <TableHeadCell style={{ width: '20%' }}>Cards</TableHeadCell>
              <TableHeadCell style={{ width: '20%' }}>Last Update</TableHeadCell>
              <TableHeadCell style={{ width: '20%' }}>Created by</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>DeckName</TableCell>
              <TableCell>8</TableCell>
              <TableCell>12.10.2023</TableCell>
              <TableCell>hellpains</TableCell>
              <TableCell className={s.actionsCell}>actions</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>DeckName2</TableCell>
              <TableCell>0</TableCell>
              <TableCell>10.09.1999</TableCell>
              <TableCell>thefredressor</TableCell>
              <TableCell className={s.actionsCell}>actions</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
    )
  },
}
