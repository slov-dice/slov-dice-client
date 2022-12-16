import { AnimatePresence } from 'framer-motion'
import { useState, useRef, useMemo, useEffect } from 'react'
import ReactParallaxTilt from 'react-parallax-tilt'

import * as S from './styles'

import ActionIcon from 'assets/icons/app/action.svg'
import BackIcon from 'assets/icons/app/arrow-left.svg'
import Monster1Image from 'assets/images/mon1.png'
import { Button } from 'components/Buttons'
import { CharacterBar } from 'components/Character'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { T_CharacterBar } from 'models/shared/game/character'
import { getBar } from 'utils/game/effects'

interface I_BattlefieldCardProps {
  name: string
  avatar: string
  bars: T_CharacterBar[]
  id: string
}

export const BattlefieldCard = ({ name, avatar, bars, id }: I_BattlefieldCardProps) => {
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

  const isActive = useMemo(() => activeCard.id === id, [activeCard.id, id])
  const isTarget = useMemo(() => activeCard.id !== '' && !isActive, [activeCard.id, isActive])
  const isActionTarget = useMemo(() => action.to.id === id, [action.to, id])
  const isActionInitiator = useMemo(() => action.from.id === id, [action.from.id, id])

  useEffect(() => {
    if (isActionTarget) {
      setTimeout(() => {
        dispatch(gameBattlefieldActions.disableAction())
      }, 1000)
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
                        onChange={() => console.log(1)}
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
                <S.CardTitle>Pick the action</S.CardTitle>
                <S.CardActionsContent>
                  <Button onClick={handleActivate('attack1')} mod={Button.mod.secondary}>
                    attack1
                  </Button>
                  <Button onClick={handleActivate('attack2')} mod={Button.mod.secondary}>
                    attack2
                  </Button>
                  <Button mod={Button.mod.secondary}>Edit actions</Button>
                </S.CardActionsContent>
              </S.CardActionsInner>
            )}
          </AnimatePresence>
        </S.CardInner>
      </S.CardWrapper>
    </>
  )
}
