import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    children: (
      <>
        'Carosserie Test Zürich' <br /> Stauffacherstrasse 31 <br /> 8004 Zürich, ZH, CH
      </>
    ),
    variant: 'h2',
  },
}
export const H2: Story = {
  args: {
    ...H1.args,
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    ...H1.args,
    variant: 'h3',
  },
}

export const H4: Story = {
  args: {
    ...H1.args,
    variant: 'h4',
  },
}

export const Body1: Story = {
  args: {
    ...H1.args,
    variant: 'body1',
  },
}
export const Body2: Story = {
  args: {
    ...H1.args,
    variant: 'body2',
  },
}
export const Subtitle1: Story = {
  args: {
    ...H1.args,
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    ...H1.args,
    variant: 'subtitle2',
  },
}
export const Caption: Story = {
  args: {
    ...H1.args,
    variant: 'caption',
  },
}
export const Overline: Story = {
  args: {
    ...H1.args,
    variant: 'overline',
  },
}
export const Link1: Story = {
  args: {
    ...H1.args,
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    ...H1.args,
    variant: 'link2',
  },
}
