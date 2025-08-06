'use client'

interface JsonLdProps {
  locale: string
}

export default function JsonLdSchema({ locale }: JsonLdProps) {
  const getLocalizedData = () => {
    const baseData = {
      en: {
        name: 'Carles del Río Francés',
        jobTitle: 'Web & Mobile Developer | SEO Specialist',
        description:
          'Freelance web and mobile developer specializing in React, Next.js, React Native and SEO optimization. Serving clients in Germany and Chile.',
        address: {
          addressLocality: 'Remote',
          addressCountry: 'DE',
        },
        workLocation: ['Germany', 'Chile', 'Remote'],
        expertise: [
          'Web Development',
          'Mobile App Development',
          'SEO Optimization',
          'AIO Optimization',
          'React Development',
          'Next.js Development',
          'React Native Development',
          'TypeScript',
          'JavaScript',
        ],
      },
      de: {
        name: 'Carles del Río Francés',
        jobTitle: 'Web- & Mobile-Entwickler | SEO-Spezialist',
        description:
          'Freiberuflicher Web- und Mobile-Entwickler spezialisiert auf React, Next.js, React Native und SEO-Optimierung. Betreut Kunden in Deutschland und Chile.',
        address: {
          addressLocality: 'Remote',
          addressCountry: 'DE',
        },
        workLocation: ['Deutschland', 'Chile', 'Remote'],
        expertise: [
          'Webentwicklung',
          'Mobile App Entwicklung',
          'SEO-Optimierung',
          'AIO-Optimierung',
          'React Entwicklung',
          'Next.js Entwicklung',
          'React Native Entwicklung',
          'TypeScript',
          'JavaScript',
        ],
      },
      es: {
        name: 'Carles del Río Francés',
        jobTitle: 'Desarrollador Web y Móvil | Especialista SEO',
        description:
          'Desarrollador freelance web y móvil especializado en React, Next.js, React Native y optimización SEO. Atiendo clientes en Alemania y Chile.',
        address: {
          addressLocality: 'Remoto',
          addressCountry: 'CL',
        },
        workLocation: ['Alemania', 'Chile', 'Remoto'],
        expertise: [
          'Desarrollo Web',
          'Desarrollo de Apps Móviles',
          'Optimización SEO',
          'Optimización AIO',
          'Desarrollo React',
          'Desarrollo Next.js',
          'Desarrollo React Native',
          'TypeScript',
          'JavaScript',
        ],
      },
    }

    return baseData[locale as keyof typeof baseData] || baseData.en
  }

  const data = getLocalizedData()

  const personSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://www.rio-frances.com/#person',
        name: data.name,
        url: 'https://www.rio-frances.com',
        image: {
          '@type': 'ImageObject',
          url: 'https://www.rio-frances.com/images/carles-in-ids.webp',
          width: 300,
          height: 300,
        },
        description: data.description,
        jobTitle: data.jobTitle,
        worksFor: {
          '@type': 'Organization',
          name: 'Freelance',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: data.address.addressLocality,
          addressCountry: data.address.addressCountry,
        },
        knowsAbout: data.expertise,
        workLocation: data.workLocation,
        sameAs: [
          'https://github.com/Carles11',
          'https://www.linkedin.com/in/carles-del-rio-frances/',
          'https://crix.design',
        ],
        email: 'mailto:carles@rio-frances.com',
        telephone: '+49-xxx-xxxxxxx', // You should add your actual phone number
        // Enhanced solo developer properties
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Freelance Web & Mobile Developer',
          occupationLocation: data.workLocation,
          skills: data.expertise,
          educationRequirements: 'Full Stack JavaScript Development',
          experienceRequirements: '5+ years in web and mobile development',
          responsibilities: [
            'Web application development',
            'Mobile app development',
            'SEO optimization',
            'Performance optimization',
            'Technical consulting',
          ],
        },
        // Professional credentials
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'JavaScript Full Stack Development',
            credentialCategory: 'Professional Certification',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Advanced JavaScript & ECMAScript',
            credentialCategory: 'Technical Certification',
          },
        ],
        // Service areas for local SEO
        serviceArea: [
          {
            '@type': 'Country',
            name: 'Germany',
            sameAs: 'https://en.wikipedia.org/wiki/Germany',
          },
          {
            '@type': 'Country',
            name: 'Chile',
            sameAs: 'https://en.wikipedia.org/wiki/Chile',
          },
        ],
        // Languages for international targeting
        knows: [
          {
            '@type': 'Language',
            name: 'Spanish',
            additionalType: 'Native',
          },
          {
            '@type': 'Language',
            name: 'Catalan',
            additionalType: 'Native',
          },
          {
            '@type': 'Language',
            name: 'German',
            additionalType: 'C2',
          },
          {
            '@type': 'Language',
            name: 'English',
            additionalType: 'C1',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.rio-frances.com/#website',
        url: 'https://www.rio-frances.com',
        name: 'Carles del Río Francés - Portfolio',
        description: data.description,
        inLanguage: [
          {
            '@type': 'Language',
            name: 'English',
            alternateName: 'en',
          },
          {
            '@type': 'Language',
            name: 'Deutsch',
            alternateName: 'de',
          },
          {
            '@type': 'Language',
            name: 'Español',
            alternateName: 'es',
          },
        ],
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.rio-frances.com/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://www.rio-frances.com/#service',
        name: 'Web & Mobile Development Services',
        description: data.description,
        provider: {
          '@id': 'https://www.rio-frances.com/#person',
        },
        areaServed: ['DE', 'CL', 'Worldwide'],
        serviceType: [
          'Web Development',
          'Mobile App Development',
          'SEO Optimization',
          'Frontend Development',
          'React Development',
          'Next.js Development',
          'React Native Development',
          'Performance Optimization',
          'Technical Consulting',
        ],
        priceRange: '€€',
        // Enhanced service details for solo developer
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Web Development',
              description:
                'Custom web applications using React, Next.js, and TypeScript',
              price: '50-80',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                unitCode: 'HUR',
                unitText: 'per hour',
              },
            },
            {
              '@type': 'Offer',
              name: 'Mobile App Development',
              description:
                'Cross-platform mobile apps using React Native and Expo',
              price: '60-90',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                unitCode: 'HUR',
                unitText: 'per hour',
              },
            },
            {
              '@type': 'Offer',
              name: 'SEO Optimization',
              description:
                'Technical SEO, AIO optimization, and performance improvements',
              price: '40-60',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                unitCode: 'HUR',
                unitText: 'per hour',
              },
            },
          ],
        },
        // Service advantages for solo developers
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Business Type',
            value: 'Solo Developer',
          },
          {
            '@type': 'PropertyValue',
            name: 'Remote Work',
            value: 'Available',
          },
          {
            '@type': 'PropertyValue',
            name: 'GDPR Compliant',
            value: 'Yes',
          },
          {
            '@type': 'PropertyValue',
            name: 'Mobile First',
            value: 'Yes',
          },
        ],
        // Target audience
        audience: {
          '@type': 'Audience',
          audienceType: ['Small Business', 'Startups', 'Medium Enterprises'],
          geographicArea: ['Germany', 'Chile', 'Europe', 'Latin America'],
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.rio-frances.com/#organization',
        name: 'Carles del Río Francés - Development Services',
        url: 'https://www.rio-frances.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.rio-frances.com/images/cdrio-desarrollador-log.svg',
        },
        founder: {
          '@id': 'https://www.rio-frances.com/#person',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+49-xxx-xxxxxxx', // Add your actual phone number
          contactType: 'customer service',
          email: 'carles@rio-frances.com',
          availableLanguage: ['English', 'German', 'Spanish'],
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  )
}
