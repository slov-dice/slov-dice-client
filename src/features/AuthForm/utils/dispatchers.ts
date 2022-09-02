import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'

import { E_Emit } from 'models/socket/lobbyUsers'
import { I_AuthResponse } from 'services/auth/models'
import { socket } from 'services/socket'
import { RootState } from 'store'
import { setProfile } from 'store/profile'
import { LocalStorage } from 'utils/helpers/localStorage'

import type { I_Profile } from 'models/app'

export const connectAuthenticatedUser = (
  data: I_AuthResponse,
  dispatch: ThunkDispatch<RootState, null, AnyAction>,
) => {
  LocalStorage.setAccessToken(data.accessToken)

  socket.emit(E_Emit.setLobbyUserOnline, { userId: data.id })

  // Полученные данные записываем в store
  const profile: I_Profile = {
    id: data.id,
    email: data.email,
    nickname: data.nickname,
    statuses: {
      inRoom: false,
      isAuth: true,
    },
  }
  dispatch(setProfile(profile))
}
