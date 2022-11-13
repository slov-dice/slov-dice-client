import { T_BaseCharacterEffect } from 'models/shared/game/character'

export const getEffect = (id: string, effects: T_BaseCharacterEffect[]): T_BaseCharacterEffect =>
  effects.find((effect) => effect.id === id) || effects[0]
