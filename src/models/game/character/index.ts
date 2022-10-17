import { E_GameIcon } from 'utils/helpers/icons/game'

export type T_CharacterId = string
export type T_EffectId = string

export interface I_Character {
  id: T_CharacterId
  name: string
  description: string
  avatar: string
  level: number
  bars: T_CharacterBar[]
  specials: T_CharacterSpecial[]
  effects: T_EffectId[]
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
  color: string
}

export enum E_EffectType {
  negative = 'negative',
  neutral = 'neutral',
  positive = 'positive',
}

export type T_CharacterEffect = {
  id: T_EffectId
  name: string
  description: string
  icon: E_GameIcon
  type: E_EffectType
}
