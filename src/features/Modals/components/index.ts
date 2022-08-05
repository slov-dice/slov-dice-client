import { CreateRoomModal } from './CreateRoom'
import { SettingsModal } from './Settings'
import { TranslatorModal } from './Translator'

import { E_Modals } from 'models/ui'

export const ModalComponents = {
  [E_Modals.translator]: TranslatorModal,
  [E_Modals.settings]: SettingsModal,
  [E_Modals.createRoom]: TranslatorModal,
  [E_Modals.joinRoom]: TranslatorModal,
  [E_Modals.logout]: TranslatorModal,
}
