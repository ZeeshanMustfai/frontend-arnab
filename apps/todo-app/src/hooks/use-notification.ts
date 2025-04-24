import { toast } from 'sonner'

type NotificationType = 'success' | 'error' | 'warning' | 'info'

const useNotification = () => {
  const notify = (message: string, type: NotificationType) => {
    const styles: Record<NotificationType, React.CSSProperties> = {
      success: { color: 'green', backgroundColor: '#dff0d8' },
      error: { color: 'red', backgroundColor: '#f2dede' },
      warning: { color: 'orange', backgroundColor: '#fcf8e3' },
      info: { color: 'blue', backgroundColor: '#d9edf7' }
    }
    toast[type](message, { style: styles[type] })
  }

  return { notify }
}

export { useNotification }