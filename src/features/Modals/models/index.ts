export enum E_Modals {
  translator = 'translator',
  settings = 'settings',
  createRoom = 'createRoom',
  joinRoom = 'joinRoom',
  logout = 'logout',
  restorePassword = 'restorePassword',
}
export interface I_Modal {
  window: E_Modals
}
