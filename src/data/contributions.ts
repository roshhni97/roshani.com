import { SiJavascript, SiTypescript } from 'react-icons/si'
import type { ContributionProps } from '@components/structure/OpenSource/Contribution'

export const contributions: ContributionProps[] = [
  {
    user: 'Biziverse Pvt. Ltd',
    repository: '',
    role: {
      label: 'Software Engineer',
      color: 'green',
    },
    githubUrl: 'https://biziverse.com/',
    description: [
      'Developed reminder email functionality and interaction reports using AngularJS and MySQL, significantly enhancing user engagement and experience. This solution offers insights that enhance decision-making.',
      'Spearheaded API creation, route management, and backend functionality in C#, optimizing communication between the frontend and backend to enhance system performance and responsiveness.',
      'Designed and implemented dynamic features such as the Dealer Finder and a real-time dashboard, collaborating closely with cross-functional teams to effectively integrate new technologies.',
      'This approach reinforced the company’s commitment to innovation and fostered growth by enhancing user engagement and operational efficiency.',
    ],

    topics: ['AngularJS', 'C#', 'MySQL'],
    language: {
      name: 'Typescript',
      icon: SiTypescript,
      color: '#3178C6',
    },
  },
  {
    user: 'BitGreen Technolabz',
    repository: '',
    role: {
      label: 'Frontend Developer',
      color: 'orange',
    },
    githubUrl: 'https://bitgreentechnolabz.com/',
    description: [
      'Developed responsive user interfaces using React.js, Redux, MUI, and Custom Hooks to enhance user engagement and satisfaction. Optimized components for efficiency and reusability, streamlining workflows and reducing load times. Implemented accessibility best practices to ensure an inclusive platform for all users.',
      'Optimized data integration and payment solutions. Integrated external APIs for accurate, real-time trading data retrieval, enhancing system reliability. Implemented the Razorpay payment gateway for secure credit card transactions, improving user convenience. Streamlined data and payment processes, building user efficiency.',
      'Led QA automation with Playwright to ensure platform reliability. Increased productivity by automating repetitive testing tasks. Delivered a high-quality product through thorough testing.',
    ],
    topics: ['React.js', 'Redux', 'MUI', 'Playwright'],
    language: {
      name: 'Javascript',
      icon: SiJavascript,
      color: '#F7DF1E',
    },
  },
]
