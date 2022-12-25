import { ReactNode } from 'react'

import * as S from './styles'

interface I_AddCardProps {
  onClick: () => void
  children: ReactNode
  width?: number
}

export const AddCard = ({ onClick, children, width }: I_AddCardProps) => {
  return (
    <S.Card onClick={onClick} width={width}>
      {children}
    </S.Card>
  )
}
