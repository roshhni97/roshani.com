import { useTranslation } from 'next-i18next'
import type { TFuncKey } from 'react-i18next'
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { Skill, type SkillProps } from './Skill'

export interface SkillGroupProps {
  id: string
  category: string
  skills: SkillProps[]
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category, skills }) => {
  const { t } = useTranslation('common')

  return (
    <VStack
      align='flex-start'
      borderColor='black'
      border='1px solid'
      p='4'
      spacing='4'
    >
      <Heading as='h4'>{t(category as TFuncKey<'common'>)}</Heading>
      <SimpleGrid columns={3} spacing='6'>
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </SimpleGrid>
    </VStack>
  )
}
