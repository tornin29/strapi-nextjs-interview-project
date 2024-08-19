import ApiService, { ApiResponseType } from "@/services/api"

const api = new ApiService()

export const getPublicMediaUrl = async (path: string) => {
  try {
    const params = new URLSearchParams({
      path
    })

    const response: ApiResponseType<string> = await api.get(`/publicRoute?${params.toString()}`)

    if (response?.error != null) {
      throw new Error(response.error)
    }

    return response?.data ?? ''
  } catch (error: any) {
    return new Error(`There was an error fetching the public media path: ${error.message}`)
  }
}