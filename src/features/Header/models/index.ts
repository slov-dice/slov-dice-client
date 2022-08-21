import { E_Modals } from 'features/Modals/models'
import { E_Panels } from 'features/SidePanel/models'
import { E_Routes } from 'models/routes'
import { E_Icon } from 'utils/helpers/icons'

export enum E_CustomAction {
  logout = 'logout',
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

export type T_TaskItemActionPayload = E_Routes | E_Modals | E_Panels | E_CustomAction | null

export interface I_TaskItem {
  name: string
  icon: E_Icon
  visibility: E_TaskItemVisibility
  actionType: E_TaskItemActionType
  actionPayload: T_TaskItemActionPayload
}
