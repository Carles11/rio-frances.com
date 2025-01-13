import { useTranslations } from 'next-intl'

export const useAchievementsList = () => {
  const t = useTranslations('AchievementsSection')

  const achievementsList = [
    { id: 1, metric: t('projects'), value: 20, postfix: '+' },
    { id: 2, prefix: '~', metric: t('users'), value: 4000 },
    { id: 3, metric: t('years'), value: 6, postfix: '+' },
  ]

  return achievementsList
}
