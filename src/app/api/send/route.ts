import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.FROM_EMAIL as string

interface EmailRequest {
  email: string
  subject: string
  message: string
}

interface ResendResponse {
  id: string
  status: string
  // Add other properties if needed
}

export async function POST(req: Request): Promise<NextResponse> {
  const { email, subject, message }: EmailRequest = await req.json()
  console.log(email, subject, message)
  try {
    const data: ResendResponse = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      html: `
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      `,
    })
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
