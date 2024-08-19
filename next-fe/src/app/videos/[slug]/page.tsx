
import { getVideoThroughSlug } from '@/services'
import React from 'react'
import _ from 'lodash'
import { BannerVideo } from '@/components/Banner'
import { formatDate, formatTime } from '@/helper/utils'

type Props = {
  params: {
    slug: string
  }
}

const page = async (props: Props) => {
  const data = await getVideoThroughSlug(props.params.slug)

  if(data instanceof Error) return <>{data?.message}</>

  const capitalizedTitle = _.startCase(_.toLower(data.title))

  const formatedDuration = formatTime(+data.duration ?? 0)

  const formatedDate = formatDate(new Date(data.publishDate))

  return (
    <div className='container mx-auto'>
      <div className="my-7 flex flex-col">
        <BannerVideo video={data}/>
        <h1 className='my-10 text-center text-4xl font-bold flex flex-col gap-4'>{capitalizedTitle} <span className='text-sm'>({formatedDuration})</span></h1>
        <p>{data.videoDescription}</p>
        <p className="self-end">Published at: {formatedDate}</p>
      </div>
    </div>
  )
}

export default page