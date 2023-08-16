import { keyframes, styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

// styles ToolTip

const slideUpAndFade = keyframes({
  '0%': { transform: 'translateY(30px)', opacity: 0 },
  '100%': { transform: 'translateY(0)', opacity: 1 },
})

const slideRightAndFade = keyframes({
  '0%': { transform: 'translateX(30x)', opacity: 0 },
  '100%': { transform: 'translateX(0)', opacity: 1 },
})

const slideDownAndFade = keyframes({
  '0%': { transform: 'translateY(30px)', opacity: 0 },
  '100%': { transform: 'translateY(0)', opacity: 1 },
})

const slideLeftAndFade = keyframes({
  '0%': { transform: 'translateX(30px)', opacity: 0 },
  '100%': { transform: 'translateX(0)', opacity: 1 },
})

export const TooltipContent = styled(Tooltip.Content, {
  color: '$white',
  backgroundColor: '$gray700',
  fontFamily: '$code',
  padding: '$4',
  borderRadius: '6px',

  animationDuration: '.5s',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  backgroundColor: '$gray300',
  color: '$white',
  border: 0,
})
