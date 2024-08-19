import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ClientVideo } from '@/components'
import { getPublicMediaUrl } from '@/services/getPublicPath'

type Props = {
  image: ThumbnailImage
  className?: string
}

type BannerVideoProps = {
  video: Video
}

export const Banner = async ({ className, image }: Props) => {
  const { url, name } = image?.formats?.thumbnail
  const imageUrl = await getPublicMediaUrl(url)
  return (
    <Image
      className={twMerge('', className && className)}
      height={1000}
      width={600}
      src={imageUrl as string}
      alt={name}
    />
  )
}

export const BannerVideo = async ({ video }: BannerVideoProps) => {
  const { url } = video?.video
  return (
    <div className='flex'>
      <ClientVideo
        className='w-auto rounded-3xl overflow-hidden mx-auto h-[calc(100vh-10rem)]'
        controls
        url={url}
      />
    </div>
  )
}
