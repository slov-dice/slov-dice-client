import { T_CharacterId } from 'models/shared/game/character'

export interface I_WindowOverlay {
  name: E_WindowOverlay
  payload?: T_CharacterId
}

export enum E_WindowOverlay {
  createCharacter = 'createCharacter',
  createDummy = 'createDummy',
  updateCharacter = 'updateCharacter',
  pickCharacterAvatar = 'pickCharacterAvatar',
  updateCharacterEffect = 'updateCharacterEffect',
  actionsEditor = 'actionsEditor',
  battlefieldEditor = 'battlefieldEditor',
  pickDummyAvatar = 'pickDummyAvatar',
  updateDummy = 'updateDummy',
  gridDocs = 'gridDocs',
}
