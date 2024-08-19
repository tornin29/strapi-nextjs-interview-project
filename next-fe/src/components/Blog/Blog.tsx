'use client'

import { Thumbnail } from '@/components'
import { formatDate } from '@/helper/utils'
import _ from 'lodash'
import { useRouter } from 'next/navigation'

interface Props extends BlogPost {}

export const Blog = ({ image, title, slug, publishDate, readTime }: Props) => {

  const router = useRouter()
  const capitalizedTitle = _.startCase(_.toLower(title))
  const publishedAt = formatDate(new Date(publishDate))

  const handleClick = () => {
    router.push(`/blogs/${slug}`)
  }

  return (
    <div onClick={handleClick} className='relative cursor-pointer shadow-sm bg-white border min-h-60 h-auto rounded-xl overflow-hidden flex flex-col md:flex-row'>
      <Thumbnail
        className='absolute inset-0 w-full h-full object-cover object-center min-w-[none]'
        image={image}
      />
      <div className='relative flex justify-end blog_card_overlay_gradient flex-col p-4 gap-2 text-gray-200 w-full translate-y-10 hover:translate-y-0 duration-300'>
        <h2 className='text-2xl font-bold flex justify-between items-center'>
          {capitalizedTitle} <span className='text-sm'>({readTime} min read)</span>
        </h2>
        <p className=''>
          Published At: <span>{publishedAt}</span>
        </p>
      </div>
    </div>
  )
}
