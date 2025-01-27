'use client'
import { useState } from 'react'
import GithubIcon from '../../../../public/github-icon.svg'
import LinkedinIcon from '../../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'
import useEmailSend from '@/app/[locale]/utils/email'
import Swal from 'sweetalert2'
import { FormData } from '@/types'
import { useTranslations } from 'next-intl'

const EmailSection = () => {
  const t = useTranslations('ContactSection')
  const tToast = useTranslations('ToastMessages')
  const emailSend = useEmailSend()

  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault()
    const data: FormData = { email, subject, message }

    if (!email || !subject || !message) {
      Swal.fire({
        title: tToast('errorTitle'),
        text: tToast('errorMessage'),
        icon: 'error',
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: tToast('closeButton'),
      })
      return
    }

    const resetForm = () => {
      setEmail('')
      setSubject('')
      setMessage('')
    }

    emailSend(data, resetForm)
  }

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">{t('title')}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">{t('description')}</p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Carles11">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/carlos-del-rio-frances/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              {t('email')}
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t('emailPlaceholder')}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              {t('subject')}
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t('subjectPlaceholder')}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              {t('message')}
            </label>
            <textarea
              name="message"
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder={t('messagePlaceholder')}
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-black font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {t('send')}
          </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection
