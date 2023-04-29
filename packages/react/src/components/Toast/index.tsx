import React, { ComponentProps } from 'react'
import { Button } from '../Button'
import {
  ToastAction,
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof Button> {}

export function Toast() {
  return (
    <ToastContainer>
      <Button>Agendar</Button>
      <ToastRoot>
        <ToastTitle>Agendamento realizado</ToastTitle>
        <ToastDescription>Quarta-feira, 23 de Outubro às 16h</ToastDescription>
        <ToastAction asChild altText="Goto schedule to undo">
          X
        </ToastAction>
        <ToastClose />
      </ToastRoot>

      <ToastViewport />
    </ToastContainer>
  )
}
