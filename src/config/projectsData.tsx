import { useTranslations } from 'next-intl'

export const useProjectsData = () => {
  const t = useTranslations('Projects')

  return [
    {
      id: 1,
      title: t('webDevelopmentPortfolioWebsite.title'),
      description: t('webDevelopmentPortfolioWebsite.description'),
      image: '/images/projects/rio-frances-web.webp',
      tag: ['all', 'web'],
      gitUrl: 'https://github.com/Carles11/cdrio-dev',
      previewUrl: 'https://www.rio-frances.com',
    },
    {
      id: 2,
      title: t('graphicDesignPortfolioWebsite.title'),
      description: t('graphicDesignPortfolioWebsite.description'),
      image: '/images/projects/crix-design-low.webp',
      tag: ['all', 'web'],
      gitUrl: 'https://github.com/Carles11/crix',
      previewUrl: 'https://www.crix.design',
    },
    {
      id: 3,
      title: t('myPensionWebApp.title'),
      description: t('myPensionWebApp.description'),
      image: '/images/projects/mypension-web.webp',
      tag: ['all', 'web'],
      gitUrl: '/',
      previewUrl: 'https://www.mypension.de',
    },
    {
      id: 4,
      title: t('myPensionMobileApp.title'),
      description: t('myPensionMobileApp.description'),
      image: '/images/projects/mypension-de-low.webp',
      tag: ['all', 'mobile'],
      gitUrl: '/',
      previewUrl:
        'https://play.google.com/store/apps/details?id=de.mypension.mypension',
    },
    {
      id: 5,
      title: t('remoryoMobileApp.title'),
      description: t('remoryoMobileApp.description'),
      image: '/images/projects/remoryo-low.webp',
      tag: ['all', 'mobile'],
      gitUrl: '/',
      previewUrl: 'https://www.remoryo.com/download-app',
    },
    {
      id: 6,
      title: t('leoLeo.title'),
      description: t('leoLeo.description'),
      image: '/images/projects/leo-leo-low.webp',
      tag: ['all', 'web', 'mobile'],
      gitUrl: 'https://github.com/Carles11/leo-react',
      previewUrl: 'https://www.leo-leo-hessen.com',
    },
    {
      id: 7,
      title: t('theCirculArtStatistics.title'),
      description: t('theCirculArtStatistics.description'),
      image: '/images/projects/circulart-stats-low.webp',
      tag: ['all', 'web'],
      gitUrl: 'https://github.com/Carles11/circulCard',
      previewUrl: 'https://thecirculart-statistics.vercel.app/',
    },
    {
      id: 8,
      title: t('sweetTextAIGenerator.title'),
      description: t('sweetTextAIGenerator.description'),
      image: '/images/projects/sweet-text-low.webp',
      tag: ['all', 'web'],
      gitUrl: 'https://github.com/Carles11/sweet-text.ai',
      previewUrl: 'https://sweet-text-ai.vercel.app/',
    },
    {
      id: 9,
      title: t('foodOrderingAndDeliveryApp.title'),
      description: t('foodOrderingAndDeliveryApp.description'),
      image: '/images/projects/food-ordering-app-low.webp',
      tag: ['all', 'mobile'],
      gitUrl: 'https://github.com/Carles11/foodOrdering',
      previewUrl: 'https://www.youtube.com/watch?v=rIYzLhkG9TA&t=26793s',
    },
    {
      id: 10,
      title: t('apiRESTful.title'),
      description: t('apiRESTful.description'),
      image: '/images/projects/api-img.webp',
      tag: ['all', 'api'],
      gitUrl: 'https://github.com/Carles11/api',
      previewUrl: 'https://www.api-crix.com/',
    },
  ]
}
