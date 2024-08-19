import { BlogsSection } from '@/components/Blog'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='container mx-auto p-4'>
      <BlogsSection asRoute/>
    </div>
  )
}

export default page