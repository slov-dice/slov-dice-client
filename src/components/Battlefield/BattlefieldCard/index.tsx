import Tippy from '@tippyjs/react'
import { AnimatePresence } from 'framer-motion'
import { useState, useRef, useMemo, useEffect } from 'react'
import ReactParallaxTilt from 'react-parallax-tilt'

import * as S from './styles'

import ActionIcon from 'assets/icons/app/action.svg'
import BackIcon from 'assets/icons/app/arrow-left.svg'
import SkullCrossbones from 'assets/icons/game/skull-crossbones.svg'
import { Button } from 'components/Buttons'
import { CharacterBar } from 'components/Character'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_Battlefield } from 'models/shared/game/battlefield'
import { T_CharacterAction, T_CharacterBar, T_CharacterBarId } from 'models/shared/game/character'
import { roomActions } from 'store/room'
import * as C from 'styles/components'
import { getBar } from 'utils/game/effects'

interface I_BattlefieldCardProps {
  name: string
  avatar: string
  bars: T_CharacterBar[]
  id: string
  subId?: string
  actions: T_CharacterAction[]
  isCharacter: boolean
  battlefield: E_Battlefield
}

export const actionAnimationDuration = 1000

export const BattlefieldCard = ({
  name,
  avatar,
  bars,
  id,
  actions,
  isCharacter,
  battlefield,
  subId,
}: I_BattlefieldCardProps) => {
  const dispatch = useStoreDispatch()

  const [isFront, setIsFront] = useState(true)
  const cardRef = useRef<ReactParallaxTilt>(null)

  const { settings, activeCard, action } = useStoreSelector((store) => ({
    settings: store.room.game.characters.settings,
    activeCard: store.gameBattlefield.activeCard,
    action: store.gameBattlefield.action,
  }))

  const handleActivate = (action: T_CharacterAction) => () => {
    dispatch(gameBattlefieldActions.setActiveCard({ id, action }))
    setIsFront(true)
  }

  const handleDisable = () => {
    dispatch(gameBattlefieldActions.disableActiveCard())
  }

  const handleChangeCharacterBar = (barId: T_CharacterBarId, value: number) => {
    if (isCharacter) {
      dispatch(
        roomActions.emitUpdateCharacterField({
          characterId: id,
          field: 'bars',
          value,
          subFieldId: barId,
        }),
      )
    }
    if (!isCharacter && subId) {
      dispatch(
        roomActions.updateDummyFieldOnBattlefield({
          battlefield,
          dummySubId: subId,
          value,
          field: 'barsCurrent',
          subFieldId: barId,
        }),
      )
    }
  }

  const handleKillDummyFromField = () => {
    if (subId) {
      dispatch(roomActions.emitRemoveDummyOnBattlefield({ dummySubId: subId, battlefield }))
    }
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
                  {isActive && (
                    <S.ActionOverlay>
                      <S.ActionOverlayItem id={id}>
                        {t('windowBattlefield.self')}
                      </S.ActionOverlayItem>
                      <S.ActionOverlayItem onClick={handleDisable}>
                        {t('windowBattlefield.cancel')}
                      </S.ActionOverlayItem>
                    </S.ActionOverlay>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {isTarget && (
                    <S.ActionOverlay id={id}>
                      <ActionIcon />
                    </S.ActionOverlay>
                  )}
                </AnimatePresence>
                <S.CardTitle>{name}</S.CardTitle>
                <S.CardAction onClick={() => setIsFront(false)}>
                  <ActionIcon />
                </S.CardAction>
                <S.CardAvatar src={avatar} alt='avatar' />
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
                  {!isCharacter && (
                    <S.CardFrontActions>
                      <Tippy content={t('windowBattlefield.kill')}>
                        <C.Control onClick={handleKillDummyFromField}>
                          <SkullCrossbones />
                        </C.Control>
                      </Tippy>
                    </S.CardFrontActions>
                  )}
                </S.CardInfoContent>
                <S.Shadow />
              </S.CardInfoInner>
            ) : (
              <S.CardActionsInner>
                <S.BackButton onClick={() => setIsFront(true)}>
                  <BackIcon />
                </S.BackButton>

                <S.CardTitle>{t('windowBattlefield.pick')}</S.CardTitle>
                <S.CardActionsContent>
                  {actions.map((action) => (
                    <Button
                      key={action.id}
                      onClick={handleActivate(action)}
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
