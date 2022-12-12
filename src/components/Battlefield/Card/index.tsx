import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import * as S from './styles'

import ActionIcon from 'assets/icons/app/action.svg'
import BackIcon from 'assets/icons/app/arrow-left.svg'
import PlaceholderImage from 'assets/images/placeholder.png'
import { Button } from 'components/Buttons'
import * as C from 'styles/components'

interface I_BattlefieldCardProps {
  name: string
  avatar: string
}

export const BattlefieldCard = ({ name, avatar }: I_BattlefieldCardProps) => {
  const [isFront, setIsFront] = useState(true)

  return (
    <S.CardWrapper>
      <AnimatePresence mode='wait'>
        {isFront ? (
          <S.CardInfoInner>
            <S.CardTitle>{name}</S.CardTitle>
            <S.CardAction onClick={() => setIsFront(false)}>
              <ActionIcon />
            </S.CardAction>
            <S.CardInfoContent>
              {/* <S.CardAvatar src={avatar || PlaceholderImage} alt='avatar' /> */}
              <div>
                <div>bar1</div>
                <div>bar2</div>
                <div>bar3</div>
              </div>
            </S.CardInfoContent>
          </S.CardInfoInner>
        ) : (
          <S.CardActionsInner>
            <S.BackButton onClick={() => setIsFront(true)}>
              <BackIcon />
            </S.BackButton>
            <S.CardTitle>Pick the action</S.CardTitle>
            <div>
              <Button onClick={() => setIsFront(true)} mod={Button.mod.secondary}>
                attack1
              </Button>
              <C.Divider />
              <Button onClick={() => setIsFront(true)} mod={Button.mod.secondary}>
                attack2
              </Button>
              <C.Divider />
              <C.Divider />
              <Button mod={Button.mod.secondary}>Edit actions</Button>
            </div>
          </S.CardActionsInner>
        )}
      </AnimatePresence>
    </S.CardWrapper>
  )
}
