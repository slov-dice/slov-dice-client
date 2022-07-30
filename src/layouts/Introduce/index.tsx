import { ReactNode } from 'react'

import * as S from './styles'

interface I_IntroduceLayoutProps {
  children: ReactNode
}

export const IntroduceLayout = ({ children }: I_IntroduceLayoutProps) => {
  return (
    <S.Layout>
      <S.Inner>{children}</S.Inner>
    </S.Layout>
  )
}
