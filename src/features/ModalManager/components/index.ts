import { FC } from 'react'

import { CreateRoomModal } from './CreateRoom'
import { JoinRoomModal } from './JoinRoom'
import { ResetPasswordModal } from './RestorePassword'
import { RoomSettingsModal } from './RoomSettings'
import { SettingsModal } from './Settings'
import { TranslatorModal } from './Translator'

import { E_Modals } from '../models'

export const ModalComponents: Record<E_Modals, FC> = {
  [E_Modals.translator]: TranslatorModal,
  [E_Modals.settings]: SettingsModal,
  [E_Modals.createRoom]: CreateRoomModal,
  [E_Modals.joinRoom]: JoinRoomModal,
  [E_Modals.roomSettings]: RoomSettingsModal,
  [E_Modals.restorePassword]: ResetPasswordModal,
}
