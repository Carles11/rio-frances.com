'use client'

import { useEffect, useRef } from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ProjectCardProps } from '@/types'
import Swal from 'sweetalert2'
import { useTranslations } from 'next-intl'

const ProjectCard: React.FC<ProjectCardProps> = ({
  ident,
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  const tToast = useTranslations('ToastMessages')
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imgRef.current) {
              imgRef.current.style.backgroundImage = `url(${imgUrl})`
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const currentImgRef = imgRef.current
    if (currentImgRef) {
      observer.observe(currentImgRef)
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef)
      }
    }
  }, [imgUrl])

  return (
    <div>
      <div
        ref={imgRef}
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ backgroundSize: 'cover' }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {ident === 3 || ident === 4 || ident === 5 ? (
            <div
              onClick={() => {
                Swal.fire({
                  icon: 'info',
                  title: tToast('infoTitle'),
                  text: tToast('privateRepoMessage', { title }),
                  confirmButtonText: tToast('confirmButton'),
                })
              }}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center cursor-pointer"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white" />
            </div>
          ) : (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
