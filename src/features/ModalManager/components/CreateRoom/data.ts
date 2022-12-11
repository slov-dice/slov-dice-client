import { T_SwitchOption } from 'components/Switch'
import { t } from 'languages'
import { E_RoomType } from 'models/shared/app'

export const typeOptions: T_SwitchOption[] = [
  { value: E_RoomType.public, label: 'modals.createRoom.fields.type.public' },
  { value: E_RoomType.private, label: 'modals.createRoom.fields.type.private' },
]
export const sizeOptions = [...Array(11)].map(
  (_, index) => `${t('modals.createRoom.fields.size')}:${index + 2}`,
)
