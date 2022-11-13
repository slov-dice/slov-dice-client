import { T_CharacterId } from 'models/shared/game/character'

export interface I_WindowOverlay {
  name: E_WindowOverlay
  isOpen: boolean
  payload?: T_CharacterId
}

export enum E_WindowOverlay {
  createCharacter = 'createCharacter',
  updateCharacter = 'updateCharacter',
  pickCharacterAvatar = 'pickCharacterAvatar',
  updateCharacterEffect = 'updateCharacterEffect',
}
