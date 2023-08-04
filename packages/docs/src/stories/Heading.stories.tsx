import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  size: 'md',
  args: {
    children: 'Custom title',
  },

  argTypes: {
    size: {
      options: ['$sm', '$md', '$lg', '$2xl', '$4xl', '$5xl', '$6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Heading by default will be `h2`, but you can add a prop `as` with your custom tag',
      },
    },
  },
}
