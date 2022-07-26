import { ReactNode } from 'react'

import * as S from './styles'

import { Header } from 'features/Header'

interface I_IntroduceLayoutProps {
  children: ReactNode
}

export const IntroduceLayout = ({ children }: I_IntroduceLayoutProps) => {
  return (
    <S.Layout>
      <Header />
      <S.Inner>{children}</S.Inner>
    </S.Layout>
  )
}
