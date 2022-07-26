import { useTransform, useViewportScroll } from 'framer-motion'

import { IconWrapper } from './components/IconWrapper'
import { itemsPosition } from './data'
import * as S from './styles'
import { getRandomIconValues } from './utils'

export const HeroBackground = () => {
  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 200])

  return (
    <S.HeroBackground>
      {getRandomIconValues().map((icon, index) => (
        <IconWrapper key={icon} icon={icon} isLeft={index >= 3} y={y} item={itemsPosition[index]} />
      ))}
    </S.HeroBackground>
  )
}
