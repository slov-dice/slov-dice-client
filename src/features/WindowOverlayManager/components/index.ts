import { FC } from 'react'

import { BattlefieldActionsEditor } from './BattlefieldActionsEditor'
import { BattlefieldEditor } from './BattlefieldEditor'
import { CreateCharacterOverlay } from './CreateCharacter'
import { CreateDummyOverlay } from './CreateDummy'
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
  [E_WindowOverlay.battlefieldEditor]: BattlefieldEditor,
  [E_WindowOverlay.createDummy]: CreateDummyOverlay,
}
