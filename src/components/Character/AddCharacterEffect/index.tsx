import Tippy from '@tippyjs/react'

import * as S from './styles'

import PlusIcon from 'assets/icons/app/plus.svg'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { t } from 'languages'
import { T_CharacterId } from 'models/shared/game/character'

interface I_AddCharacterEffectProps {
  characterId: T_CharacterId
}

export const AddCharacterEffect = ({ characterId }: I_AddCharacterEffectProps) => {
  const { openCharacterWindowOverlay } = useActions()

  const handleOpenAddCharacterOverlay = () => {
    openCharacterWindowOverlay({
      name: E_WindowOverlay.updateCharacterEffect,
      payload: characterId,
      isOpen: true,
    })
  }

  return (
    <Tippy content={t('windowCharacters.addEffect')}>
      <S.EffectIcon onClick={handleOpenAddCharacterOverlay}>
        <PlusIcon />
      </S.EffectIcon>
    </Tippy>
  )
}
