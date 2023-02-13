import { createApi } from '@reduxjs/toolkit/query/react'

import {
  I_AuthResponse,
  I_EmailConfirmPayload,
  I_SignInPayload,
  I_SignUpPayload,
  I_ThirdPartyAuthPayload,
  I_EmailConfirmResponse,
} from './models'

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

    check: build.query<I_AuthResponse, void>({
      query: () => ({
        url: 'check',
      }),
    }),

    checkToken: build.query({
      query: () => ({
        url: `/check/token`,
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

    emailConfirmation: build.mutation<I_EmailConfirmResponse, I_EmailConfirmPayload>({
      query: (payload) => ({
        url: 'confirm',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
})
