import { useTranslations } from 'next-intl'

export const useAchievementsList = () => {
  const t = useTranslations('AchievementsSection')

  const achievementsList = [
    {
      metric: t('projects'),
      value: 30,
      postfix: '+',
    },
    {
      prefix: '~',
      metric: t('users'),
      value: 4000,
    },
    {
      metric: t('years'),
      value: 5,
      postfix: '+',
    },
  ]

  return achievementsList
}
