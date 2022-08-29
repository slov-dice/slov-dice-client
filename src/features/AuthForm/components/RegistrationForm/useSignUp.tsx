import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'

import { connectAuthenticatedUser } from '../../utils/dispatchers'

import { authAPI } from 'services/auth'
import { RootState } from 'store'

export const useSignUp = (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
  const [fetchSignUp, signUpProgress] = authAPI.useSignUpMutation()

  const { data, isSuccess } = signUpProgress

  // Успешная регистрация
  useEffect(() => {
    if (data && isSuccess) {
      connectAuthenticatedUser(data, dispatch)
    }
  }, [data, isSuccess, dispatch])

  return { fetchSignUp, signUpProgress }
}
