import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from './pagination'

const meta = {
  argTypes: {},
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    currentPage: 12,
    onPageChange: () => {},
    pageSize: 12,
    setPageSize: () => {},
    totalPage: 100,
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(1)

    const [pageSize, setPageSize] = useState(5)

    return (
      <>
        <Pagination
          {...args}
          currentPage={currentPage}
          onPageChange={page => setCurrentPage(page)}
          pageSize={pageSize}
          setPageSize={setPageSize}
          totalPage={Math.ceil(1000 / pageSize)}
        />
      </>
    )
  },
}
