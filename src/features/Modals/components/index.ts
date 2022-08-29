import { FC } from 'react'

import { CreateRoomModal } from './CreateRoom'
import { ResetPasswordModal } from './RestorePassword'
import { SettingsModal } from './Settings'
import { TranslatorModal } from './Translator'

import { E_Modals } from '../models'

export const ModalComponents: Record<E_Modals, FC> = {
  [E_Modals.translator]: TranslatorModal,
  [E_Modals.settings]: SettingsModal,
  [E_Modals.createRoom]: CreateRoomModal,
  [E_Modals.joinRoom]: TranslatorModal,
  [E_Modals.logout]: TranslatorModal,
  [E_Modals.restorePassword]: ResetPasswordModal,
}
