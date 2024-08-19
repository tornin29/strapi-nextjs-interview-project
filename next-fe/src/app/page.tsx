import { BlogsSection } from '@/components/Blog'
import { VideosSection } from '@/components/Video'


export default async function Home() {

  return (
    <main className='container mx-auto p-4'>
      <BlogsSection page={1} pageSize={3}/>
      <hr className='my-6' />
      <VideosSection page={1} pageSize={3}/>
    </main>
  )
}
