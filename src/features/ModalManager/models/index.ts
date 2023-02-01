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
}
export interface I_Modal {
  content: E_Modal
}
