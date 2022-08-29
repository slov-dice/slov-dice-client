import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'

import { connectAuthenticatedUser } from '../../utils/dispatchers'

import { authAPI } from 'services/auth'
import { RootState } from 'store'

export const useGuestAuth = (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
  const [fetchGuestAuth, guestAuthProgress] = authAPI.useGuestAuthMutation()

  const { data, isSuccess } = guestAuthProgress

  // Успешная авторизация
  useEffect(() => {
    if (data && isSuccess) {
      connectAuthenticatedUser(data, dispatch)
    }
  }, [data, isSuccess, dispatch])

  return { fetchGuestAuth, guestAuthProgress }
}
