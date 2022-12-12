import { T_SwitchOption } from 'components/Switch'
import { E_ChatType } from 'models/shared/app'

export const instanceUsersOptions: T_SwitchOption[] = [
  { value: E_ChatType.lobby, label: 'sidePanels.users.lobby.title' },
  { value: E_ChatType.room, label: 'sidePanels.users.room.title' },
]
