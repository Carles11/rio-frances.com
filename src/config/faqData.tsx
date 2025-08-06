import { useTranslations } from 'next-intl'

export const useFaqData = () => {
  const t = useTranslations('FAQ')

  return [
    {
      id: 1,
      question: t('question1.q'),
      answer: t('question1.a'),
      category: 'services',
    },
    {
      id: 2,
      question: t('question2.q'),
      answer: t('question2.a'),
      category: 'mobile',
    },
    {
      id: 3,
      question: t('question3.q'),
      answer: t('question3.a'),
      category: 'seo',
    },
    {
      id: 4,
      question: t('question4.q'),
      answer: t('question4.a'),
      category: 'freelance',
    },
    {
      id: 5,
      question: t('question5.q'),
      answer: t('question5.a'),
      category: 'germany',
    },
    {
      id: 6,
      question: t('question6.q'),
      answer: t('question6.a'),
      category: 'chile',
    },
    {
      id: 7,
      question: t('question7.q'),
      answer: t('question7.a'),
      category: 'react',
    },
    {
      id: 8,
      question: t('question8.q'),
      answer: t('question8.a'),
      category: 'remote',
    },
    {
      id: 9,
      question: t('question9.q'),
      answer: t('question9.a'),
      category: 'pricing',
    },
    {
      id: 10,
      question: t('question10.q'),
      answer: t('question10.a'),
      category: 'timeline',
    },
    {
      id: 11,
      question: t('question11.q'),
      answer: t('question11.a'),
      category: 'seo',
    },
    {
      id: 12,
      question: t('question12.q'),
      answer: t('question12.a'),
      category: 'seo',
    },
    {
      id: 13,
      question: t('question13.q'),
      answer: t('question13.a'),
      category: 'seo',
    },
    {
      id: 14,
      question: t('question14.q'),
      answer: t('question14.a'),
      category: 'mobile',
    },
    {
      id: 15,
      question: t('question15.q'),
      answer: t('question15.a'),
      category: 'mobile',
    },
    {
      id: 16,
      question: t('question16.q'),
      answer: t('question16.a'),
      category: 'mobile',
    },
  ]
}
