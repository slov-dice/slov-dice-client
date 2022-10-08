import imageChar1 from 'assets/images/char1.png'
import imageChar2 from 'assets/images/char2.png'
import imageChar3 from 'assets/images/char3.png'
import imageChar4 from 'assets/images/char4.png'
import { I_Character, E_EffectType } from 'models/game/character'
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
      { name: 'Интеллект', current: 3, max: 20, color: '#CC397B' },
      { name: 'Сила', current: 10, max: 20, color: '#CC397B' },
      { name: 'Ловкость', current: 1, max: 20, color: '#CC397B' },
      { name: 'Харизма', current: 18, max: 20, color: '#CC397B' },
    ],
    effects: [
      {
        name: 'Сходил в качалку',
        description: '+2 к максимальной выносливости, +2 к силе',
        icon: E_GameIcon.muscleUp,
        type: E_EffectType.positive,
      },
      {
        name: 'Рвота',
        description: '-2 к максимальной выносливости',
        icon: E_GameIcon.vomiting,
        type: E_EffectType.negative,
      },
      {
        name: 'Перелом',
        description: '-10 хп, -2 к максимальной выносливости',
        icon: E_GameIcon.brokenBone,
        type: E_EffectType.negative,
      },
    ],
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
      { name: 'Интеллект', current: 3, max: 20, color: '#CC397B' },
      { name: 'Сила', current: 10, max: 20, color: '#CC397B' },
      { name: 'Ловкость', current: 1, max: 20, color: '#CC397B' },
      { name: 'Харизма', current: 18, max: 20, color: '#CC397B' },
    ],
    effects: [
      {
        name: 'Перелом',
        description: '-10 хп, -2 к максимальной выносливости',
        icon: E_GameIcon.brokenBone,
        type: E_EffectType.negative,
      },
    ],
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
      { name: 'Интеллект', current: 3, max: 20, color: '#CC397B' },
      { name: 'Сила', current: 10, max: 20, color: '#CC397B' },
      { name: 'Ловкость', current: 1, max: 20, color: '#CC397B' },
      { name: 'Харизма', current: 18, max: 20, color: '#CC397B' },
    ],
    effects: [
      {
        name: 'Сходил в качалку',
        description: '+2 к выносливости, +2 к силе',
        icon: E_GameIcon.muscleUp,
        type: E_EffectType.positive,
      },
      {
        name: 'Переел',
        description: '+20 к максимальному хп, -1 к максимальной выносливости',
        icon: E_GameIcon.muscleFat,
        type: E_EffectType.neutral,
      },
      {
        name: 'Рвота',
        description: '-2 к максимальной выносливости',
        icon: E_GameIcon.vomiting,
        type: E_EffectType.negative,
      },
      {
        name: 'Перелом',
        description: '-10 хп, -2 к максимальной выносливости',
        icon: E_GameIcon.brokenBone,
        type: E_EffectType.negative,
      },
    ],
  },
]
