import Tippy from '@tippyjs/react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { T_BaseCharacterEffect, T_CharacterEffectId } from 'models/shared/game/character'
import { getGameIcon } from 'utils/game/effects/icons'

interface I_CharacterEffectProps {
  effect: T_BaseCharacterEffect
  onRemove: (effectId: T_CharacterEffectId) => void
}

export const CharacterEffect = ({ effect, onRemove }: I_CharacterEffectProps) => {
  const handleRemoveEffect = () => {
    onRemove(effect.id)
  }

  return (
    <Tippy content={<TooltipContent name={effect.name} description={effect.description} />}>
      <S.EffectWrapper>
        <S.EffectIcon type={effect.type}>{getGameIcon(effect.icon)}</S.EffectIcon>
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
