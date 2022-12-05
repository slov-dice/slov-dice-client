import {
  T_BaseCharacterBar,
  T_BaseCharacterEffect,
  T_BaseCharacterSpecial,
  T_CharacterBarId,
  T_CharacterEffectId,
  T_CharacterSpecialId,
} from 'models/shared/game/character'

export const getBar = (id: T_CharacterBarId, bars: T_BaseCharacterBar[]): T_BaseCharacterBar =>
  bars.find((bar) => bar.id === id) || bars[0]

export const getSpecial = (
  id: T_CharacterSpecialId,
  specials: T_BaseCharacterSpecial[],
): T_BaseCharacterSpecial => specials.find((special) => special.id === id) || specials[0]

export const getEffect = (
  id: T_CharacterEffectId,
  effects: T_BaseCharacterEffect[],
): T_BaseCharacterEffect => effects.find((effect) => effect.id === id) || effects[0]
