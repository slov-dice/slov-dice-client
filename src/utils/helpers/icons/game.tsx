import { ReactNode } from 'react'

import BrokenBoneIcon from 'assets/icons/game/broken-bone.svg'
import MuscleFatIcon from 'assets/icons/game/muscle-fat.svg'
import MuscleUpIcon from 'assets/icons/game/muscle-up.svg'
import VomitingIcon from 'assets/icons/game/vomiting.svg'

export enum E_GameIcon {
  brokenBone = 'brokenBone',
  vomiting = 'vomiting',
  muscleFat = 'muscleFat',
  muscleUp = 'muscleUp',
}

export const getGameIcon = (icon: E_GameIcon): ReactNode => {
  switch (icon) {
    case E_GameIcon.brokenBone:
      return <BrokenBoneIcon />

    case E_GameIcon.vomiting:
      return <VomitingIcon />

    case E_GameIcon.muscleFat:
      return <MuscleFatIcon />

    case E_GameIcon.muscleUp:
      return <MuscleUpIcon />
  }
}
