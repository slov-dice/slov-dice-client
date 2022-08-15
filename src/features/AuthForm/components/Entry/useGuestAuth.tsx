import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { connectAuthenticatedUser } from '../../utils/dispatchers'

import { t } from 'languages'
import { authAPI } from 'services/auth'
import { RootState } from 'store'
import { LocalStorage } from 'utils/helpers/localStorage'

export const useGuestAuth = (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
  const [fetchGuestAuth, guestAuthProgress] = authAPI.useGuestAuthMutation()

  const { data, isError, error, isSuccess } = guestAuthProgress

  // Успешная авторизация
  useEffect(() => {
    if (data && isSuccess) {
      const language = LocalStorage.getLanguage()
      const successMessage = data.message[language]
      toast.success(successMessage)

      connectAuthenticatedUser(data, dispatch)
    }
  }, [data, isSuccess, dispatch])

  // Ошибка при авторизации
  useEffect(() => {
    if (isError) {
      const errorMessage = t('notification.unknownError')
      console.log(JSON.stringify(error))
      toast.error(errorMessage)
    }
  }, [isError, error])

  return { fetchGuestAuth, guestAuthProgress }
}
