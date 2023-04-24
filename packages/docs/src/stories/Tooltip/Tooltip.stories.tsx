import { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@mateus-garcia-ignite-ui/react'

const meta: Meta<TooltipProps> = {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    available: true,
  },
}

export default meta

export const Primary: StoryObj<TooltipProps> = {
  args: {
    title: '10',
    message: '10 de fevereiro - Disponivel',
  },
}

export const Unavailable: StoryObj<TooltipProps> = {
  args: {
    available: false,
    title: '10',
    message: '10 de fevereiro - Indisponivel',
  },
}
