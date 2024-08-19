import { getPublicMediaUrl } from '@/services/getPublicPath'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  image: ThumbnailImage,
  className?: string
}

export const Thumbnail = async ({ className, image }: Props) => {
  const { url, name } = image?.formats?.thumbnail
  const imageUrl = await getPublicMediaUrl(url)

  return <Image className={twMerge('', className && className)} height={500} width={300} src={imageUrl as string} alt={name} />
}
