import { ReactNode } from 'react'

import * as S from './styles'

interface I_AddCardProps {
  onClick: () => void
  children: ReactNode
}

export const AddCard = ({ onClick, children }: I_AddCardProps) => {
  return <S.Card onClick={onClick}>{children}</S.Card>
}
