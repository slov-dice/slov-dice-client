import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { t } from 'languages'
import { authAPI } from 'services/auth'
import { LocalStorage } from 'utils/helpers/localStorage'

export const useRestorePassword = () => {
  const [restorePassword, restorePasswordProgress] = authAPI.useRestorePasswordMutation()

  const { isError, error, isSuccess } = restorePasswordProgress

  // Почта найдена и письмо отправлено
  useEffect(() => {
    if (isSuccess) {
      toast.success(t('notification.auth.restore.success'))
    }
  }, [isSuccess])

  // Почта не найдена
  useEffect(() => {
    if (isError) {
      const language = LocalStorage.getLanguage()
      const errorMessage = (error as any).data[language] || t('notification.auth.unknownError')
      console.log(JSON.stringify(error))
      toast.error(t('notification.auth.restore.error') + ' ' + errorMessage)
    }
  }, [isError, error])

  return { restorePassword, restorePasswordProgress }
}
