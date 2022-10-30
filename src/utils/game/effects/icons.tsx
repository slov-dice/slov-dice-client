import { ReactNode } from 'react'

import BrokenBoneIcon from 'assets/icons/game/broken-bone.svg'
import MuscleFatIcon from 'assets/icons/game/muscle-fat.svg'
import MuscleUpIcon from 'assets/icons/game/muscle-up.svg'
import SonicShoutIcon from 'assets/icons/game/sonic-shout.svg'
import VileFluidIcon from 'assets/icons/game/vile-fluid.svg'
import VomitingIcon from 'assets/icons/game/vomiting.svg'
import WingFootIcon from 'assets/icons/game/wing-foot.svg'
import WingedSwordIcon from 'assets/icons/game/winged-sword.svg'

export enum E_GameIcon {
  brokenBone = 'brokenBone',
  vomiting = 'vomiting',
  muscleFat = 'muscleFat',
  muscleUp = 'muscleUp',
  sonicShout = 'sonicShout',
  vileFluid = 'vileFluid',
  wingFoot = 'wingFoot',
  wingedSword = 'wingedSword',
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

    case E_GameIcon.sonicShout:
      return <SonicShoutIcon />

    case E_GameIcon.vileFluid:
      return <VileFluidIcon />

    case E_GameIcon.wingFoot:
      return <WingFootIcon />

    case E_GameIcon.wingedSword:
      return <WingedSwordIcon />
  }
}
