import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@mateus-ignite-ui/react'

const meta: Meta<BoxProps> = {
  title: 'Typography/Box',
  component: Box,
  args: {
    children: (
      <>
        <p>Testando o elemento Box</p>
      </>
    ),
  },
}

export default meta

export const Primary: StoryObj<BoxProps> = {}
