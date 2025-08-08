'use client'

import Link from 'next/link'

import { NavLinkProps } from '@/types'

const NavLink = ({ href, title, className }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white${
        className ? ' ' + className : ''
      }`}
    >
      {title}
    </Link>
  )
}

export default NavLink
