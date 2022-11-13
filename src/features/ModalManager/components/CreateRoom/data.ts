import { T_SwitchOption } from 'components/Switch/model'
import { E_RoomType } from 'models/shared/app'

export const typeOptions: T_SwitchOption[] = [
  { value: E_RoomType.public, label: 'Public' },
  { value: E_RoomType.private, label: 'Private' },
]
export const sizeOptions = [...Array(11)].map((_, index) => `ИГРОКОВ:${index + 2}`)
