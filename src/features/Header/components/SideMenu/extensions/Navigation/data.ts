import {
  E_Panels,
  I_TaskItem,
  E_TaskItemVisibility,
  E_TaskItemActionType,
  E_CustomAction,
} from 'features/Header/models'
import { E_Modals } from 'features/Modals/models'
import { E_Routes } from 'models/routes'
import { E_Icon } from 'utils/helpers/icons'

export const data: I_TaskItem[] = [
  {
    name: 'sideMenu.auth',
    icon: E_Icon.login,
    visibility: E_TaskItemVisibility.unAuthenticated,
    actionType: E_TaskItemActionType.push,
    actionPayload: E_Routes.lobby,
  },
  {
    name: 'sideMenu.createRoom',
    icon: E_Icon.create,
    visibility: E_TaskItemVisibility.authenticated,
    actionType: E_TaskItemActionType.modal,
    actionPayload: E_Modals.createRoom,
  },
  {
    name: 'sideMenu.joinRoom',
    icon: E_Icon.join,
    visibility: E_TaskItemVisibility.authenticated,
    actionType: E_TaskItemActionType.modal,
    actionPayload: E_Modals.joinRoom,
  },
  {
    name: 'sideMenu.users',
    icon: E_Icon.users,
    visibility: E_TaskItemVisibility.authenticated,
    actionType: E_TaskItemActionType.panel,
    actionPayload: E_Panels.users,
  },
  {
    name: 'sideMenu.chat',
    icon: E_Icon.chat,
    visibility: E_TaskItemVisibility.authenticated,
    actionType: E_TaskItemActionType.panel,
    actionPayload: E_Panels.chat,
  },
  {
    name: 'sideMenu.settings',
    icon: E_Icon.settings,
    visibility: E_TaskItemVisibility.authenticated,
    actionType: E_TaskItemActionType.modal,
    actionPayload: E_Modals.settings,
  },
  {
    name: '',
    icon: E_Icon.divider,
    visibility: E_TaskItemVisibility.authenticated,
    actionType: E_TaskItemActionType.none,
    actionPayload: null,
  },
  {
    name: 'sideMenu.translator',
    icon: E_Icon.language,
    visibility: E_TaskItemVisibility.all,
    actionType: E_TaskItemActionType.modal,
    actionPayload: E_Modals.translator,
  },
  {
    name: 'sideMenu.logout',
    icon: E_Icon.logout,
    visibility: E_TaskItemVisibility.authenticated,
    actionType: E_TaskItemActionType.replace,
    actionPayload: E_CustomAction.logout,
  },
]
