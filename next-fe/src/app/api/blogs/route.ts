import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    
    const queryParams = new URLSearchParams({
      populate: '*',
      ['sort[0]']: 'publishDate:desc',
      ['sort[1]']: 'title:asc',
    })

    for (const [key, value] of searchParams) {
      queryParams.append(key, value)
    }
    
    const data = await fetch(`${process.env.BASE_URL}/api/blogs?${queryParams.toString()}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
      }
    }).then(res => res.json())

    const newData = data?.data?.map(
      ({ id, attributes: { title, slug, publishDate, body, readTime, image } }: any) => {
        const { name, width, height, formats } = image?.data?.attributes
        return {
          id,
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
      }
    )

    return Response.json({
      status: 'success',
      data: { data: newData ?? [], meta: data.meta },
      error: null
    })
  } catch (error: any) {
    return Response.json({
      status: 'error',
      data: null,
      error: error.message
    })
  }
}
