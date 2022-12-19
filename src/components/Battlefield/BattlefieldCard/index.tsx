import Tippy from '@tippyjs/react'
import { AnimatePresence } from 'framer-motion'
import { useState, useRef, useMemo, useEffect } from 'react'
import ReactParallaxTilt from 'react-parallax-tilt'

import * as S from './styles'

import ActionIcon from 'assets/icons/app/action.svg'
import BackIcon from 'assets/icons/app/arrow-left.svg'
import EditIcon from 'assets/icons/app/edit.svg'
import Monster1Image from 'assets/images/mon1.png'
import { Button } from 'components/Buttons'
import { CharacterBar } from 'components/Character'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { T_CharacterAction, T_CharacterBar, T_CharacterBarId } from 'models/shared/game/character'
import { roomActions } from 'store/room'
import { getBar } from 'utils/game/effects'

interface I_BattlefieldCardProps {
  name: string
  avatar: string
  bars: T_CharacterBar[]
  id: string
  actions: T_CharacterAction[]
}

export const actionAnimationDuration = 1000

export const BattlefieldCard = ({ name, avatar, bars, id, actions }: I_BattlefieldCardProps) => {
  const dispatch = useStoreDispatch()

  const [isFront, setIsFront] = useState(true)
  const cardRef = useRef<ReactParallaxTilt>(null)

  const { settings, activeCard, action } = useStoreSelector((store) => ({
    settings: store.room.game.characters.settings,
    activeCard: store.gameBattlefield.activeCard,
    action: store.gameBattlefield.action,
  }))

  const handleActivate = (action: string) => () => {
    dispatch(gameBattlefieldActions.setActiveCard({ id, action }))
    setIsFront(true)
  }

  const handleDisable = () => {
    dispatch(gameBattlefieldActions.disableActiveCard())
  }

  const handleChangeCharacterBar = (barId: T_CharacterBarId, value: number) => {
    dispatch(
      roomActions.emitUpdateCharacterFieldInCharactersWindow({
        characterId: id,
        field: 'bars',
        value,
        subFieldId: barId,
      }),
    )
  }

  const handleOpenBattlefieldActionsEditorOverlay = () => {
    dispatch(gameBattlefieldActions.setCharacterEditor({ actions }))
    dispatch(
      gameBattlefieldActions.openBattlefieldWindowOverlay({
        name: E_WindowOverlay.battlefieldActionsEditor,
        payload: 'battlefieldEditor',
        isOpen: true,
      }),
    )
  }

  const isActive = useMemo(() => activeCard.id === id, [activeCard.id, id])
  const isTarget = useMemo(() => activeCard.id !== '' && !isActive, [activeCard.id, isActive])
  const isActionTarget = useMemo(() => action.to.id === id, [action.to, id])
  const isActionInitiator = useMemo(() => action.from.id === id, [action.from.id, id])

  useEffect(() => {
    if (isActionTarget) {
      setTimeout(() => {
        dispatch(gameBattlefieldActions.disableAction())
      }, actionAnimationDuration)
    }
  }, [dispatch, isActionTarget])

  return (
    <>
      <S.CardWrapper
        ref={cardRef}
        isActive={isActive}
        isActionTarget={isActionTarget}
        isTarget={isTarget}
        isActionInitiator={isActionInitiator}
        tiltEnable={!isActionTarget}
      >
        <S.CardInner>
          <AnimatePresence mode='wait'>
            {isFront ? (
              <S.CardInfoInner>
                <AnimatePresence>
                  {isActive && <S.CancelOverlay onClick={handleDisable}>Отмена</S.CancelOverlay>}
                </AnimatePresence>
                <AnimatePresence>
                  {isTarget && (
                    <S.CancelOverlay id={id}>
                      <ActionIcon />
                    </S.CancelOverlay>
                  )}
                </AnimatePresence>
                <S.CardTitle>{name}</S.CardTitle>
                <S.CardAction onClick={() => setIsFront(false)}>
                  <ActionIcon />
                </S.CardAction>
                <S.CardAvatar src={avatar || Monster1Image} alt='avatar' />
                <S.CardInfoContent>
                  {bars.map((bar) => {
                    const baseBar = getBar(bar.id, settings.bars)
                    return (
                      <CharacterBar
                        key={bar.id}
                        onChange={handleChangeCharacterBar}
                        bar={{ ...bar, ...baseBar }}
                      />
                    )
                  })}
                </S.CardInfoContent>
                <S.Shadow />
              </S.CardInfoInner>
            ) : (
              <S.CardActionsInner>
                <S.BackButton onClick={() => setIsFront(true)}>
                  <BackIcon />
                </S.BackButton>
                <Tippy content={t('windowCharacters.editActions')}>
                  <S.EditButton onClick={handleOpenBattlefieldActionsEditorOverlay}>
                    <EditIcon />
                  </S.EditButton>
                </Tippy>

                <S.CardTitle>Pick the action</S.CardTitle>
                <S.CardActionsContent>
                  {actions.map((action) => (
                    <Button
                      key={action.id}
                      onClick={handleActivate('attack1')}
                      mod={Button.mod.secondary}
                    >
                      {action.title}
                    </Button>
                  ))}
                </S.CardActionsContent>
              </S.CardActionsInner>
            )}
          </AnimatePresence>
        </S.CardInner>
      </S.CardWrapper>
    </>
  )
}
