import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@mateus-garcia-ignite-ui/react'

const meta: Meta<TextInputProps> = {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
}

export default meta

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your Name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
