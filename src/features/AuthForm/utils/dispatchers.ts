import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'

import { I_AuthResponse } from 'services/auth/models'
import { RootState } from 'store'
import { setProfile } from 'store/profile'
import { LocalStorage } from 'utils/helpers/localStorage'

import type { I_Profile } from 'models/app'

export const connectAuthenticatedUser = (
  data: I_AuthResponse,
  dispatch: ThunkDispatch<RootState, null, AnyAction>,
) => {
  LocalStorage.setAccessToken(data.accessToken)

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
