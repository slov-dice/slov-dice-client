import { useTransform, useScroll } from 'framer-motion'
import { useState } from 'react'

import { IconWrapper } from './components/IconWrapper'
import { itemsPosition } from './data'
import * as S from './styles'
import { getRandomIconValues } from './utils'

import { useMediaQuery } from 'hooks/useMediaQuery'
import { E_MediaQuery } from 'styles/theme'

export const HeroBackground = () => {
  const isMatch = useMediaQuery(E_MediaQuery.lg)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 200])

  const [icons] = useState(getRandomIconValues())

  return (
    <S.HeroBackground>
      {icons.map((icon, index) => (
        <IconWrapper
          key={icon}
          icon={icon}
          isLeft={index >= 3}
          y={y}
          item={itemsPosition[String(isMatch)][index]}
        />
      ))}
    </S.HeroBackground>
  )
}
