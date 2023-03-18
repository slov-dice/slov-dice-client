import Tippy from '@tippyjs/react'

import * as S from './styles'

import PlusIcon from 'assets/icons/app/plus.svg'
import { gameCharactersActions } from 'features/WindowManager/components/Characters/slice'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import { T_CharacterId } from 'models/shared/game/character'

interface I_AddCharacterEffectProps {
  characterId: T_CharacterId
}

export const AddCharacterEffect = ({ characterId }: I_AddCharacterEffectProps) => {
  const dispatch = useStoreDispatch()

  const handleOpenAddCharacterOverlay = () => {
    dispatch(
      gameCharactersActions.openWindowOverlay({
        name: E_WindowOverlay.updateCharacterEffect,
        payload: characterId,
      }),
    )
  }

  return (
    <Tippy content={t('windowCharacters.addEffect')}>
      <S.EffectIcon onClick={handleOpenAddCharacterOverlay}>
        <PlusIcon />
      </S.EffectIcon>
    </Tippy>
  )
}
