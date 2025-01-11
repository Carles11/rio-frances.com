import { GlobeAltIcon } from '@heroicons/react/24/solid'
import { useLocale } from 'next-intl'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'

export default function LocaleSwitcher() {
  const locale = useLocale()

  return (
    <div className="flex items-center gap-2">
      <GlobeAltIcon className="h-5 w-5" />
      <LocaleSwitcherSelect defaultValue={locale}></LocaleSwitcherSelect>
    </div>
  )
}
