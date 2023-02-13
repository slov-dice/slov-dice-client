import { MotionStyle, MotionValue } from 'framer-motion'

import * as S from './styles'

import { E_HeroIcon, getHeroIcon } from 'features/HeroBackground/utils'

interface I_IconWrapperProps {
  icon: E_HeroIcon
  item: MotionStyle
  isLeft: boolean
  y: MotionValue<number>
}

export const IconWrapper = ({ icon, item, isLeft, y }: I_IconWrapperProps) => {
  return (
    <S.IconWrapper $isLeft={isLeft} style={{ ...item, y }}>
      {getHeroIcon(icon)}
    </S.IconWrapper>
  )
}
