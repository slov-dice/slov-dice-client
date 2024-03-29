import { E_Modal } from 'features/ModalManager/models'
import { E_Panels } from 'features/SidePanel/models'
import { E_Window } from 'features/WindowManager/models'
import { E_Routes } from 'models/routes'
import { E_AppIcon } from 'utils/icons/app'

export enum E_CustomAction {
  logout = 'logout',
}

export enum E_TaskItemVisibility {
  all = 'all',
  authenticated = 'authenticated',
  unAuthenticated = 'unAuthenticated',
  inLobby = 'inLobby',
  inRoom = 'inRoom',
}

export enum E_TaskItemActionType {
  replace = 'replace',
  push = 'push',
  modal = 'modal',
  panel = 'panel',
  window = 'window',
  fullScreen = 'fullScreen',
  none = 'none',
}

export type T_TaskItemActionPayload =
  | E_Routes
  | E_Modal
  | E_Panels
  | E_Window
  | E_CustomAction
  | null

export interface I_TaskItem {
  name: string
  icon: E_AppIcon
  visibility: E_TaskItemVisibility[]
  actionType: E_TaskItemActionType
  actionPayload: T_TaskItemActionPayload
}
