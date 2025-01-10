import { TabData } from '@/types'

export const TAB_DATA: TabData[] = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>• Node.js</li>
        <li>• JavaScript, TypeScript</li>
        <li>• React, NextJS, React-Native with expo</li>
        <li>• Supabase, mongoDB</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>
          • Full-Stack JavaScript Developer:{' '}
          <a
            href="https://www.barcelonacodeschool.com/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            @BARCELONA-CODESCHOOL
          </a>
        </li>
        <li>
          • Advanced programming with JavaScript and ECMAScript:{' '}
          <a
            href="https://www.campusmvp.es"
            target="_blank"
            rel="noreferrer"
            className="hover:underline hove:text-blue-400"
          >
            {' '}
            @Campus-MVP online school
          </a>
        </li>
        <li>
          • Learning path to Senior Web Developer{' '}
          <a
            href="https://frontendmasters.com/u/elCarles/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline hove:text-blue-400"
          >
            {' '}
            @frontendmasters.com
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a
            href="https://drive.google.com/file/d/1mkz53P0CT9hSnLGQ9YlclDcxe1KH1e3o/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            • Full-Stack JavaScript Developer
          </a>
        </li>
        <li>
          <a
            href="https://www.campusmvp.es/certificados/carlos-del-rio-frances"
            target="_blank"
            rel="noreferrer"
          >
            • Advanced programming with JavaScript and ECMAScript
          </a>
        </li>
        <li>
          <a
            href="https://university.atlassian.com/student/award/MHMuAWCmDU6kLmPwDyBYge75"
            target="_blank"
            rel="noreferrer"
          >
            • Jira (Atlassian)
          </a>
        </li>
        <li>
          <a
            href="https://university.atlassian.com/student/award/DV7LGD4bsZ5K83ehwetb3jTp"
            target="_blank"
            rel="noreferrer"
          >
            • Confluence (Atlassian)
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Languages',
    id: 'languages',
    content: (
      <ul className="list-disc pl-2">
        <li>• Spanish (Native)</li>
        <li>• Catalan (Native)</li>
        <li>
          <a
            href="https://drive.google.com/file/d/11GEuB08Feu198P2-xyUn-CDxLq_q73wj/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            • German C1 (Goethe Institut - KDS)
          </a>
        </li>
        <li>• English C1 CEFR</li>
        <li>• French B1 CEFR</li>
        <li>• Italian B1 CEFR</li>
        <li>• Portuguese A2 CEFR</li>
      </ul>
    ),
  },
]
