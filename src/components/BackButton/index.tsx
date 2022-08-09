import { FC, PropsWithChildren } from 'react'

import * as S from './styles'

interface BackButtonProps {
  onClick: () => void
}

export const BackButton: FC<PropsWithChildren<BackButtonProps>> = ({ children, onClick }) => {
  return (
    <S.Breadcrumb initial={{ x: -112 }} animate={{ x: 0 }} exit={{ x: -112 }} onClick={onClick}>
      {children}
    </S.Breadcrumb>
  )
}
