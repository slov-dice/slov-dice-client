import imageChar1 from 'assets/images/char1.png'
import imageChar2 from 'assets/images/char2.png'
import imageChar4 from 'assets/images/char4.png'
import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import {
  E_EffectType,
  I_Character,
  T_CharacterBar,
  T_CharacterEffect,
  T_CharacterSpecial,
} from 'models/game/character'
import { E_GameIcon } from 'utils/helpers/icons/game'

export const characters: I_Character[] = [
  {
    id: '123',
    avatar: imageChar1,
    description: 'Описание1',
    name: 'Анабель',
    level: 3,
    bars: [
      { name: 'Здоровье', current: 120, max: 2400, color: '#50C878' },
      { name: 'Выносливость', current: 3, max: 10, color: '#EB7641' },
      { name: 'Мана', current: 1200, max: 1200, color: '#318CE7' },
    ],
    specials: [
      { name: 'Интеллект', current: 3, color: '#CC397B' },
      { name: 'Сила', current: 10, color: '#CC397B' },
      { name: 'Ловкость', current: 1, color: '#CC397B' },
      { name: 'Харизма', current: 18, color: '#CC397B' },
    ],
    effects: ['1', '2', '3'],
  },
  {
    id: '124',
    avatar: imageChar2,
    description: 'Описание1',
    name: 'Элиза',
    level: 9,
    bars: [
      { name: 'Здоровье', current: 120, max: 240, color: '#50C878' },
      { name: 'Выносливость', current: 0, max: 6, color: '#EB7641' },
      { name: 'Мана', current: 10, max: 100, color: '#318CE7' },
    ],
    specials: [
      { name: 'Интеллект', current: 3, color: '#CC397B' },
      { name: 'Сила', current: 10, color: '#CC397B' },
      { name: 'Ловкость', current: 1, color: '#CC397B' },
      { name: 'Харизма', current: 18, color: '#CC397B' },
    ],
    effects: ['3'],
  },
  {
    id: '126',
    description: 'Описание1',
    avatar: imageChar4,
    name: 'Картен',
    level: 2,
    bars: [
      { name: 'Здоровье', current: 10, max: 240, color: '#50C878' },
      { name: 'Выносливость', current: 12, max: 12, color: '#EB7641' },
      { name: 'Мана', current: 10, max: 100, color: '#318CE7' },
    ],
    specials: [
      { name: 'Интеллект', current: 3, color: '#CC397B' },
      { name: 'Сила', current: 10, color: '#CC397B' },
      { name: 'Ловкость', current: 1, color: '#CC397B' },
      { name: 'Харизма', current: 18, color: '#CC397B' },
    ],
    effects: ['1', '2', '3', '4'],
  },
]

export const initialStateSlice: I_WindowOverlay[] = [
  {
    isOpen: false,
    name: E_WindowOverlay.createCharacter,
  },
  {
    isOpen: false,
    name: E_WindowOverlay.updateCharacter,
  },
  {
    isOpen: false,
    name: E_WindowOverlay.pickCharacterAvatar,
  },
  {
    isOpen: false,
    name: E_WindowOverlay.updateCharacterEffect,
  },
]

export const characterBars: T_CharacterBar[] = [
  { name: 'Здоровье', current: 100, max: 100, color: '#50C878' },
  { name: 'Выносливость', current: 5, max: 5, color: '#EB7641' },
  { name: 'Мана', current: 50, max: 50, color: '#318CE7' },
]

export const characterSpecials: T_CharacterSpecial[] = [
  { name: 'Интеллект', current: 1, color: '#CC397B' },
  { name: 'Сила', current: 1, color: '#CC397B' },
  { name: 'Ловкость', current: 1, color: '#CC397B' },
  { name: 'Харизма', current: 1, color: '#CC397B' },
]

export const characterEffects: T_CharacterEffect[] = [
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
