import { FC } from 'react'

import { ConfirmLeaveRoom } from './ConfirmLeaveRoom'
import { CreateRoomModal } from './CreateRoom'
import { EnterPasswordRoom } from './EnterPasswordRoom'
import { GameCharactersModal } from './GameCharacters'
import { GameInventoryModal } from './GameInventory'
import { JoinRoomModal } from './JoinRoom'
import { LoadGameModal } from './LoadGame'
import { ResetPasswordModal } from './RestorePassword'
import { RoomSettingsModal } from './RoomSettings'
import { SaveGameModal } from './SaveGame'
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
  [E_Modal.saveGame]: SaveGameModal,
  [E_Modal.loadGame]: LoadGameModal,
  [E_Modal.enterPasswordRoom]: EnterPasswordRoom,
  [E_Modal.confirmLeaveRoom]: ConfirmLeaveRoom,
}
