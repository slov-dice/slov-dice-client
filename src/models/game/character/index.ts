import { E_GameIcon } from 'utils/helpers/icons/game'

export interface I_Character {
  id: string
  name: string
  description: string
  avatar: string
  level: number
  bars: T_CharacterBar[]
  specials: T_CharacterSpecial[]
  effects: T_CharacterEffect[]
}

export type T_CharacterBar = {
  name: string
  current: number
  max: number
  color: string
}

export type T_CharacterSpecial = {
  name: string
  current: number
  max: number
  color: string
}

export enum E_EffectType {
  negative = 'negative',
  neutral = 'neutral',
  positive = 'positive',
}

export type T_CharacterEffect = {
  name: string
  description: string
  icon: E_GameIcon
  type: E_EffectType
}
