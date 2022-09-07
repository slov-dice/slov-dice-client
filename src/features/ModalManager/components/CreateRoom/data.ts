import { T_SwitchOption } from 'components/Switch'
import { E_RoomType } from 'models/app'

export const typeOptions: T_SwitchOption[] = [
  { value: E_RoomType.public, label: 'Public' },
  { value: E_RoomType.private, label: 'Private' },
]
export const sizeOptions = [...Array(11)].map((_, index) => `ИГРОКОВ:${index + 2}`)
