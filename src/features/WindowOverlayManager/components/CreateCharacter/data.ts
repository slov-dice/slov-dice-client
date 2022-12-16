import { I_Character } from 'models/shared/game/character'

export type T_FormCreateCharacter = Omit<
  I_Character,
  'id' | 'avatar' | 'effects' | 'bars' | 'specials' | 'actions'
>

export const formCreateCharacter: T_FormCreateCharacter = {
  name: 'Имя/Name',
  description: 'Описание/Description',
  level: 1,
}
