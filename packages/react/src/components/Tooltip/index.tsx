import React, { ComponentProps } from 'react'
import {
  TooltipContainer,
  TooltipTrigger,
  TooltipProvider,
  Message,
  Arrow,
  TooltipPortal,
  TooltipRoot,
} from './styles'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipTrigger> {
  available: boolean
  title: string
  message: string
}

export function Tooltip({ available = true, title, message }: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipProvider>
        <TooltipRoot>
          <TooltipTrigger asChild available={available}>
            <button>{title}</button>
          </TooltipTrigger>
          <TooltipPortal>
            <Message className="TooltipContent" sideOffset={3}>
              <Text>{message}</Text>
              <Arrow className="TooltipArrow" />
            </Message>
          </TooltipPortal>
        </TooltipRoot>
      </TooltipProvider>
    </TooltipContainer>
  )
}
