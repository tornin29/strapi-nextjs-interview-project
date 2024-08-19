'use client'

import { getPublicMediaUrl } from '@/services/getPublicPath'
import React, { useState, useEffect } from 'react'

type Props = {
  className?: string
  controls?: boolean
  url: string
}

export const ClientVideo = ({ url, className, controls = false }: Props) => {
  const [videoUrl, setVideoUrl] = useState<string | undefined>(undefined)

  useEffect(() => {
    ;(async () => {
      try {
        const resp = await getPublicMediaUrl(url)
        if (resp instanceof Error) throw new Error('Video not found on server')
        setVideoUrl(resp)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [url])

  return videoUrl ? (
    <video className={className ?? ''} controls={controls} src={videoUrl} />
  ) : (
    <div className='text-center my-6'>Loading video...</div>
  )
}
