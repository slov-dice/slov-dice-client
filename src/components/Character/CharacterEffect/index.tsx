import Tippy from '@tippyjs/react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { removeEffect } from 'features/WindowManager/components/Characters/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { T_CharacterEffect } from 'models/game/character'
import { getGameIcon } from 'utils/helpers/icons/game'

interface I_CharacterEffectProps {
  effect: T_CharacterEffect
  characterId: string
}

export const CharacterEffect = ({ effect, characterId }: I_CharacterEffectProps) => {
  const dispatch = useStoreDispatch()

  const handleRemoveEffect = () => {
    dispatch(removeEffect({ characterId, effectName: effect.name }))
  }

  return (
    <Tippy content={<TooltipOverlay name={effect.name} description={effect.description} />}>
      <S.Effect>
        <S.EffectIcon type={effect.type}>{getGameIcon(effect.icon)}</S.EffectIcon>
        <S.EffectRemove onClick={handleRemoveEffect}>
          <CloseIcon />
        </S.EffectRemove>
      </S.Effect>
    </Tippy>
  )
}

interface I_TooltipOverlayProps {
  name: string
  description: string
}

const TooltipOverlay = ({ name, description }: I_TooltipOverlayProps) => (
  <div>
    <div>{name}</div>
    <hr />
    <div>{description}</div>
  </div>
)
