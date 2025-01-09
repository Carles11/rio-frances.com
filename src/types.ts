import { JSX } from 'react'

export interface TabData {
  title: string
  id: string
  content: JSX.Element
}

export interface Link {
  path: string
  title: string
}

export interface MenuOverlayProps {
  links: Link[]
}

export interface NavLinkProps {
  href: string
  title: string
}

export interface ProjectCardProps {
  imgUrl: string
  title: string
  description: string
  gitUrl: string
  previewUrl: string
}

export interface ProjectTagProps {
  name: string
  onClick: (name: string) => void
  isSelected: boolean
}

export interface TabButtonProps {
  active: boolean
  selectTab: () => void
  children: React.ReactNode
}

export interface FormData {
  email: string
  subject: string
  message: string
}
