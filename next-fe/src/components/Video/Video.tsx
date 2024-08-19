import { ClientVideo } from '@/components'
import { VideoCardTextContent } from './VideoCardTextContent'
import { getPublicMediaUrl } from '@/services/getPublicPath'

interface Props extends Video {}

export const Video = async ({
  title,
  slug,
  videoDescription,
  duration,
  publishDate,
  video: { url }
}: Props) => {

  return (
    <div className='shadow-sm bg-white border rounded-xl overflow-hidden flex flex-col'>
      <ClientVideo url={url} controls  />
      <VideoCardTextContent
        title={title}
        body={videoDescription}
        slug={slug}
        duration={duration}
        publishDate={publishDate}
      />
    </div>
  )
}
