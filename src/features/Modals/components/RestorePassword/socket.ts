import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { E_ModalContent, E_StatusName } from './models'
import { setStatus, setCooldown, setRestoreModalContent } from './slice'

import { closeModal } from 'features/Modals/slice'
import { E_StatusServerMessage } from 'models/app'
import { E_Subscribe, I_SubscriptionData } from 'models/socket/restore'
import { socket } from 'services/socket'
import { LocalStorage } from 'utils/helpers/localStorage'

export const subscribe = createAsyncThunk('restore', async (_, { dispatch }) => {
  socket.on(
    E_Subscribe.getRestoreCheckEmail,
    (data: I_SubscriptionData[E_Subscribe.getRestoreCheckEmail]) => {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
      dispatch(setStatus({ status: E_StatusName.checkEmail, value: false }))

      if (data.status === E_StatusServerMessage.success) {
        dispatch(setCooldown(true))
      }
    },
  )

  socket.on(
    E_Subscribe.getRestoreCheckCode,
    (data: I_SubscriptionData[E_Subscribe.getRestoreCheckCode]) => {
      dispatch(setStatus({ status: E_StatusName.checkEmail, value: false }))

      if (data.status === E_StatusServerMessage.success) {
        dispatch(setRestoreModalContent(E_ModalContent.changePassword))
        return
      }

      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
    },
  )

  socket.on(
    E_Subscribe.getRestoreChangePassword,
    (data: I_SubscriptionData[E_Subscribe.getRestoreChangePassword]) => {
      dispatch(setStatus({ status: E_StatusName.checkEmail, value: false }))

      if (data.status === E_StatusServerMessage.success) {
        dispatch(closeModal())
      }

      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
    },
  )
})

export const unsubscribe = () => {
  socket.off(E_Subscribe.getRestoreCheckEmail)
  socket.off(E_Subscribe.getRestoreCheckCode)
  socket.off(E_Subscribe.getRestoreChangePassword)
}
