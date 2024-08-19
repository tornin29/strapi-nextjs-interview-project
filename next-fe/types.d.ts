interface Post {
  slug: string
  title: string
  publishDate?: Date
}

interface ThumbnailImage {
  name: string
  width: number
  height: number
  formats: Record<string, any>
}

interface BlogPost extends Post {
  id: number
  title: string
  slug: string
  publishDate: Date
  body: string
  readTime: number
  image: ThumbnailImage
}

interface VideoType {
  name: string
  size: number
  url: string
}

interface Video extends Post {
  id: number
  title: string
  slug: string
  publishDate: Date
  videoDescription: string
  duration: string
  video: VideoType
}
