import { isFulfilled } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { LocalStorage } from 'utils/helpers/localStorage'

import type { Middleware } from '@reduxjs/toolkit'

export const rtkQueryFulfilledLogger: Middleware = () => (next) => (action) => {
  if (isFulfilled(action) && action.payload?.message) {
    const language = LocalStorage.getLanguage()
    const successMessage = action.payload.message[language]
    toast.success(successMessage)
  }

  return next(action)
}
