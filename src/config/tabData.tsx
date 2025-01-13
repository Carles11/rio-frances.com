import { useTranslations } from 'next-intl'
import { TabData } from '@/types'

export const useTabData = (): TabData[] => {
  const t = useTranslations('TabData')

  return [
    {
      title: t('skills.title'),
      id: 'skills',
      content: (
        <ul className="list-disc pl-2">
          <li>• {t('skills.node')}</li>
          <li>• {t('skills.jsTs')}</li>
          <li>• {t('skills.next')}</li>
          <li>• {t('skills.react')}</li>
          <li>• {t('skills.react-native')}</li>
          <li>• {t('skills.expo')}</li>
          <li>• {t('skills.mongo')}</li>
          <li>• {t('skills.supabase')}</li>
        </ul>
      ),
    },
    {
      title: t('education.title'),
      id: 'education',
      content: (
        <ul className="list-disc pl-2">
          <li>
            • {t('education.fullStack')}{' '}
            <a
              href="https://www.barcelonacodeschool.com/"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              @BARCELONA-CODESCHOOL
            </a>
          </li>
          <li>
            • {t('education.advancedJs')}{' '}
            <a
              href="https://www.campusmvp.es"
              target="_blank"
              rel="noreferrer"
              className="hover:underline hove:text-blue-400"
            >
              {' '}
              @Campus-MVP online school
            </a>
          </li>
          <li>
            • {t('education.seniorWeb')}{' '}
            <a
              href="https://frontendmasters.com/u/elCarles/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline hove:text-blue-400"
            >
              {' '}
              @frontendmasters.com
            </a>
          </li>
        </ul>
      ),
    },
    {
      title: t('certifications.title'),
      id: 'certifications',
      content: (
        <ul className="list-disc pl-2">
          <li>
            <a
              href="https://drive.google.com/file/d/1mkz53P0CT9hSnLGQ9YlclDcxe1KH1e3o/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              • {t('certifications.fullStack')}
            </a>
          </li>
          <li>
            <a
              href="https://www.campusmvp.es/certificados/carlos-del-rio-frances"
              target="_blank"
              rel="noreferrer"
            >
              • {t('certifications.advancedJs')}
            </a>
          </li>
          <li>
            <a
              href="https://university.atlassian.com/student/award/MHMuAWCmDU6kLmPwDyBYge75"
              target="_blank"
              rel="noreferrer"
            >
              • {t('certifications.jira')}
            </a>
          </li>
          <li>
            <a
              href="https://university.atlassian.com/student/award/DV7LGD4bsZ5K83ehwetb3jTp"
              target="_blank"
              rel="noreferrer"
            >
              • {t('certifications.confluence')}
            </a>
          </li>
        </ul>
      ),
    },
    {
      title: t('languages.title'),
      id: 'languages',
      content: (
        <ul className="list-disc pl-2">
          <li>• {t('languages.spanish')}</li>
          <li>• {t('languages.catalan')}</li>
          <li>
            <a
              href="https://drive.google.com/file/d/11GEuB08Feu198P2-xyUn-CDxLq_q73wj/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              • {t('languages.german')}
            </a>
          </li>
          <li>• {t('languages.english')}</li>
          <li>• {t('languages.french')}</li>
          <li>• {t('languages.italian')}</li>
          <li>• {t('languages.portuguese')}</li>
        </ul>
      ),
    },
  ]
}
