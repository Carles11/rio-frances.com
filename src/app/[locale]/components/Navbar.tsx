'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'
import { useNavLinks } from '@/config/navLinks'
import LocaleSwitcher from '@/app/[locale]/components/LocaleSwitcher'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navLinks = useNavLinks()

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4">
        <Link href={'/'}>
          <Image
            src="/images/cdrio-desarrollador-log_white+.svg"
            alt="Logo"
            width={150}
            height={50}
          />
        </Link>
        <div className="flex flex-col md:flex-row items-end items-right">
          <div className="mobile-menu block md:hidden mb-2">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                aria-label="Open navigation menu"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                aria-label="Close navigation menu"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-6 text-orange-500">
            <LocaleSwitcher />
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar
