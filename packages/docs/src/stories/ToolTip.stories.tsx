import type { StoryObj, Meta } from '@storybook/react'
import { ToolTip, ToolTipProps } from '@byromeu-ignite-ui/react'

export default {
    title: 'Data display/ToolTip',
    component: ToolTip,
    args: {
        children: 'hover over 1',
        content: 'primary',
        message: 'Adicione sua mensagem'
    },

    argTypes: {
        content: { 
            options: ['primary', 'secondary'], 
            control: {
                type: 'inline-radio',
            },
        },
    },
} as Meta<ToolTipProps>

export const Primary: StoryObj<ToolTipProps> = {}
export const Secondary: StoryObj<ToolTipProps> = {
    args: {
        children: 'hover over 2',
        content: 'secondary', 
        message: 'TollTip Custom',
    },
}