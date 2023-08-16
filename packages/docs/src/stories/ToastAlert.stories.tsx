import type { StoryObj, Meta } from '@storybook/react'
import { Button, Text, ToastAlert, ToastAlertProps } from '@byromeu-ignite-ui/react'

export default {
    title: 'Data display/ToastAlert',
    component: ToastAlert,
    args: {
        children: 'success',
        duration: '2s',
        message: 'Default message'
    },

    argTypes: {
        alertType: { 
            options: ['success', 'error', 'blank', 'loading', 'custom'], 
            control: {
                type: 'inline-radio',
            },
        },

        duration: {
            options: ['2s', '7s'],
            control: {
                type: 'inline-radio',
            }
        },

        onClick: {
            action: 'click',
        },
    },
    
} as Meta<ToastAlertProps>

export const Success: StoryObj<ToastAlertProps> = {
    args: {
        children: 'Add',
        alertType: 'success', 
        message: 'Item adicionado com sucesso!',
    },
}
export const Error: StoryObj<ToastAlertProps> = {
    args: {
        children: 'Add',
        alertType: 'error', 
        message: 'Erro ao adicionar item',
    },
}
export const Blank: StoryObj<ToastAlertProps> = {
    args: {
        children: 'Enter',
        alertType: 'blank',
        message: 'Hello World', 
    },
}
export const Loading: StoryObj<ToastAlertProps> = {
    args: {
        children: 'Save',
        alertType: 'loading', 
        message: 'Espere um minuto',
    },
}
export const Custom: StoryObj<ToastAlertProps> = {
    args: {
        children: 'Save',
        alertType: 'custom', 
        message: 'Este é um custom alert!',
    },
}