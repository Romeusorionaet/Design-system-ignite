import toast, { Toaster } from 'react-hot-toast'
import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const ToastAlertPropsBase = styled('button', {})

export interface ToastAlertProps
  extends ComponentProps<typeof ToastAlertPropsBase> {
  as?: ElementType
  alertType: 'success' | 'error' | 'blank' | 'loading' | 'custom'
  duration: '2s' | '7s'
  message?: string
  customClassName?: string
}

export function ToastAlert(props: ToastAlertProps) {
  const notify = () => {
    switch (props.alertType) {
      case 'success':
        toast.success(props.message || 'Item adicionado com sucesso!')
        break
      case 'error':
        toast.error(props.message || 'Erro ao adicionar item.')
        break
      case 'blank':
        toast(props.message || 'Hello World!')
        break
      case 'loading':
        toast.loading(props.message || 'Waiting a minute')
        break
      case 'custom':
        toast.custom(
          <div className={props.customClassName}>
            {props.message || 'Personalize seu Toast'}
          </div>,
        )
        break
      default:
        break
    }
  }

  return (
    <button onClick={notify}>
      <Toaster
        toastOptions={
          props.duration === '2s' ? { duration: 2000 } : { duration: 7000 }
        }
      />
    </button>
  )
}

ToastAlert.displayName = 'ToastAlert'
