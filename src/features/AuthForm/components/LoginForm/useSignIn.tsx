import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'

import { connectAuthenticatedUser } from '../../utils/dispatchers'

import { authAPI } from 'services/auth'
import { RootState } from 'store'

export const useSignIn = (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
  const [fetchSignIn, signInProgress] = authAPI.useSignInMutation()

  const { data, isSuccess } = signInProgress

  // Успешная аутентификация
  useEffect(() => {
    if (data && isSuccess) {
      connectAuthenticatedUser(data, dispatch)
    }
  }, [data, isSuccess, dispatch])

  return { fetchSignIn, signInProgress }
}
