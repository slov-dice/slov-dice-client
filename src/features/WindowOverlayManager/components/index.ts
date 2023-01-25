import { FC } from 'react'

import { ActionsEditor } from './ActionsEditor'
import { BattlefieldEditor } from './BattlefieldEditor'
import { CreateCharacterOverlay } from './CreateCharacter'
import { CreateDummyOverlay } from './CreateDummy'
import { GridDocsOverlay } from './GridDocs'
import { PickCharacterAvatarOverlay } from './PickCharacterAvatar'
import { PickDummyAvatarOverlay } from './PickDummyAvatar'
import { UpdateCharacterOverlay } from './UpdateCharacter'
import { UpdateCharacterEffectOverlay } from './UpdateCharacterEffect'
import { UpdateDummyOverlay } from './UpdateDummy'

import { E_WindowOverlay } from '../models'

export const windowOverlayComponents: Record<E_WindowOverlay, FC> = {
  [E_WindowOverlay.createCharacter]: CreateCharacterOverlay,
  [E_WindowOverlay.updateCharacter]: UpdateCharacterOverlay,
  [E_WindowOverlay.pickCharacterAvatar]: PickCharacterAvatarOverlay,
  [E_WindowOverlay.updateCharacterEffect]: UpdateCharacterEffectOverlay,
  [E_WindowOverlay.actionsEditor]: ActionsEditor,
  [E_WindowOverlay.battlefieldEditor]: BattlefieldEditor,
  [E_WindowOverlay.createDummy]: CreateDummyOverlay,
  [E_WindowOverlay.pickDummyAvatar]: PickDummyAvatarOverlay,
  [E_WindowOverlay.updateDummy]: UpdateDummyOverlay,
  [E_WindowOverlay.gridDocs]: GridDocsOverlay,
}
