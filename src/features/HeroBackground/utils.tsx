import { ReactNode } from 'react'

import CaesarIcon from './assets/caesar.svg'
import CrackedHelm from './assets/cracked-helm.svg'
import DicesIcon from './assets/dices.svg'
import DrinkIcon from './assets/drink.svg'
import GlassIcon from './assets/glass.svg'
import SwordIcon from './assets/sword.svg'
import VikingIcon from './assets/viking.svg'

export enum E_HeroIcon {
  caesar = 'caesar',
  dices = 'dices',
  drink = 'drink',
  glass = 'glass',
  crackedHelm = 'crackedHelm',
  sword = 'sword',
  viking = 'viking',
}

export const getRandomIconValues = () => {
  return Object.values(E_HeroIcon)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
}

export const getHeroIcon = (icon: E_HeroIcon): ReactNode => {
  switch (icon) {
    case E_HeroIcon.caesar:
      return <CaesarIcon />

    case E_HeroIcon.dices:
      return <DicesIcon />

    case E_HeroIcon.drink:
      return <DrinkIcon />

    case E_HeroIcon.glass:
      return <GlassIcon />

    case E_HeroIcon.crackedHelm:
      return <CrackedHelm />

    case E_HeroIcon.sword:
      return <SwordIcon />

    case E_HeroIcon.viking:
      return <VikingIcon />
  }
}
