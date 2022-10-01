export interface I_Character {
  name: string
  avatar: string
  level: number
  bars: T_CharacterBar[]
  specials: T_Special[]
  effects: T_Effect[]
}

export type T_CharacterBar = {
  name: string
  current: number
  max: number
  color: string
}

export type T_Special = {
  name: string
  current: number
  max: number
  color: string
}

export type T_Effect = {
  name: string
}
