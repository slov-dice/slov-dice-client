import { I_TaskItem, E_TaskItemVisibility, E_TaskItemActionType } from './models'

import { E_Modal } from 'features/ModalManager/models'
import { E_Panels } from 'features/SidePanel/models'
import { E_Locale } from 'models/shared/app'
import { FullScreen } from 'utils/helpers/fullScreen'
import { LocalStorage } from 'utils/helpers/localStorage'
import { E_AppIcon } from 'utils/icons/app'

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
      icon: E_AppIcon.users,
      visibility: [E_TaskItemVisibility.authenticated],
      actionType: E_TaskItemActionType.panel,
      actionPayload: E_Panels.users,
    },
    {
      name: 'sideMenu.chat',
      icon: E_AppIcon.chat,
      visibility: [E_TaskItemVisibility.authenticated],
      actionType: E_TaskItemActionType.panel,
      actionPayload: E_Panels.chat,
    },
    {
      name: '',
      icon: E_AppIcon.divider,
      visibility: [E_TaskItemVisibility.authenticated],
      actionType: E_TaskItemActionType.none,
      actionPayload: null,
    },
    {
      name: 'full-screen',
      icon: FullScreen.getValue() ? E_AppIcon.compress : E_AppIcon.expand,
      visibility: [E_TaskItemVisibility.all],
      actionType: E_TaskItemActionType.fullScreen,
      actionPayload: null,
    },
    {
      name: 'sideMenu.translator',
      icon: E_AppIcon.language,
      visibility: [E_TaskItemVisibility.all],
      actionType: E_TaskItemActionType.modal,
      actionPayload: E_Modal.translator,
    },
    // {
    //   name: 'sideMenu.settings',
    //   icon: E_AppIcon.settings,
    //   visibility: [E_TaskItemVisibility.authenticated],
    //   actionType: E_TaskItemActionType.modal,
    //   actionPayload: E_Modal.settings,
    // },
  ],
}
