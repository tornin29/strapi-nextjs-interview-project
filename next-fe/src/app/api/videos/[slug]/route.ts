type Params = {
  slug: string
}
export async function GET(request: Request, context: { params: Params }) {
  try {
    const slug = decodeURIComponent(context.params.slug)
    const queryParams = new URLSearchParams({
      populate: '*',
      ['filters[slug][$eq]']: slug
    })

    const data = await fetch(`${process.env.BASE_URL}/api/videos?${queryParams.toString()}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
      }
    }).then(res => res.json())

    return Response.json({
      status: 'success',
      data: { data: data.data[0] ?? {}, meta: data.meta },
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
