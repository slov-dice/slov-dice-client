import { I_Character } from 'models/game/character'

export type T_FormCreateCharacter = Omit<
  I_Character,
  'id' | 'avatar' | 'effects' | 'bars' | 'specials'
>

export const formCreateCharacter: T_FormCreateCharacter = {
  name: 'Имя',
  description: 'Описание',
  level: 1,
}
