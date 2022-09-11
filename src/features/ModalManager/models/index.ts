export enum E_Modal {
  translator = 'translator',
  settings = 'settings',
  createRoom = 'createRoom',
  joinRoom = 'joinRoom',
  roomSettings = 'roomSettings',
  restorePassword = 'restorePassword',
  gameInventory = 'gameInventory',
  gameCharacters = 'gameCharacters',
}
export interface I_Modal {
  content: E_Modal
}
