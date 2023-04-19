import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@mateus-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

const meta: Meta<ButtonProps> = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
}

export default meta

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo Passo
        <ArrowRight />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
