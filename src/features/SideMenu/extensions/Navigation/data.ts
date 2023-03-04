import {
  I_TaskItem,
  E_TaskItemVisibility,
  E_TaskItemActionType,
  E_CustomAction,
} from 'features/Header/models'
import { E_Modal } from 'features/ModalManager/models'
import { E_Panels } from 'features/SidePanel/models'
import { E_Window } from 'features/WindowManager/models'
import { E_Routes } from 'models/routes'
import { E_AppIcon } from 'utils/icons/app'

export const data: I_TaskItem[] = [
  {
    name: 'sideMenu.window.characters',
    icon: E_AppIcon.fileUser,
    visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inRoom],
    actionType: E_TaskItemActionType.window,
    actionPayload: E_Window.characters,
  },
  {
    name: 'sideMenu.window.battlefield',
    icon: E_AppIcon.swords,
    visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inRoom],
    actionType: E_TaskItemActionType.window,
    actionPayload: E_Window.battlefield,
  },

  // {
  //   name: 'sideMenu.window.inventory',
  //   icon: E_AppIcon.backpack,
  //   visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inRoom],
  //   actionType: E_TaskItemActionType.window,
  //   actionPayload: E_Window.inventory,
  // },
  // {
  //   name: 'sideMenu.window.market',
  //   icon: E_AppIcon.store,
  //   visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inRoom],
  //   actionType: E_TaskItemActionType.window,
  //   actionPayload: E_Window.market,
  // },
  // {
  //   name: 'sideMenu.window.player',
  //   icon: E_AppIcon.circlePlay,
  //   visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inRoom],
  //   actionType: E_TaskItemActionType.window,
  //   actionPayload: E_Window.player,
  // },
  {
    name: 'sideMenu.window.textEditor',
    icon: E_AppIcon.fileLines,
    visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inRoom],
    actionType: E_TaskItemActionType.window,
    actionPayload: E_Window.textEditor,
  },
  {
    name: 'sideMenu.window.tutorial',
    icon: E_AppIcon.info,
    visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inRoom],
    actionType: E_TaskItemActionType.window,
    actionPayload: E_Window.tutorial,
  },
  {
    name: 'room-divider-0',
    icon: E_AppIcon.divider,
    visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inRoom],
    actionType: E_TaskItemActionType.none,
    actionPayload: null,
  },
  {
    name: 'sideMenu.roomSettings',
    icon: E_AppIcon.fort,
    visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inRoom],
    actionType: E_TaskItemActionType.modal,
    actionPayload: E_Modal.roomSettings,
  },
  {
    name: 'sideMenu.saveGame',
    icon: E_AppIcon.save,
    visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inRoom],
    actionType: E_TaskItemActionType.modal,
    actionPayload: E_Modal.saveGame,
  },
  {
    name: 'sideMenu.loadGames',
    icon: E_AppIcon.upload,
    visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inRoom],
    actionType: E_TaskItemActionType.modal,
    actionPayload: E_Modal.loadGame,
  },
  {
    name: 'sideMenu.leaveRoom',
    icon: E_AppIcon.leaveRoom,
    visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inRoom],
    actionType: E_TaskItemActionType.none,
    actionPayload: null,
  },
  {
    name: 'room-divider-1',
    icon: E_AppIcon.divider,
    visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inRoom],
    actionType: E_TaskItemActionType.none,
    actionPayload: null,
  },
  {
    name: 'sideMenu.auth',
    icon: E_AppIcon.login,
    visibility: [E_TaskItemVisibility.unAuthenticated],
    actionType: E_TaskItemActionType.push,
    actionPayload: E_Routes.lobby,
  },
  {
    name: 'sideMenu.returnRoom',
    icon: E_AppIcon.enterRoom,
    visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inLobby],
    actionType: E_TaskItemActionType.none,
    actionPayload: null,
  },
  {
    name: 'sideMenu.createRoom',
    icon: E_AppIcon.create,
    visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inLobby],
    actionType: E_TaskItemActionType.modal,
    actionPayload: E_Modal.createRoom,
  },
  // {
  //   name: 'sideMenu.joinRoom',
  //   icon: E_AppIcon.join,
  //   visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inLobby],
  //   actionType: E_TaskItemActionType.modal,
  //   actionPayload: E_Modal.joinRoom,
  // },
  {
    name: 'room-lobby-0',
    icon: E_AppIcon.divider,
    visibility: [E_TaskItemVisibility.authenticated, E_TaskItemVisibility.inLobby],
    actionType: E_TaskItemActionType.none,
    actionPayload: null,
  },
  {
    name: 'sideMenu.users',
    icon: E_AppIcon.users,
    visibility: [
      E_TaskItemVisibility.authenticated,
      E_TaskItemVisibility.inLobby,
      E_TaskItemVisibility.inRoom,
    ],
    actionType: E_TaskItemActionType.panel,
    actionPayload: E_Panels.users,
  },
  {
    name: 'sideMenu.chat',
    icon: E_AppIcon.chat,
    visibility: [
      E_TaskItemVisibility.authenticated,
      E_TaskItemVisibility.inLobby,
      E_TaskItemVisibility.inRoom,
    ],
    actionType: E_TaskItemActionType.panel,
    actionPayload: E_Panels.chat,
  },
  // {
  //   name: 'sideMenu.settings',
  //   icon: E_AppIcon.settings,
  //   visibility: [
  //     E_TaskItemVisibility.authenticated,
  //     E_TaskItemVisibility.inLobby,
  //     E_TaskItemVisibility.inRoom,
  //   ],
  //   actionType: E_TaskItemActionType.modal,
  //   actionPayload: E_Modal.settings,
  // },
  {
    name: 'authenticated-divider-0',
    icon: E_AppIcon.divider,
    visibility: [
      E_TaskItemVisibility.authenticated,
      E_TaskItemVisibility.inLobby,
      E_TaskItemVisibility.inRoom,
    ],
    actionType: E_TaskItemActionType.none,
    actionPayload: null,
  },
  {
    name: 'sideMenu.translator',
    icon: E_AppIcon.language,
    visibility: [E_TaskItemVisibility.all],
    actionType: E_TaskItemActionType.modal,
    actionPayload: E_Modal.translator,
  },
  {
    name: 'sideMenu.logout',
    icon: E_AppIcon.logout,
    visibility: [
      E_TaskItemVisibility.authenticated,
      E_TaskItemVisibility.inLobby,
      E_TaskItemVisibility.inRoom,
    ],
    actionType: E_TaskItemActionType.replace,
    actionPayload: E_CustomAction.logout,
  },
]
