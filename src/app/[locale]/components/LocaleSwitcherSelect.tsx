'use client'

import { Locale, routing, usePathname, useRouter } from '@/i18n/routing'
import { useParams } from 'next/navigation'

type Props = {
  defaultValue: string
}

export default function LocaleSwitcherSelect({ defaultValue }: Props) {
  const router = useRouter()

  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale },
    )
  }

  return (
    <div>
      {/* <label htmlFor="locale-switcher">{label}</label> */}
      <select
        id="locale-switcher"
        defaultValue={defaultValue}
        onChange={onSelectChange}
        className="w-auto h-8 rounded-sm border-red-700 bg-transparent focus:ring-0 focus:ring-offset-0 custom-select"
      >
        {routing.locales.map((locale) => (
          <option
            key={locale}
            value={locale}
            className="text-[#141414] bg-blue"
          >
            {locale}
          </option>
        ))}
      </select>
    </div>
  )
}
