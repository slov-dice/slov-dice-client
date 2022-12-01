import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { E_Subscribe, I_SubscriptionData } from 'models/shared/socket/lobbyRooms'
import { socket } from 'services/socket'
import { joinRoom } from 'store/profile'
import { roomActions } from 'store/room'
import { LocalStorage } from 'utils/helpers/localStorage'

export const subscribe = createAsyncThunk('roomPage', async (_, { dispatch }) => {
  socket.on(E_Subscribe.getFullRoom, (data: I_SubscriptionData[E_Subscribe.getFullRoom]) => {
    if (data.message && data.status) {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
    }

    if (!data.fullRoom) return
    dispatch(roomActions.setRoom(data.fullRoom))
    dispatch(joinRoom())
  })

  socket.on(
    E_Subscribe.getCharactersWindowSettingsBars,
    (data: I_SubscriptionData[E_Subscribe.getCharactersWindowSettingsBars]) => {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
      dispatch(roomActions.setCharactersWindowSettingsBars(data.bars))
    },
  )

  socket.on(
    E_Subscribe.getCharactersWindowSettingsSpecials,
    (data: I_SubscriptionData[E_Subscribe.getCharactersWindowSettingsSpecials]) => {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
      dispatch(roomActions.setCharactersWindowSettingsSpecials(data.specials))
    },
  )

  socket.on(
    E_Subscribe.getCharactersWindowSettingsEffects,
    (data: I_SubscriptionData[E_Subscribe.getCharactersWindowSettingsEffects]) => {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
      dispatch(roomActions.setCharactersWindowSettingsEffects(data.effects))
    },
  )
})

export const unsubscribe = () => {
  socket.off(E_Subscribe.getFullRoom)
  socket.off(E_Subscribe.getCharactersWindowSettingsBars)
  socket.off(E_Subscribe.getCharactersWindowSettingsSpecials)
  socket.off(E_Subscribe.getCharactersWindowSettingsEffects)
}
