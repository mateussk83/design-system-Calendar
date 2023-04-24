import { ComponentProps } from 'react'
import {
  TooltipContainer,
  Trigger,
  TooltipProvider,
  Message,
  Arrow,
  Portal,
  Root,
} from './styles'

import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof Trigger> {
  available: boolean
  title: string
  message: string
}

export function Tooltip({ available = true, title, message }: TooltipProps) {
  return (
    <TooltipProvider>
      <Root>
        <Trigger asChild available={available}>
          <button>{title}</button>
        </Trigger>
        <Portal>
          <Message className="TooltipContent" sideOffset={3}>
            <Text>{message}</Text>
            <Arrow className="TooltipArrow" />
          </Message>
        </Portal>
      </Root>
    </TooltipProvider>
  )
}
