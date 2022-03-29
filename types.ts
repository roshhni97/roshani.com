import { IconProps } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

type Image = {
  src: string
  alt: string
}

export type TechnologyType = {
  name: string
  icon: IconType | ((props: IconProps) => JSX.Element)
  color?: string
}

type Tag = {
  label: string
  colorScheme: string
}

export type ProjectType = {
  id: string
  title: string
  description: {
    en: string
    fr: string
  }
  images: Image[]
  homepage?: string
  github?: string
  technologies: TechnologyType[]
  tags: Tag[]
}

export type SkillType = {
  category: string
  technologies: TechnologyType[]
}

type RoleType = {
  label_en: string
  label_fr: string
  color: string
}

type LanguageType = {
  icon: IconType
  color: string
}

export type ContributionType = {
  user: string
  repository: string
  role: RoleType
  github: string
  description: { en: string; fr: string }
  topics: string[]
  language: LanguageType
}

export type Bookmark = {
  _id: string
  title: string
  link: string
  cover: string
  tags: string[]
}
