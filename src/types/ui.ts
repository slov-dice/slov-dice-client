import { E_Routes } from 'utils/constants/routes'
import { E_Icon } from 'utils/helpers/icons'

export enum E_AuthContent {
  registerEntry = 'registerEntry',
  registerForm = 'registerForm',
  loginEntry = 'loginEntry',
  loginForm = 'loginForm',
  forgotPassword = 'forgetPassword',
}

export enum E_Modals {
  translator = 'translator',
  settings = 'settings',
  createRoom = 'createRoom',
  joinRoom = 'joinRoom',
  logout = 'logout',
}

export enum E_Panels {
  chat = 'chat',
  users = 'users',
}

export interface I_Modal {
  window: E_Modals
}

export enum E_TaskItemVisibility {
  all = 'all',
  authenticated = 'authenticated',
  unAuthenticated = 'unAuthenticated',
  inRoom = 'inRoom',
}

export enum E_TaskItemActionType {
  replace = 'replace',
  push = 'push',
  modal = 'modal',
  panel = 'panel',
  fullScreen = 'fullScreen',
  none = 'none',
}

export type T_TaskItemActionPayload = E_Routes | E_Modals | E_Panels | null

export interface I_TaskItem {
  name: string
  icon: E_Icon
  visibility: E_TaskItemVisibility
  actionType: E_TaskItemActionType
  actionPayload: T_TaskItemActionPayload
}
