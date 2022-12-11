import { T_SwitchOption } from 'components/Switch'
import { E_ChatType } from 'models/shared/app'

export const instanceChatOptions: T_SwitchOption[] = [
  { value: E_ChatType.lobby, label: 'sidePanels.chat.lobby.title' },
  { value: E_ChatType.room, label: 'sidePanels.chat.room.title' },
]
