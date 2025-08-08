import { useTranslations } from 'next-intl'

export const useNavLinks = (locale: string) => {
  const t = useTranslations('Navbar')

  let seoTitle = 'SEO'
  let seoPath = '/seo'
  if (locale === 'es') {
    seoTitle = 'SEO Chile'
    seoPath = '/es/seo'
  } else if (locale === 'de') {
    seoTitle = 'SEO Deutschland'
    seoPath = '/de/seo'
  } else if (locale === 'en') {
    seoTitle = 'SEO Worldwide'
    seoPath = '/seo'
  }

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
    {
      title: seoTitle,
      path: seoPath,
    },
  ]
}
