import { FC } from 'react'

import { BattlefieldActionsEditor } from './BattlefieldActionsEditor'
import { CreateCharacterOverlay } from './CreateCharacter'
import { PickCharacterAvatarOverlay } from './PickCharacterAvatar'
import { UpdateCharacterOverlay } from './UpdateCharacter'
import { UpdateCharacterEffectOverlay } from './UpdateCharacterEffect'

import { E_WindowOverlay } from '../models'

export const windowOverlayComponents: Record<E_WindowOverlay, FC> = {
  [E_WindowOverlay.createCharacter]: CreateCharacterOverlay,
  [E_WindowOverlay.updateCharacter]: UpdateCharacterOverlay,
  [E_WindowOverlay.pickCharacterAvatar]: PickCharacterAvatarOverlay,
  [E_WindowOverlay.updateCharacterEffect]: UpdateCharacterEffectOverlay,
  [E_WindowOverlay.battlefieldActionsEditor]: BattlefieldActionsEditor,
}
