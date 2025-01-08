import emailjs, { init } from 'emailjs-com'
import Swal from 'sweetalert2'

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

const emailSend = (data: EmailData, resetForm: () => void): void => {
  console.log('Email Data:', data)

  const serviceID = 'service_1xubnpl'
  const templateID = 'template_rvgqsba'
  init('user_5HJvI2zi5tRGkdRn7cAvt')
  console.log({ serviceID, templateID, data })
  emailjs
    .send(serviceID, templateID, data as unknown as Record<string, unknown>)
    .then(
      (result: EmailSendResult) => {
        Swal.fire({
          title: `Success!`,
          text: `${result.text} Your email has been sent successfully.`,
          icon: 'success',
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: 'Close',
        })
        resetForm()
      },
      (error: EmailSendError) => {
        console.log({ error })
        Swal.fire({
          title: `Error`,
          text: `Please try again: (error ${error.status}, ${error.text})`,
          icon: 'error',
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: 'Close',
        })
      },
    )
}

export default emailSend
