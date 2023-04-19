import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@mateus-ignite-ui/react'

const meta: Meta<AvatarProps> = {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/mateussk83.png',
    alt: 'Mateus Garcia Santos',
  },
}

export default meta

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}