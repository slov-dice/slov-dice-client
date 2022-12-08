import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query'

import { T_Tokens } from 'models/shared/app'
import { RootState } from 'store'
import { logout } from 'store/profile'
import { LocalStorage } from 'utils/helpers/localStorage'

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
    const refreshToken = LocalStorage.getRefreshToken()
    const refreshResult = await fetch(`${import.meta.env.VITE_SERVER_API}/auth/refresh`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    })

    const response = await refreshResult.json()

    if (response.data) {
      const accessToken = (response?.data as T_Tokens).accessToken
      const refreshToken = (response?.data as T_Tokens).refreshToken

      LocalStorage.setAccessToken(accessToken)
      LocalStorage.setRefreshToken(refreshToken)

      result = await baseQuery(args, api, extraOptions)
    } else {
      const roomId = (api.getState() as RootState).room.id
      api.dispatch(logout({ roomId }))
    }
  }
  return result
}
