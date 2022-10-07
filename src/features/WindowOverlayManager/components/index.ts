import { FC } from 'react'

import { CreateCharacterOverlay } from './CreateCharacter'
import { UpdateCharacterOverlay } from './UpdateCharacter'

import { E_WindowOverlay } from '../models'

export const windowOverlayComponents: Record<E_WindowOverlay, FC> = {
  [E_WindowOverlay.createCharacter]: CreateCharacterOverlay,
  [E_WindowOverlay.updateCharacter]: UpdateCharacterOverlay,
}
