import ApiService, { type ApiResponseType } from "@/services/api"

interface VideoList {
  data: Video[],
  meta: Record<string, any>
}
interface VideoSingle {
  data: Record<string, any>,
  meta: Record<string, any>
}

const api = new ApiService()

export const getVideos = async (page?: number, pageSize?: number) => {
  try {
    const params = new URLSearchParams({
      ...(page && {['pagination[page]']: `${page}`}),
      ...(pageSize && {['pagination[pageSize]']: `${pageSize}`}),
    })

    const response: ApiResponseType<VideoList> = await api.get(`/videos?${params.toString()}`)
    
    if (response?.error != null) {
      throw new Error(response.error)
    }
    
    return response?.data?.data
  } catch (error: any) {
    return new Error(`There was an error fetching the videos: ${error.message}`)
  }
}

export const getVideoThroughSlug = async (argSlug: string) => {
  try {
    const response: ApiResponseType<VideoSingle> = await api.get(`/videos/${argSlug ?? ''}`)

    if (response?.error != null) {
      throw new Error(response.error)
    }

    const actualResponse = response?.data?.data

    if (!actualResponse) throw new Error('Not found')

    const {
      id,
      attributes: { title, slug, publishDate, videoDescription, duration, video }
    } = actualResponse

    const { name,size, url } = video?.data?.attributes

    const newData: Video = {
      id: +id,
      title,
      slug,
      publishDate,
      videoDescription,
      duration,
      video: {
        name,
        size,
        url
      }
    }

    return newData
  } catch (error: any) {
    return new Error(`There was an error fetching the blogs: ${error.message}`)
  }
}
