import { createApi } from '@reduxjs/toolkit/query/react'

import {
  I_AuthResponse,
  I_EmailConfirmPayload,
  I_LogoutPayload,
  I_SignInPayload,
  I_SignUpPayload,
  I_ThirdPartyAuthPayload,
} from './interfaces'

import { I_LobbyUser, T_UserId } from 'models/app'
import { baseQueryWithReAuth } from 'services/utils'

export const authAPI = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReAuth,
  endpoints: (build) => ({
    signIn: build.mutation<I_AuthResponse, I_SignInPayload>({
      query: (payload) => ({
        url: 'local/signin',
        method: 'POST',
        body: payload,
      }),
    }),

    signUp: build.mutation<I_AuthResponse, I_SignUpPayload>({
      query: (payload) => ({
        url: 'local/signup',
        method: 'POST',
        body: payload,
      }),
    }),

    thirdPartyAuth: build.mutation<I_AuthResponse, I_ThirdPartyAuthPayload>({
      query: (payload) => ({
        url: 'token',
        method: 'POST',
        body: payload,
      }),
    }),

    guestAuth: build.mutation<I_AuthResponse, void>({
      query: () => ({
        url: 'guest',
        method: 'GET',
      }),
    }),

    logout: build.mutation<void, I_LogoutPayload>({
      query: (payload) => ({
        url: 'logout',
        method: 'POST',
        body: payload,
      }),
    }),

    emailConfirmation: build.mutation<void, I_EmailConfirmPayload>({
      query: (payload) => ({
        url: 'confirm',
        method: 'POST',
        body: payload,
      }),
    }),

    setOnline: build.query<I_LobbyUser[], T_UserId>({
      queryFn: (userId) => {
        // const socket = getSocket()
        // const accessToken = getCookieValue(E_Cookies.access_token)
        // const payload: EmitPayload[EmitNamespace.setUserOnline] = { accessToken, userId }
        // socket.emit(EmitNamespace.setUserOnline, payload)
        return { data: [] }
      },
    }),
  }),
})
