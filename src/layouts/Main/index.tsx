import { ReactNode } from 'react'

import * as S from './styles'

interface I_MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: I_MainLayoutProps) => {
  return (
    <S.MainLayout>
      <S.MainInner>{children}</S.MainInner>
    </S.MainLayout>
  )
}
