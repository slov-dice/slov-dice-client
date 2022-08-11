import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'

import { connectAuthenticatedUser } from '../../utils/dispatchers'

import { authAPI } from 'services/auth'
import { RootState } from 'store'

export const useGuestAuth = (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
  const [guestAuth, guestAuthProgress] = authAPI.useGuestAuthMutation()

  const { data, isError, error, isSuccess } = guestAuthProgress

  // Успешная авторизация
  useEffect(() => {
    if (data && isSuccess) {
      connectAuthenticatedUser(data, dispatch)
    }
  }, [data, isSuccess, dispatch])

  // Ошибка при авторизации
  useEffect(() => {
    if (isError) console.log(`Ошибка ${JSON.stringify(error)}`)
  }, [isError, error])

  return { guestAuth, guestAuthProgress }
}
