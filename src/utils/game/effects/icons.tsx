import { ReactNode } from 'react'

import BrokenBoneIcon from 'assets/icons/game/broken-bone.svg'
import MuscleFatIcon from 'assets/icons/game/muscle-fat.svg'
import MuscleUpIcon from 'assets/icons/game/muscle-up.svg'
import SonicShoutIcon from 'assets/icons/game/sonic-shout.svg'
import VileFluidIcon from 'assets/icons/game/vile-fluid.svg'
import VomitingIcon from 'assets/icons/game/vomiting.svg'
import WingFootIcon from 'assets/icons/game/wing-foot.svg'
import WingedSwordIcon from 'assets/icons/game/winged-sword.svg'
import { E_EffectIcon } from 'models/shared/game/extra/effects'

export const getGameIcon = (icon: E_EffectIcon): ReactNode => {
  switch (icon) {
    case E_EffectIcon.brokenBone:
      return <BrokenBoneIcon />

    case E_EffectIcon.vomiting:
      return <VomitingIcon />

    case E_EffectIcon.muscleFat:
      return <MuscleFatIcon />

    case E_EffectIcon.muscleUp:
      return <MuscleUpIcon />

    case E_EffectIcon.sonicShout:
      return <SonicShoutIcon />

    case E_EffectIcon.vileFluid:
      return <VileFluidIcon />

    case E_EffectIcon.wingFoot:
      return <WingFootIcon />

    case E_EffectIcon.wingedSword:
      return <WingedSwordIcon />
  }
}
