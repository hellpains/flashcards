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
    limit: 20,
    limits: [{ title: '10', value: 10 }],
    page: 20,
    setLimit: () => {},
    setPage: () => {},
    totalPage: 100,
  },
  render: args => {
    const [limit, setLimit] = useState(20)
    const [page, setPage] = useState(6)

    return (
      <>
        <Pagination
          {...args}
          limit={limit}
          limits={[
            { title: '10', value: 10 },
            { title: '20', value: 20 },
            { title: '30', value: 30 },
          ]}
          page={page}
          setLimit={setLimit}
          setPage={setPage}
          totalPage={100}
        />
      </>
    )
  },
}
