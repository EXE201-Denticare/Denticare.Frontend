import { env } from "@/env"
import axios from "axios"
import { getSession } from "next-auth/react"

const baseURL = env.NEXT_PUBLIC_BACKEND_URL

const apiClient = () => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  })

  instance.interceptors.request.use(async (request) => {
    const session = await getSession()
    if (session) {
      request.headers.Authorization = `Bearer ${session.accessToken}`
    }
    return request
  })

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      console.log(`error`, error)
    }
  )

  return instance
}

const apiServer = () => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  })

  return instance
}

export { apiClient, apiServer }
