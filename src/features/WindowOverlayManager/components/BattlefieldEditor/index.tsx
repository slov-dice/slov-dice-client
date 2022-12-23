import { useCallback } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import PlusIcon from 'assets/icons/app/plus.svg'
import { AddCard } from 'components/game'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'

const findOverlay = (overlay: I_WindowOverlay) => overlay.name === E_WindowOverlay.battlefieldEditor

export const BattlefieldEditor = () => {
  const dispatch = useStoreDispatch()

  const { overlayPayload, settingsBars, masterDummies, playersDummies } = useStoreSelector(
    (store) => ({
      overlayPayload: store.gameBattlefield.overlays.find(findOverlay)?.payload,
      settingsBars: store.room.game.characters.settings.bars,
      masterDummies: store.room.game.battlefield.window.masterDummies,
      playersDummies: store.room.game.battlefield.window.playersDummies,
    }),
  )

  const handleOpenCreateDummyOverlay = () => {
    // dispatch(gameBattlefieldActions.setCharacterCreator({ settingsBars, settingsSpecials }))
    dispatch(
      gameBattlefieldActions.openBattlefieldWindowOverlay({
        name: E_WindowOverlay.createDummy,
        payload: overlayPayload,
        isOpen: true,
      }),
    )
  }

  const handleClose = useCallback(() => {
    dispatch(
      gameBattlefieldActions.closeBattlefieldWindowOverlay(E_WindowOverlay.battlefieldEditor),
    )
  }, [dispatch])

  return (
    <div>
      <S.OverlayHeader>
        <span>Редактор {overlayPayload} поля</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>
        {JSON.stringify(masterDummies, null, 2)}
        {JSON.stringify(playersDummies, null, 2)}
        <AddCard onClick={handleOpenCreateDummyOverlay}>
          <span>Добавить болванку</span>
          <div>
            <PlusIcon />
          </div>
        </AddCard>
      </S.OverlayContent>
    </div>
  )
}
