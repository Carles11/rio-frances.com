import emailjs, { init } from 'emailjs-com'
import Swal from 'sweetalert2'
import { useTranslations } from 'next-intl'

interface EmailData {
  name?: string
  email: string
  message: string
}

interface EmailSendResult {
  text: string
}

interface EmailSendError {
  status: number
  text: string
}

const useEmailSend = () => {
  const tToast = useTranslations('ToastMessages')

  const emailSend = (data: EmailData, resetForm: () => void): void => {
    // using EMAILJS rio-frances - SMTP service
    const serviceID = 'service_p4gfq9k'
    const templateID = 'template_rvgqsba'
    init('user_5HJvI2zi5tRGkdRn7cAvt')
    // console.log({ serviceID, templateID, data })

    emailjs
      .send(serviceID, templateID, data as unknown as Record<string, unknown>)
      .then(
        (result: EmailSendResult) => {
          const text = result.text
          Swal.fire({
            title: tToast('successTitle'),
            text: tToast('emailSentMessage', { text }),
            icon: 'success',
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonText: tToast('closeButton'),
          })
          resetForm()
        },
        (error: EmailSendError) => {
          console.log({ error })
          const text = error.text

          Swal.fire({
            title: tToast('errorTitle'),
            text: tToast('retryErrorMessage', { text }),
            icon: 'error',
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonText: tToast('closeButton'),
          })
        },
      )
  }

  return emailSend
}

export default useEmailSend
