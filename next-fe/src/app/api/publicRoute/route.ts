import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const path = searchParams.get('path')
    const mediaPath = `${process.env.BASE_URL}${path ?? '/'}`

    return Response.json({
      status: 'success',
      data: mediaPath,
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
