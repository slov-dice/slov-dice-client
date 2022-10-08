import { useCallback } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import * as C from 'styles/components'

export const AddCharacterEffectOverlay = () => {
  const { closeCharacterWindowOverlay } = useActions()

  const handleClose = useCallback(() => {
    closeCharacterWindowOverlay(E_WindowOverlay.addCharacterEffect)
  }, [closeCharacterWindowOverlay])

  return (
    <div>
      <S.OverlayHeader>
        <span>Эффекты персонажа</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <div>1 | text</div>
      <div>2 | text</div>
      <div>3 | text</div>
      <div>4 | text</div>
    </div>
  )
}
