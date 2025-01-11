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
    const serviceID = 'service_1xubnpl'
    const templateID = 'template_rvgqsba'
    init('user_5HJvI2zi5tRGkdRn7cAvt')
    console.log({ serviceID, templateID, data })
    emailjs
      .send(serviceID, templateID, data as unknown as Record<string, unknown>)
      .then(
        (result: EmailSendResult) => {
          Swal.fire({
            title: tToast('successTitle'),
            text: `${result.text} ${tToast('emailSentMessage')}`,
            icon: 'success',
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonText: tToast('closeButton'),
          })
          resetForm()
        },
        (error: EmailSendError) => {
          console.log({ error })
          Swal.fire({
            title: tToast('errorTitle'),
            text: `${tToast('retryErrorMessage')} (error ${error.status}, ${
              error.text
            })`,
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
