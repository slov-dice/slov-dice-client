import Tippy from '@tippyjs/react'

import * as S from './styles'

import PlusIcon from 'assets/icons/app/plus.svg'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { T_CharacterId } from 'models/game/character'

interface I_AddCharacterEffectProps {
  characterId: T_CharacterId
}

export const AddCharacterEffect = ({ characterId }: I_AddCharacterEffectProps) => {
  const { openCharacterWindowOverlay } = useActions()

  const handleOpenAddCharacterOverlay = () => {
    openCharacterWindowOverlay({
      name: E_WindowOverlay.addCharacterEffect,
      payload: characterId,
      isOpen: true,
    })
  }

  return (
    <Tippy content='Добавить эффект'>
      <S.EffectIcon onClick={handleOpenAddCharacterOverlay}>
        <PlusIcon />
      </S.EffectIcon>
    </Tippy>
  )
}
