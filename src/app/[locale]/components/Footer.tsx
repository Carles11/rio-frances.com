'use client'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('Footer')
  const currentYear = new Date().getFullYear()
  return (
    <footer className="w-full py-11 mx-auto border border-[#33353F] bottom-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 text-xs text-white">
      <div className="container mx-auto text-center space-y-1">
        <p>
          © {currentYear}{' '}
          <a
            href="mailto:carles@rio-frances.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            Carles del Río Francés.
          </a>
          {t('rights')}
        </p>
        <p>{t('design')}. </p>
        <p>
          {t('check-crix')}{' '}
          <a
            href="https://crix.design"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            CriX Design
          </a>
          .
        </p>
        <p>{t('no-cookies')}</p>
      </div>
    </footer>
  )
}

export default Footer
