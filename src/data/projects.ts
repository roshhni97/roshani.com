import {
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiLaravel,
  SiPostgresql,
  SiStripe,
  SiTailwindcss,
} from 'react-icons/si'
// import HypzzImage from '@public/img/projects/hypzz.png'
// import KalabamImage from '@public/img/projects/kalabam.png'
// import WhyPigeonsImage from '@public/img/projects/why-pigeons-full.png'
import TrendifyImage from '@public/img/projects/trandify.png'
import HealthPlusImage from '@public/img/projects/health-plus.png'
import EvSearchImage from '@public/img/projects/evsearch.png'
import type { Project } from '@utils/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Trendify',
    description: {
      en: 'A web application that automated, real-time dashboard monitoring and anomaly detection. This significantly enhances data oversight and reduces manual monitoring efforts.',
      fr: 'Nous connectons des influenceurs et des marques pour collaborer sur des publicités de produits et plus encore.',
    },
    image: { src: TrendifyImage },
    homepage: 'https://www.trendifyapp.tech/',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '2',
    title: 'Health Plus',
    description: {
      en: 'Developed a webapp for enhancing Healthcare Data Access and Transparency through Integrated Case Management with PHR and Role-Based Access.',
      fr: 'Créez des quiz multijoueurs pour les activités en classe ou des présentations interactives.',
    },
    image: { src: HealthPlusImage },
    homepage: 'https://healthplus-frontend-sw4d.vercel.app/',
    github: 'https://github.com/roshhni97/healthplus-frontend',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'ChakraUI', icon: SiChakraui, color: '#319795' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'websockets', colorScheme: 'green' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '3',
    title: 'EV Search',
    description: {
      en: "A one-stop solution to all your EV Charging problems. It will significantly impact users' time and effort. Instead of finding EV stations and empty slots physically, You can now explore various stations, compare prices and book slots from home.",
      fr: 'Livraison rapide de plats directement à votre porte. Les tableaux de bord des utilisateurs, des restaurants, des chauffeurs et des administrateurs sont entièrement fonctionnels.',
    },
    image: { src: EvSearchImage },
    homepage: 'https://evian.netlify.app/',
    github: 'https://github.com/roshhni97/EVSearch',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Stripe', icon: SiStripe, color: '#008CDD' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'e-commerce', colorScheme: 'purple' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
]
