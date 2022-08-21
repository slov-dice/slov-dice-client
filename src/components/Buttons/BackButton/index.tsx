import { FC, PropsWithChildren } from 'react'

import * as S from './styles'

interface BackButtonProps {
  onClick: () => void
}

export const BackButton: FC<PropsWithChildren<BackButtonProps>> = ({ children, onClick }) => {
  return <S.BackButton onClick={onClick}>{children}</S.BackButton>
}
