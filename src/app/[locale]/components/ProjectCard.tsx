'use client'

import { useEffect, useRef, useState } from 'react'
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
  const [isExpanded, setIsExpanded] = useState(false)
  const [shouldTruncate, setShouldTruncate] = useState(false)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  // Check if previewUrl is an object with iOS and Android links
  const isMultiPlatform =
    typeof previewUrl === 'object' &&
    'ios' in previewUrl &&
    'android' in previewUrl

  // Check if description needs truncation
  useEffect(() => {
    if (descriptionRef.current) {
      const lineHeight = parseInt(
        getComputedStyle(descriptionRef.current).lineHeight,
      )
      const maxHeight = lineHeight * 3 // 3 lines
      setShouldTruncate(descriptionRef.current.scrollHeight > maxHeight)
    }
  }, [description])

  const handleDescriptionClick = () => {
    if (shouldTruncate) {
      setIsExpanded(!isExpanded)
    }
  }

  const handleDescriptionBlur = (e: React.FocusEvent) => {
    // Only collapse if the focus is moving outside the description area
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsExpanded(false)
    }
  }

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
          {ident === 3 || ident === 5 || ident === 6 ? (
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
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link: text-white" />
            </Link>
          )}

          {/* Handle multi-platform links (iOS & Android) */}
          {isMultiPlatform ? (
            <div className="flex gap-4">
              {/* iOS Link */}
              <Link
                href={(previewUrl as { ios: string; android: string }).ios}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group/ios"
                title="View on iOS App Store"
              >
                <div className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group-hover/ios:border-white transition-all">
                  <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/ios:text-white" />
                </div>
                <span className="text-xs text-[#ADB7BE] mt-1 group-hover/ios:text-white transition-all">
                  iOS
                </span>
              </Link>

              {/* Android Link */}
              <Link
                href={(previewUrl as { ios: string; android: string }).android}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group/android"
                title="View on Google Play Store"
              >
                <div className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group-hover/android: border-white transition-all">
                  <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/android:text-white" />
                </div>
                <span className="text-xs text-[#ADB7BE] mt-1 group-hover/android:text-white transition-all">
                  Android
                </span>
              </Link>
            </div>
          ) : (
            <Link
              href={previewUrl as string}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <div className="relative" onBlur={handleDescriptionBlur} tabIndex={0}>
          <p
            ref={descriptionRef}
            className={`text-[#ADB7BE] transition-all duration-300 project-description ${
              shouldTruncate && !isExpanded
                ? 'text-clamp-3 cursor-pointer hover:text-white'
                : 'expanded'
            }`}
            onClick={handleDescriptionClick}
          >
            {description}
          </p>
          {shouldTruncate && isExpanded && (
            <div className="mt-2">
              <span
                className="text-blue-400 text-sm cursor-pointer hover:text-blue-300 font-medium"
                onClick={handleDescriptionClick}
              >
                show less
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
