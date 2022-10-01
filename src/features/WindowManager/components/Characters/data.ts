import imageChar1 from 'assets/images/char1.png'
import imageChar2 from 'assets/images/char2.png'
import imageChar3 from 'assets/images/char3.png'
import imageChar4 from 'assets/images/char4.png'
import { I_Character } from 'models/game/character'

export const characters: I_Character[] = [
  {
    avatar: imageChar1,
    name: 'Анабель',
    level: 3,
    bars: [
      { name: 'Здоровье', current: 120, max: 240, color: '#50C878' },
      { name: 'Выносливость', current: 120, max: 240, color: '#EB4C42' },
      { name: 'Мана', current: 10, max: 100, color: '#318CE7' },
    ],
    specials: [
      { name: 'Интеллект', current: 3, max: 20, color: '#CC397B' },
      { name: 'Сила', current: 10, max: 20, color: '#CC397B' },
      { name: 'Ловкость', current: 1, max: 20, color: '#CC397B' },
      { name: 'Харизма', current: 18, max: 20, color: '#CC397B' },
    ],
    effects: [{ name: 'Рвота' }],
  },
  {
    avatar: imageChar2,
    name: 'Элиза',
    level: 9,
    bars: [
      { name: 'Здоровье', current: 120, max: 240, color: '#50C878' },
      { name: 'Выносливость', current: 120, max: 240, color: '#EB4C42' },
      { name: 'Мана', current: 10, max: 100, color: '#318CE7' },
    ],
    specials: [
      { name: 'Интеллект', current: 3, max: 20, color: '#CC397B' },
      { name: 'Сила', current: 10, max: 20, color: '#CC397B' },
      { name: 'Ловкость', current: 1, max: 20, color: '#CC397B' },
      { name: 'Харизма', current: 18, max: 20, color: '#CC397B' },
    ],
    effects: [{ name: 'Перелом' }],
  },
  {
    avatar: imageChar3,
    name: 'Фанель',
    level: 12,
    bars: [
      { name: 'Здоровье', current: 120, max: 240, color: '#50C878' },
      { name: 'Выносливость', current: 120, max: 240, color: '#EB4C42' },
      { name: 'Мана', current: 10, max: 100, color: '#318CE7' },
    ],
    specials: [
      { name: 'Интеллект', current: 3, max: 20, color: '#CC397B' },
      { name: 'Сила', current: 10, max: 20, color: '#CC397B' },
      { name: 'Ловкость', current: 1, max: 20, color: '#CC397B' },
      { name: 'Харизма', current: 18, max: 20, color: '#CC397B' },
    ],
    effects: [{ name: 'Кровь' }],
  },
  {
    avatar: imageChar4,
    name: 'Картен',
    level: 2,
    bars: [
      { name: 'Здоровье', current: 120, max: 240, color: '#50C878' },
      { name: 'Выносливость', current: 120, max: 240, color: '#EB4C42' },
      { name: 'Мана', current: 10, max: 100, color: '#318CE7' },
    ],
    specials: [
      { name: 'Интеллект', current: 3, max: 20, color: '#CC397B' },
      { name: 'Сила', current: 10, max: 20, color: '#CC397B' },
      { name: 'Ловкость', current: 1, max: 20, color: '#CC397B' },
      { name: 'Харизма', current: 18, max: 20, color: '#CC397B' },
    ],
    effects: [{ name: 'Сонный' }],
  },
]
