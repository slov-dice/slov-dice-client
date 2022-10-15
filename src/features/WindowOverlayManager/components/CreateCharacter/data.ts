import { I_Character, T_CharacterBar } from 'models/game/character'

export type T_FormCreateCharacter = Omit<I_Character, 'avatar'>

export const mockBars: T_CharacterBar[] = [
  { name: 'Здоровье', current: 0, max: 2400, color: '#50C878' },
  { name: 'Выносливость', current: 2, max: 10, color: '#EB7641' },
  { name: 'Мана', current: 1800, max: 1200, color: '#318CE7' },
]

export const formCreateCharacter: T_FormCreateCharacter = {
  id: '',
  name: 'Имя',
  description: 'Описание',
  level: 1,
  bars: mockBars,
  effects: [],
  specials: [],
}
