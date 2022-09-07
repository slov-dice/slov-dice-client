import { I_TaskItem, E_TaskItemVisibility, E_TaskItemActionType } from './models'

import { E_Modals } from 'features/ModalManager/models'
import { E_Panels } from 'features/SidePanel/models'
import { E_Locale } from 'models/app'
import { FullScreen } from 'utils/helpers/fullScreen'
import { E_Icon } from 'utils/helpers/icons'
import { LocalStorage } from 'utils/helpers/localStorage'

interface UI {
  language: E_Locale
  sidePanel: E_Panels | null
  toolbar: I_TaskItem[]
}

export const initialState: UI = {
  language: LocalStorage.getLanguage() || E_Locale.ru,
  sidePanel: null,
  toolbar: [
    {
      name: 'sideMenu.users',
      icon: E_Icon.users,
      visibility: [E_TaskItemVisibility.authenticated],
      actionType: E_TaskItemActionType.panel,
      actionPayload: E_Panels.users,
    },
    {
      name: 'sideMenu.chat',
      icon: E_Icon.chat,
      visibility: [E_TaskItemVisibility.authenticated],
      actionType: E_TaskItemActionType.panel,
      actionPayload: E_Panels.chat,
    },
    {
      name: '',
      icon: E_Icon.divider,
      visibility: [E_TaskItemVisibility.authenticated],
      actionType: E_TaskItemActionType.none,
      actionPayload: null,
    },
    {
      name: 'full-screen',
      icon: FullScreen.getValue() ? E_Icon.compress : E_Icon.expand,
      visibility: [E_TaskItemVisibility.all],
      actionType: E_TaskItemActionType.fullScreen,
      actionPayload: null,
    },
    {
      name: 'sideMenu.translator',
      icon: E_Icon.language,
      visibility: [E_TaskItemVisibility.all],
      actionType: E_TaskItemActionType.modal,
      actionPayload: E_Modals.translator,
    },
    {
      name: 'sideMenu.settings',
      icon: E_Icon.settings,
      visibility: [E_TaskItemVisibility.authenticated],
      actionType: E_TaskItemActionType.modal,
      actionPayload: E_Modals.settings,
    },
  ],
}
