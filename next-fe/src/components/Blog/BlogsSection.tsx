import { Button } from '@/components'
import { Blog } from '@/components/Blog'
import { getBlogs } from '@/services'
import Link from 'next/link'

type Props = {
  page?: number
  pageSize?: number
  asRoute?: boolean
}

export const BlogsSection = async ({ asRoute = false, page = 1, pageSize = 1000 }: Props) => {
  const blogs = await getBlogs(page, pageSize)
  return (
    <section className='flex flex-col'>
      <h2 className='text-4xl font-semibold text-center mb-6'>{asRoute ? `Blog Page`: 'Recent Blog Posts'}</h2>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {!(blogs instanceof Error) ? (
          <>
            {blogs?.map(blog => (
              <Blog key={blog.id} {...blog} />
            ))}
          </>
        ) : (
          <>
            <p className='text-center'>{blogs.message}</p>
          </>
        )}
      </div>
      {!asRoute && (
        <div className='flex'>
          <Link className='my-4 mx-auto' href={'/blogs'}>
            <Button>See All Blogs</Button>
          </Link>
        </div>
      )}
    </section>
  )
}
