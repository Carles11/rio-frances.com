'use client'

import NavLink from './NavLink'
import { MenuOverlayProps } from '@/types'

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            className="hover:underline focus:underline"
          />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay
