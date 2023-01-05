import {
  T_BaseCharacterBar,
  T_BaseCharacterEffect,
  T_BaseCharacterSpecial,
  T_CharacterBar,
  T_CharacterBarId,
  T_CharacterEffectId,
  T_CharacterSpecialId,
} from 'models/shared/game/character'
import {
  T_BaseDummy,
  T_DummyBarsCurrent,
  T_DummyBarsMax,
  T_DummyId,
} from 'models/shared/game/dummy'

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

export const getDummy = (id: T_DummyId, dummies: T_BaseDummy[]): T_BaseDummy =>
  dummies.find((dummy) => dummy.id === id) || dummies[0]

export const getDummyBars = (
  barsCurrent: T_DummyBarsCurrent[],
  barsMax: T_DummyBarsMax[],
): T_CharacterBar[] =>
  barsMax.reduce((acc, current) => {
    if (current.include) {
      const currentBar = barsCurrent.find((bar) => bar.id === current.id)
      acc.push({ id: current.id, current: currentBar?.value || 0, max: current.max })
    }
    return acc
  }, [] as T_CharacterBar[])
