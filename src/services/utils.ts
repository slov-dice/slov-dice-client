import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query'
import { io, Socket } from 'socket.io-client'

import { logout } from 'store/profile'
import { LocalStorage } from 'utils/helpers/localStorage'

let socket: Socket
export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(import.meta.env.VITE_SERVER_API, { autoConnect: false })
  }
  return socket
}

export const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_SERVER_API}/auth`,
  credentials: 'include',
  mode: 'cors',
  prepareHeaders: (headers) => {
    const accessToken = LocalStorage.getAccessToken()
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return headers
  },
})

export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery({ url: 'refresh', method: 'POST' }, api, extraOptions)

    if (refreshResult.data) {
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logout())
    }
  }
  return result
}
