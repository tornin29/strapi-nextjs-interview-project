import ApiService, { type ApiResponseType } from '@/services/api'

interface BlogPostList {
  data: BlogPost[]
  meta: Record<string, any>
}
interface BlogPostSingle {
  data: Record<string, any>
  meta: Record<string, any>
}

const api = new ApiService()

export const getBlogs = async (page?: number, pageSize?: number) => {
  try {
    const params = new URLSearchParams({
      ...(page && { ['pagination[page]']: `${page}` }),
      ...(pageSize && { ['pagination[pageSize]']: `${pageSize}` })
    })

    const response: ApiResponseType<BlogPostList> = await api.get(`/blogs?${params.toString()}`)

    if (response?.error != null) {
      throw new Error(response.error)
    }

    return response?.data?.data
  } catch (error: any) {
    return new Error(`There was an error fetching the blogs: ${error.message}`)
  }
}

export const getBlogThroughSlug = async (argSlug: string) => {
  try {
    const response: ApiResponseType<BlogPostSingle> = await api.get(`/blogs/${argSlug ?? ''}`)

    if (response?.error != null) {
      throw new Error(response.error)
    }

    const actualResponse = response?.data?.data

    if (!actualResponse) throw new Error('Not found')

    const {
      id,
      attributes: { title, slug, publishDate, body, readTime, image }
    } = actualResponse

    const { name, width, height, formats } = image?.data?.attributes

    const newData: BlogPost = {
      id: +id,
      title,
      slug,
      publishDate,
      body,
      readTime,
      image: {
        name,
        width,
        height,
        formats
      }
    }

    return newData
  } catch (error: any) {
    return new Error(`There was an error fetching the blogs: ${error.message}`)
  }
}
