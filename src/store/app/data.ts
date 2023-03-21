import { E_Locale } from 'models/shared/app'
import { E_Theme } from 'models/styled'
import { LocalStorage } from 'utils/helpers/localStorage'

export enum E_AppLoader {
  isRoomCreating = 'isRoomCreating',
  isRoomJoining = 'isRoomJoining',
}

interface I_InitialState {
  language: E_Locale
  theme: E_Theme
  loaders: Record<E_AppLoader, boolean>
}

export const initialState: I_InitialState = {
  language: LocalStorage.getLanguage() || E_Locale.ru,
  theme: E_Theme.classic,
  loaders: {
    isRoomCreating: false,
    isRoomJoining: false,
  },
}
