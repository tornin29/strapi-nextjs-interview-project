'use client'

import { formatDate, formatTime } from '@/helper/utils'
import React from 'react'
import _ from 'lodash'
import { useRouter } from 'next/navigation'

type Props = {
  title: string
  body: string
  publishDate: Date
  duration: string
  slug: string
}

export const VideoCardTextContent = ({ title, slug, body, publishDate, duration }: Props) => {
  const capitalizedTitle = _.startCase(_.toLower(title))
  const content = body.slice(0, 160) + ' ...'
  const publishedAt = formatDate(new Date(publishDate))
  const formatedDuration = formatTime(+duration ?? 0)
  const router = useRouter()

  const handleClick = () => {
    router.push(`/videos/${slug}`)
  }
  return (
    <div onClick={handleClick} className='flex cursor-pointer flex-col w-full p-4 gap-4'>
      <h2 className='text-xl font-bold flex items-center justify-between gap-4'>
        {capitalizedTitle} <span className='text-sm'>({formatedDuration})</span>
      </h2>
      <p>{content}</p>
      <p className='mt-auto text-sm'>
        Published At: <span className='font-semibold'>{publishedAt}</span>
      </p>
    </div>
  )
}
