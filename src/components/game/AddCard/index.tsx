import { ReactNode } from 'react'

import * as S from './styles'

interface I_AddCardProps {
  onClick: () => void
  children: ReactNode
  width?: number
  height?: number
}

export const AddCard = ({ onClick, children, width, height }: I_AddCardProps) => {
  return (
    <S.Card onClick={onClick} width={width} height={height}>
      {children}
    </S.Card>
  )
}
