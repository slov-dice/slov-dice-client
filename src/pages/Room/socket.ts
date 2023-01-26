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
    E_Subscribe.getSettingsBars,
    (data: I_SubscriptionData[E_Subscribe.getSettingsBars]) => {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
      dispatch(
        roomActions.setSettingsBars({
          settingsBars: data.bars,
          characters: data.characters,
          masterDummies: data.masterDummies,
          playersDummies: data.playersDummies,
        }),
      )
    },
  )

  socket.on(
    E_Subscribe.getCharactersSettingsSpecials,
    (data: I_SubscriptionData[E_Subscribe.getCharactersSettingsSpecials]) => {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
      dispatch(
        roomActions.setCharactersSettingsSpecials({
          settingsSpecials: data.specials,
          characters: data.characters,
        }),
      )
    },
  )

  socket.on(
    E_Subscribe.getCharactersSettingsEffects,
    (data: I_SubscriptionData[E_Subscribe.getCharactersSettingsEffects]) => {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
      dispatch(
        roomActions.setCharactersSettingsEffects({
          settingsEffects: data.effects,
          characters: data.characters,
        }),
      )
    },
  )

  socket.on(
    E_Subscribe.getCreatedCharacter,
    (data: I_SubscriptionData[E_Subscribe.getCreatedCharacter]) => {
      const language = LocalStorage.getLanguage()
      const message = data.message[language]
      toast[data.status](message)
      dispatch(roomActions.setCreatedCharacter(data.character))
    },
  )

  socket.on(
    E_Subscribe.getUpdatedCharacter,
    (data: I_SubscriptionData[E_Subscribe.getUpdatedCharacter]) => {
      dispatch(roomActions.setUpdatedCharacter(data.character))
    },
  )

  socket.on(
    E_Subscribe.getRemovedCharacter,
    (data: I_SubscriptionData[E_Subscribe.getRemovedCharacter]) => {
      dispatch(roomActions.setRemovedCharacter(data))
    },
  )

  socket.on(
    E_Subscribe.getCreatedDummy,
    (data: I_SubscriptionData[E_Subscribe.getCreatedDummy]) => {
      dispatch(
        roomActions.setCreatedDummy({
          dummy: data.dummy,
          battlefield: data.battlefield,
        }),
      )
    },
  )

  socket.on(
    E_Subscribe.getDummiesOnBattlefield,
    (data: I_SubscriptionData[E_Subscribe.getDummiesOnBattlefield]) => {
      dispatch(
        roomActions.setDummiesOnBattlefield({
          dummies: data.dummies,
          battlefield: data.battlefield,
        }),
      )
    },
  )

  socket.on(
    E_Subscribe.getInitiationActionOnBattlefield,
    (data: I_SubscriptionData[E_Subscribe.getInitiationActionOnBattlefield]) => {
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
    E_Subscribe.getUpdatedDummy,
    (data: I_SubscriptionData[E_Subscribe.getUpdatedDummy]) => {
      dispatch(
        roomActions.setUpdatedDummy({
          dummy: data.dummy,
          battlefield: data.battlefield,
        }),
      )
    },
  )

  socket.on(
    E_Subscribe.getRemovedDummy,
    (data: I_SubscriptionData[E_Subscribe.getRemovedDummy]) => {
      dispatch(
        roomActions.setRemovedDummy({
          dummyId: data.dummyId,
          battlefield: data.battlefield,
        }),
      )
    },
  )

  socket.on(E_Subscribe.getCreatedDoc, (data: I_SubscriptionData[E_Subscribe.getCreatedDoc]) => {
    dispatch(roomActions.setCreatedDoc({ doc: data.doc }))
  })

  socket.on(E_Subscribe.getUpdatedDoc, (data: I_SubscriptionData[E_Subscribe.getUpdatedDoc]) => {
    dispatch(roomActions.setUpdatedDoc({ doc: data.doc }))
  })

  socket.on(E_Subscribe.getRemovedDoc, (data: I_SubscriptionData[E_Subscribe.getRemovedDoc]) => {
    dispatch(roomActions.setRemovedDoc({ docId: data.docId }))
  })
})

export const unsubscribe = () => {
  socket.off(E_Subscribe.getFullRoom)
  socket.off(E_Subscribe.getSettingsBars)
  socket.off(E_Subscribe.getCharactersSettingsSpecials)
  socket.off(E_Subscribe.getCharactersSettingsEffects)
  socket.off(E_Subscribe.getCreatedCharacter)
  socket.off(E_Subscribe.getUpdatedCharacter)
  socket.off(E_Subscribe.getRemovedCharacter)
  socket.off(E_Subscribe.getCreatedDummy)
  socket.off(E_Subscribe.getDummiesOnBattlefield)
  socket.off(E_Subscribe.getInitiationActionOnBattlefield)
  socket.off(E_Subscribe.getUpdatedDummy)
  socket.off(E_Subscribe.getRemovedDummy)
  socket.off(E_Subscribe.getCreatedDoc)
  socket.off(E_Subscribe.getUpdatedDoc)
  socket.off(E_Subscribe.getRemovedDoc)
}
