import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'
import { TooltipContent, TooltipTrigger } from './styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const ToolTipPropsBase = styled('button', {})

export interface ToolTipProps extends ComponentProps<typeof ToolTipPropsBase> {
  as?: ElementType
  content: 'primary' | 'secondary'
  message: string
  customClassName?: string
}

export function ToolTip({ ...props }: ToolTipProps) {
  return (
    <div>
      <Tooltip.Provider delayDuration={500}>
        <Tooltip.Root>
          <TooltipTrigger {...props}></TooltipTrigger>
          <Tooltip.Portal>
            <TooltipContent className={props.customClassName} sideOffset={5}>
              {props.message || 'Default toolTip'}
              <Tooltip.Arrow width={20} height={8} />
            </TooltipContent>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  )
}

ToolTip.displayName = 'ToolTip'
