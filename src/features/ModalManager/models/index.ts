import { T_RoomId } from 'models/shared/app'

export enum E_Modal {
  translator = 'translator',
  settings = 'settings',
  createRoom = 'createRoom',
  joinRoom = 'joinRoom',
  roomSettings = 'roomSettings',
  restorePassword = 'restorePassword',
  gameInventory = 'gameInventory',
  gameCharacters = 'gameCharacters',
  saveGame = 'saveGame',
  loadGame = 'loadGame',
  enterPasswordRoom = 'enterPasswordRoom',
}
export interface I_Modal {
  content: E_Modal
}

export type T_EnterPasswordRoomPayload = {
  roomId: T_RoomId
}
