import { FC } from 'react'

import { AddCharacterEffectOverlay } from './AddCharacterEffect'
import { CreateCharacterOverlay } from './CreateCharacter'
import { PickCharacterAvatarOverlay } from './PickCharacterAvatar'
import { UpdateCharacterOverlay } from './UpdateCharacter'

import { E_WindowOverlay } from '../models'

export const windowOverlayComponents: Record<E_WindowOverlay, FC> = {
  [E_WindowOverlay.createCharacter]: CreateCharacterOverlay,
  [E_WindowOverlay.updateCharacter]: UpdateCharacterOverlay,
  [E_WindowOverlay.pickCharacterAvatar]: PickCharacterAvatarOverlay,
  [E_WindowOverlay.addCharacterEffect]: AddCharacterEffectOverlay,
}
