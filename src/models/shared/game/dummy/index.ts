import { T_CharacterAction, T_CharacterBar } from '../character'

export type T_DummyId = string

export type T_Dummy = {
  id: T_DummyId
  subId: string
  bars: T_CharacterBar[]
}

export type T_BaseDummy = {
  id: T_DummyId
  name: string
  avatar: string
  actions: T_CharacterAction[]
}
