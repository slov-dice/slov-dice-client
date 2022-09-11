import { E_Modal } from 'features/ModalManager/models'
import { E_Icon } from 'utils/helpers/icons'

export enum E_Window {
  characters = 'characters',
  inventory = 'inventory',
  market = 'market',
  battlefield = 'battlefield',
  player = 'player',
  textEditor = 'textEditor',
}

export interface I_WindowHeader {
  title: string
  icon: E_Icon
  settings: E_Modal | null
}

export interface I_Window {
  content: E_Window
  focused: boolean
}
