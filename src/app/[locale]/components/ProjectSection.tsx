'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'
import { useProjectsData } from '@/config/projectsData'
import { useTranslations } from 'next-intl'

const ProjectsSection = () => {
  const t = useTranslations('ProjectsSection')

  const [tag, setTag] = useState('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const projectsData = useProjectsData()

  const handleTagChange = (newTag: string) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {t('title')}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange('all')}
          name={t('all')}
          isSelected={tag === 'all'}
        />
        <ProjectTag
          onClick={() => handleTagChange('web')}
          name={t('web')}
          isSelected={tag === 'web'}
        />
        <ProjectTag
          onClick={() => handleTagChange('mobile')}
          name={t('mobile')}
          isSelected={tag === 'mobile'}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              ident={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
