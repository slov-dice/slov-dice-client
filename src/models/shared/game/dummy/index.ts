import { T_CharacterAction, T_CharacterBarId } from '../character'

export type T_DummyId = string

export type T_Dummy = {
  id: T_DummyId
  subId: string
  barsCurrent: { id: T_CharacterBarId; value: number }[]
}

export type T_BaseDummy = {
  id: T_DummyId
  name: string
  avatar: string
  actions: T_CharacterAction[]
  barsMax: { id: T_CharacterBarId; max: number; include: boolean }[]
}
