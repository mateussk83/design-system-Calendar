import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  padding: '16px 26px',
  border: 0,
  borderRadius: '$sm',
  button: {
    all: 'unset',
    fontSize: '$md',
    color: '$white',
  },

  variants: {
    available: {
      true: {
        backgroundColor: '$gray600',
      },
      false: {
        backgroundColor: '$gray800',
      },
    },
  },
  defaultVariants: {
    available: true,
  },
})

export const TooltipRoot = styled(Tooltip.Root, {})
export const TooltipPortal = styled(Tooltip.Portal, {})

export const Message = styled(Tooltip.Content, {
  borderRadius: '$md',
  padding: '10px 15px',
  fontSize: '15px',
  lineHeight: 1,
  color: '$gray100',
  backgroundColor: '$gray900',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
})

export const TooltipProvider = styled(Tooltip.Provider, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
