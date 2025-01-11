import { useTranslations } from 'next-intl'

export const useNavLinks = () => {
  const t = useTranslations('Navbar')

  return [
    {
      title: t('about'),
      path: '#about',
    },
    {
      title: t('projects'),
      path: '#projects',
    },
    {
      title: t('contact'),
      path: '#contact',
    },
  ]
}
