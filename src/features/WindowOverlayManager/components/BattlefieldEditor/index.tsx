import { useCallback } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import PlusIcon from 'assets/icons/app/plus.svg'
import { DummyCard } from 'components/dummy'
import { AddCard } from 'components/game'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_Battlefield } from 'models/shared/game/battlefield'
import * as C from 'styles/components'

const findOverlay = (overlay: I_WindowOverlay) => overlay.name === E_WindowOverlay.battlefieldEditor

export const BattlefieldEditor = () => {
  const dispatch = useStoreDispatch()

  const { overlayPayload, masterDummies, playersDummies } = useStoreSelector((store) => ({
    overlayPayload: store.gameBattlefield.overlays.find(findOverlay)?.payload,
    masterDummies: store.room.game.battlefield.window.masterDummies,
    playersDummies: store.room.game.battlefield.window.playersDummies,
  }))

  const handleOpenCreateDummyOverlay = () => {
    dispatch(gameBattlefieldActions.setDummyCreator())
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
        <span>{t('battlefieldEditorOverlay.title')}</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>
        {overlayPayload === E_Battlefield.master &&
          masterDummies.map((dummy) => (
            <DummyCard key={dummy.id} battlefield={overlayPayload} dummy={dummy} />
          ))}
        {overlayPayload === E_Battlefield.players &&
          playersDummies.map((dummy) => (
            <DummyCard key={dummy.id} battlefield={overlayPayload} dummy={dummy} />
          ))}

        <AddCard height={280} onClick={handleOpenCreateDummyOverlay}>
          <span>{t('battlefieldEditorOverlay.actions.add')}</span>
          <div>
            <PlusIcon />
          </div>
        </AddCard>
      </S.OverlayContent>
    </div>
  )
}
