import Tippy from '@tippyjs/react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { T_CharacterEffect, T_EffectId } from 'models/shared/game/character'
import { getGameIcon } from 'utils/game/effects/icons'

interface I_CharacterEffectProps {
  values: T_CharacterEffect
  onRemove: (effectId: T_EffectId) => void
}

export const CharacterEffect = ({ values, onRemove }: I_CharacterEffectProps) => {
  const handleRemoveEffect = () => {
    onRemove(values.id)
  }

  return (
    <Tippy content={<TooltipContent name={values.name} description={values.description} />}>
      <S.EffectWrapper>
        <S.EffectIcon type={values.type}>{getGameIcon(values.icon)}</S.EffectIcon>
        <S.EffectRemove onClick={handleRemoveEffect}>
          <CloseIcon />
        </S.EffectRemove>
      </S.EffectWrapper>
    </Tippy>
  )
}

interface I_TooltipOverlayProps {
  name: string
  description: string
}

const TooltipContent = ({ name, description }: I_TooltipOverlayProps) => (
  <div>
    <div>{name}</div>
    <hr />
    <div>{description}</div>
  </div>
)
