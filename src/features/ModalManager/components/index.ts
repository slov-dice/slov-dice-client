import { FC } from 'react'

import { CreateRoomModal } from './CreateRoom'
import { GameCharactersModal } from './GameCharacters'
import { GameInventoryModal } from './GameInventory'
import { JoinRoomModal } from './JoinRoom'
import { ResetPasswordModal } from './RestorePassword'
import { RoomSettingsModal } from './RoomSettings'
import { SettingsModal } from './Settings'
import { TranslatorModal } from './Translator'

import { E_Modal } from '../models'

export const modalComponents: Record<E_Modal, FC> = {
  [E_Modal.translator]: TranslatorModal,
  [E_Modal.settings]: SettingsModal,
  [E_Modal.createRoom]: CreateRoomModal,
  [E_Modal.joinRoom]: JoinRoomModal,
  [E_Modal.roomSettings]: RoomSettingsModal,
  [E_Modal.restorePassword]: ResetPasswordModal,
  [E_Modal.gameInventory]: GameInventoryModal,
  [E_Modal.gameCharacters]: GameCharactersModal,
}
