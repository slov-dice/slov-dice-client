import { useCallback } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'

const findOverlay = (overlay: I_WindowOverlay) => overlay.name === E_WindowOverlay.battlefieldEditor

export const BattlefieldEditor = () => {
  const dispatch = useStoreDispatch()

  const { overlayPayload, settingsBars } = useStoreSelector((store) => ({
    overlayPayload: store.gameCharacters.overlays.find(findOverlay)?.payload,
    settingsBars: store.room.game.characters.settings.bars,
  }))

  const handleClose = useCallback(() => {
    dispatch(
      gameBattlefieldActions.closeBattlefieldWindowOverlay(E_WindowOverlay.battlefieldEditor),
    )
  }, [dispatch])

  return (
    <div>
      <S.OverlayHeader>
        <span>Редактор поля</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
    </div>
  )
}
