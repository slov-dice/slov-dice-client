import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
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
      dispatch(
        roomActions.setCharactersWindowSettingsBars({
          settingsBars: data.bars,
          characters: data.characters,
          masterDummies: data.masterDummies,
          playersDummies: data.playersDummies,
        }),
      )
    },
  )

  socket.on(
    E_Subscribe.getCharactersWindowSettingsSpecials,
    (data: I_SubscriptionData[E_Subscribe.getCharactersWindowSettingsSpecials]) => {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
      dispatch(
        roomActions.setCharactersWindowSettingsSpecials({
          settingsSpecials: data.specials,
          characters: data.characters,
        }),
      )
    },
  )

  socket.on(
    E_Subscribe.getCharactersWindowSettingsEffects,
    (data: I_SubscriptionData[E_Subscribe.getCharactersWindowSettingsEffects]) => {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
      dispatch(
        roomActions.setCharactersWindowSettingsEffects({
          settingsEffects: data.effects,
          characters: data.characters,
        }),
      )
    },
  )

  socket.on(
    E_Subscribe.getCreatedCharacterInCharactersWindow,
    (data: I_SubscriptionData[E_Subscribe.getCreatedCharacterInCharactersWindow]) => {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
      dispatch(roomActions.setCreatedCharacterInCharactersWindow(data.character))
    },
  )

  socket.on(
    E_Subscribe.getUpdatedCharacterInCharactersWindow,
    (data: I_SubscriptionData[E_Subscribe.getUpdatedCharacterInCharactersWindow]) => {
      dispatch(roomActions.setUpdatedCharacterInCharactersWindow(data.character))
    },
  )

  socket.on(
    E_Subscribe.getRemovedCharacterInCharactersWindow,
    (data: I_SubscriptionData[E_Subscribe.getRemovedCharacterInCharactersWindow]) => {
      dispatch(roomActions.setRemovedCharacterInCharactersWindow(data))
    },
  )

  socket.on(
    E_Subscribe.getCreatedDummyInBattlefieldWindow,
    (data: I_SubscriptionData[E_Subscribe.getCreatedDummyInBattlefieldWindow]) => {
      dispatch(
        roomActions.setCreatedDummyInBattlefieldWindow({ dummy: data.dummy, field: data.field }),
      )
    },
  )

  socket.on(
    E_Subscribe.getDummiesOnFieldInBattlefieldWindow,
    (data: I_SubscriptionData[E_Subscribe.getDummiesOnFieldInBattlefieldWindow]) => {
      dispatch(
        roomActions.setDummiesOnFieldInBattlefieldWindow({
          dummies: data.dummies,
          field: data.field,
        }),
      )
    },
  )

  socket.on(
    E_Subscribe.getInitiationActionInBattlefieldWindow,
    (data: I_SubscriptionData[E_Subscribe.getInitiationActionInBattlefieldWindow]) => {
      dispatch(
        roomActions.setCharactersAndDummies({
          characters: data.characters,
          masterField: data.masterField,
          playersField: data.playersField,
        }),
      )
      dispatch(
        gameBattlefieldActions.setAction({
          from: data.from,
          to: data.to,
        }),
      )
    },
  )

  socket.on(
    E_Subscribe.getUpdatedDummyInBattlefieldWindow,
    (data: I_SubscriptionData[E_Subscribe.getUpdatedDummyInBattlefieldWindow]) => {
      dispatch(
        roomActions.setUpdatedDummyInBattlefieldWindow({ dummy: data.dummy, field: data.field }),
      )
    },
  )

  socket.on(
    E_Subscribe.getRemovedDummyInBattlefieldWindow,
    (data: I_SubscriptionData[E_Subscribe.getRemovedDummyInBattlefieldWindow]) => {
      dispatch(
        roomActions.setRemovedDummyInBattlefieldWindow({
          dummyId: data.dummyId,
          field: data.field,
        }),
      )
    },
  )
})

export const unsubscribe = () => {
  socket.off(E_Subscribe.getFullRoom)
  socket.off(E_Subscribe.getCharactersWindowSettingsBars)
  socket.off(E_Subscribe.getCharactersWindowSettingsSpecials)
  socket.off(E_Subscribe.getCharactersWindowSettingsEffects)
  socket.off(E_Subscribe.getCreatedCharacterInCharactersWindow)
  socket.off(E_Subscribe.getUpdatedCharacterInCharactersWindow)
  socket.off(E_Subscribe.getRemovedCharacterInCharactersWindow)
  socket.off(E_Subscribe.getCreatedDummyInBattlefieldWindow)
  socket.off(E_Subscribe.getDummiesOnFieldInBattlefieldWindow)
  socket.off(E_Subscribe.getInitiationActionInBattlefieldWindow)
  socket.off(E_Subscribe.getUpdatedDummyInBattlefieldWindow)
  socket.off(E_Subscribe.getRemovedDummyInBattlefieldWindow)
}
