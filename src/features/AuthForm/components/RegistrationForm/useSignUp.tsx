import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { connectAuthenticatedUser } from '../../utils/dispatchers'

import { t } from 'languages'
import { authAPI } from 'services/auth'
import { RootState } from 'store'
import { LocalStorage } from 'utils/helpers/localStorage'

export const useSignUp = (dispatch: ThunkDispatch<RootState, null, AnyAction>) => {
  const [fetchSignUp, signUpProgress] = authAPI.useSignUpMutation()

  const { data, isError, error, isSuccess } = signUpProgress

  // Успешная регистрация
  useEffect(() => {
    if (data && isSuccess) {
      const language = LocalStorage.getLanguage()
      const successMessage = data.message[language]
      toast.success(successMessage)

      connectAuthenticatedUser(data, dispatch)
    }
  }, [data, isSuccess, dispatch])

  // Ошибка при регистрации
  useEffect(() => {
    if (isError) {
      const language = LocalStorage.getLanguage()
      const errorMessage = (error as any).data?.[language] || t('notification.unknownError')
      console.log(JSON.stringify(error))
      toast.error(errorMessage)
    }
  }, [isError, error])

  return { fetchSignUp, signUpProgress }
}
