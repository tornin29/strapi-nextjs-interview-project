import { getVideos } from '@/services'
import React from 'react'
import { Button } from '@/components'
import Link from 'next/link'
import { Video } from '@/components/Video'

type Props = {
  page?: number
  pageSize?: number
  asRoute?: boolean
}

export const VideosSection = async ({ asRoute = false, page = 1, pageSize = 1000 }: Props) => {
  const videos = await getVideos(page, pageSize)
  return (
    <section className='flex flex-col'>
      <h2 className='text-4xl font-semibold text-center mb-6'>
        {asRoute ? 'All Videos' : 'Recent Videos'}
      </h2>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {!(videos instanceof Error) ? (
          <>
            {videos?.map(video => (
              <Video key={video.id} {...video} />
            ))}
          </>
        ) : (
          <>
            <p className='text-center'>{videos.message}</p>
          </>
        )}
      </div>
      {!asRoute && (
        <div className='flex'>
          <Link className='my-4 mx-auto' href={'/videos'}>
            <Button>See All Videos</Button>
          </Link>
        </div>
      )}
    </section>
  )
}
