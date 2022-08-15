import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { connectAuthenticatedUser } from '../../utils/dispatchers'

import { t } from 'languages'
import { authAPI } from 'services/auth'
import { RootState } from 'store'
import { LocalStorage } from 'utils/helpers/localStorage'

export const useSignIn = (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
  const [fetchSignIn, signInProgress] = authAPI.useSignInMutation()

  const { data, isError, error, isSuccess } = signInProgress

  // Успешная аутентификация
  useEffect(() => {
    if (data && isSuccess) {
      connectAuthenticatedUser(data, dispatch)
      const language = LocalStorage.getLanguage()
      const successMessage = data.message[language]
      toast.success(successMessage)
    }
  }, [data, isSuccess, dispatch])

  // Ошибка при аутентификации
  useEffect(() => {
    if (isError) {
      const language = LocalStorage.getLanguage()
      const errorMessage = (error as any).data?.[language] || t('notification.unknownError')
      console.log(JSON.stringify(error))
      toast.error(errorMessage)
    }
  }, [isError, error])

  return { fetchSignIn, signInProgress }
}
