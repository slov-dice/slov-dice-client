import { T_CharacterEffect } from 'models/game/character'

export const getEffect = (id: string, effects: T_CharacterEffect[]): T_CharacterEffect =>
  effects.find((effect) => effect.id === id) || effects[0]
