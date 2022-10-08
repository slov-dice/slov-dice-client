import Tippy from '@tippyjs/react'

import * as S from './styles'

import PlusIcon from 'assets/icons/app/plus.svg'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'

export const AddCharacterEffect = () => {
  const { openCharacterWindowOverlay } = useActions()

  const handleOpenAddCharacterOverlay = () => {
    openCharacterWindowOverlay(E_WindowOverlay.addCharacterEffect)
  }

  return (
    <Tippy content='Добавить эффект'>
      <S.EffectIcon onClick={handleOpenAddCharacterOverlay}>
        <PlusIcon />
      </S.EffectIcon>
    </Tippy>
  )
}
