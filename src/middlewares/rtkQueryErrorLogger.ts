import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { t } from 'languages'
import { LocalStorage } from 'utils/helpers/localStorage'

import type { Middleware } from '@reduxjs/toolkit'

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action) && action.payload?.data) {
    const language = LocalStorage.getLanguage()
    const errorMessage = action.payload.data?.[language] || t('notification.unknownError')
    console.log(JSON.stringify(action.error))
    toast.error(errorMessage)
  }

  return next(action)
}
