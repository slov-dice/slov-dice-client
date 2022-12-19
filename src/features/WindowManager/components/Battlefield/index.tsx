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

export const BattlefieldContent = () => {
  const dispatch = useStoreDispatch()
  const { characters, activeCard, overlays } = useStoreSelector((store) => ({
    characters: store.room.game.characters.window.characters,
    activeCard: store.gameBattlefield.activeCard,
    overlays: store.gameBattlefield.overlays,
  }))

  const handleCardAction = useCallback(
    (e: any) => {
      if (activeCard.id) {
        if (e.target.id) {
          console.log(activeCard.id, 'make action on', e.target.id)
          dispatch(
            gameBattlefieldActions.setAction({
              from: { id: activeCard.id },
              to: { id: e.target.id },
            }),
          )
          dispatch(gameBattlefieldActions.disableActiveCard())
        }
      }
    },
    [activeCard.id, dispatch],
  )

  const handleOpenBattlefieldEditorOverlay = () => {
    dispatch(
      gameBattlefieldActions.openBattlefieldWindowOverlay({
        name: E_WindowOverlay.battlefieldEditor,
        isOpen: true,
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

  useEffect(() => {
    document.addEventListener('click', handleCardAction)

    return () => document.removeEventListener('click', handleCardAction)
  }, [handleCardAction])

  return (
    <WindowOverlayManagerProvider location={E_Window.battlefield}>
      <WindowOverlayManager overlays={overlays} />
      <S.WindowContentWrapper>
        <S.FieldWrapper>
          <S.MasterFieldEdit onClick={handleOpenBattlefieldEditorOverlay}>
            <EditIcon />
          </S.MasterFieldEdit>
          <S.CardsWrapper>
            <BattlefieldCard
              id='1'
              bars={[
                {
                  id: 'f2eb29cf-9bbe-4445-98ea-a33f0bc26961',
                  current: 100,
                  max: 100,
                },
              ]}
              name='Skeleton Warrior'
              avatar=''
              actions={[]}
            />
            <BattlefieldCard
              id='2'
              bars={[
                {
                  id: 'f2eb29cf-9bbe-4445-98ea-a33f0bc26961',
                  current: 100,
                  max: 100,
                },
              ]}
              name='Skeleton Warrior'
              avatar=''
              actions={[]}
            />
          </S.CardsWrapper>
        </S.FieldWrapper>

        <S.FieldWrapper>
          <S.PlayerFieldEdit onClick={handleOpenBattlefieldEditorOverlay}>
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
              />
            ))}
          </S.CardsWrapper>
        </S.FieldWrapper>
      </S.WindowContentWrapper>
    </WindowOverlayManagerProvider>
  )
}
