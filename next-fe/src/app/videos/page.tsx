import { VideosSection } from '@/components/Video'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='container mx-auto p-4'>
      <VideosSection asRoute/>
    </div>
  )
}

export default page