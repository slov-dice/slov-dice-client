import { useCallback, useEffect } from 'react'

import * as S from './styles'

import EditIcon from 'assets/icons/app/edit.svg'
import { BattlefieldCard } from 'components/Battlefield'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { E_Window } from 'features/WindowManager/models'
import { WindowOverlayManager } from 'features/WindowOverlayManager'
import { WindowOverlayManagerProvider } from 'features/WindowOverlayManager/context'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useEventListener } from 'hooks/useEventListener'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Battlefield } from 'models/shared/game/battlefield'
import { roomActions } from 'store/room'
import { getDummy, getDummyBars } from 'utils/game/effects'

export const BattlefieldContent = () => {
  const dispatch = useStoreDispatch()
  const {
    characters,
    activeCard,
    overlays,
    masterField,
    masterDummies,
    playersField,
    playersDummies,
    profileId,
  } = useStoreSelector((store) => ({
    characters: store.room.game.characters.window.characters,
    activeCard: store.gameBattlefield.activeCard,
    overlays: store.gameBattlefield.overlays,
    masterField: store.room.game.battlefield.window.masterField,
    masterDummies: store.room.game.battlefield.window.masterDummies,
    playersField: store.room.game.battlefield.window.playersField,
    playersDummies: store.room.game.battlefield.window.playersDummies,
    profileId: store.profile.id,
  }))

  const handleOpenBattlefieldEditorOverlay = (battlefield: E_Battlefield) => () => {
    dispatch(
      gameBattlefieldActions.openBattlefieldWindowOverlay({
        name: E_WindowOverlay.battlefieldEditor,
        isOpen: true,
        payload: battlefield,
      }),
    )
  }

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dispatch(gameBattlefieldActions.closeLastBattlefieldWindowOverlay())
      }
    },
    [dispatch],
  )
  useEventListener('keydown', handleEsc)

  const handleCardAction = useCallback(
    (e: any) => {
      if (activeCard.id) {
        if (e.target?.id) {
          dispatch(
            roomActions.emitMakeActionInBattlefield({
              actionTarget: e.target.id,
              actionInitiator: activeCard.id,
              action: activeCard.action,
              userId: profileId,
            }),
          )
          dispatch(gameBattlefieldActions.disableActiveCard())
        }
      }
    },
    [activeCard.action, activeCard.id, dispatch, profileId],
  )

  useEffect(() => {
    document.addEventListener('click', handleCardAction)

    return () => document.removeEventListener('click', handleCardAction)
  }, [handleCardAction])

  return (
    <WindowOverlayManagerProvider location={E_Window.battlefield}>
      <WindowOverlayManager overlays={overlays} />
      <S.WindowContentWrapper>
        <S.FieldWrapper>
          <S.MasterFieldEdit onClick={handleOpenBattlefieldEditorOverlay(E_Battlefield.master)}>
            <EditIcon />
          </S.MasterFieldEdit>
          <S.CardsWrapper>
            {masterField.map((dummy) => {
              const baseDummy = getDummy(dummy.id, masterDummies)
              const dummyBars = getDummyBars(dummy.barsCurrent, baseDummy.barsMax)
              return (
                <BattlefieldCard
                  key={dummy.subId}
                  name={baseDummy.name}
                  actions={baseDummy.actions}
                  id={dummy.subId}
                  bars={dummyBars}
                  avatar={baseDummy.avatar}
                  isCharacter={false}
                  battlefield={E_Battlefield.master}
                  subId={dummy.subId}
                />
              )
            })}
          </S.CardsWrapper>
        </S.FieldWrapper>

        <S.FieldWrapper>
          <S.PlayerFieldEdit onClick={handleOpenBattlefieldEditorOverlay(E_Battlefield.players)}>
            <EditIcon />
          </S.PlayerFieldEdit>
          <S.CardsWrapper>
            {characters.map((character) => (
              <BattlefieldCard
                key={character.id}
                id={character.id}
                bars={character.bars}
                name={character.name}
                avatar={character.avatar}
                actions={character.actions}
                isCharacter
                battlefield={E_Battlefield.players}
              />
            ))}
            {playersField.map((dummy) => {
              const baseDummy = getDummy(dummy.id, playersDummies)
              const dummyBars = getDummyBars(dummy.barsCurrent, baseDummy.barsMax)
              return (
                <BattlefieldCard
                  key={dummy.subId}
                  name={baseDummy.name}
                  actions={baseDummy.actions}
                  id={dummy.subId}
                  bars={dummyBars}
                  avatar={baseDummy.avatar}
                  isCharacter={false}
                  battlefield={E_Battlefield.players}
                  subId={dummy.subId}
                />
              )
            })}
          </S.CardsWrapper>
        </S.FieldWrapper>
      </S.WindowContentWrapper>
    </WindowOverlayManagerProvider>
  )
}
