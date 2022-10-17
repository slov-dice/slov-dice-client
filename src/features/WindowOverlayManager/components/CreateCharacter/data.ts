import { I_Character, T_CharacterBar, T_CharacterSpecial } from 'models/game/character'

export type T_FormCreateCharacter = Omit<I_Character, 'id' | 'avatar' | 'effects'>

export const mockSpecials: T_CharacterSpecial[] = [
  { name: 'Интеллект', current: 1, color: '#CC397B' },
  { name: 'Сила', current: 1, color: '#CC397B' },
  { name: 'Ловкость', current: 1, color: '#CC397B' },
  { name: 'Харизма', current: 1, color: '#CC397B' },
]

export const mockBars: T_CharacterBar[] = [
  { name: 'Здоровье', current: 100, max: 100, color: '#50C878' },
  { name: 'Выносливость', current: 5, max: 5, color: '#EB7641' },
  { name: 'Мана', current: 50, max: 50, color: '#318CE7' },
]

export const formCreateCharacter: T_FormCreateCharacter = {
  name: 'Имя',
  description: 'Описание',
  level: 1,
  bars: mockBars,
  specials: mockSpecials,
}
