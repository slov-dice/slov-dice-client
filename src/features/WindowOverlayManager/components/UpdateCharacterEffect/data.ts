import { T_CharacterEffect, E_EffectType } from 'models/game/character'
import { E_GameIcon } from 'utils/helpers/icons/game'

export const dataCharacterEffects: T_CharacterEffect[] = [
  {
    id: '1',
    name: 'Сходил в качалку',
    description: '+2 к вын., +2 к силе',
    icon: E_GameIcon.muscleUp,
    type: E_EffectType.positive,
  },
  {
    id: '2',
    name: 'Рвота',
    description: '-2 к макс. вын.',
    icon: E_GameIcon.vomiting,
    type: E_EffectType.negative,
  },
  {
    id: '3',
    name: 'Перелом',
    description: '-10 хп, -2 к макс. вын.',
    icon: E_GameIcon.brokenBone,
    type: E_EffectType.negative,
  },
  {
    id: '4',
    name: 'Переел',
    description: '+20 к макс. хп, -1 к макс. вын.',
    icon: E_GameIcon.muscleFat,
    type: E_EffectType.neutral,
  },
]

export const getEffect = (id: string): T_CharacterEffect =>
  dataCharacterEffects.find((effect) => effect.id === id) || dataCharacterEffects[0]
