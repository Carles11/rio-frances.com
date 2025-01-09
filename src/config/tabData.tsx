import { TabData } from '@/types'

export const TAB_DATA: TabData[] = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>JavaScript and TypeScript</li>
        <li>NextJS</li>
        <li>React</li>
        <li>React Native with Expo</li>
        <li>Supabase</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Javascript developer</li>
        <li>@BARCELONA CODESCHOOL</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
]
