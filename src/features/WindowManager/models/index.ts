import { E_Modal } from 'features/ModalManager/models'
import { E_AppIcon } from 'utils/icons/app'

export enum E_Window {
  characters = 'characters',
  inventory = 'inventory',
  market = 'market',
  battlefield = 'battlefield',
  player = 'player',
  textEditor = 'textEditor',
  tutorial = 'tutorial',
}

export interface I_WindowHeader {
  title: string
  icon: E_AppIcon
  settings: E_Modal | null
}

export interface I_Window {
  content: E_Window
  focused: boolean
}
