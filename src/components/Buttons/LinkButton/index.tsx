import { ReactNode } from 'react'

import * as S from './styles'

interface I_LinkButtonProps {
  onClick?: () => void
  children: ReactNode
}

export const LinkButton = ({ children, onClick }: I_LinkButtonProps) => (
  <S.LinkButton type='button' onClick={onClick}>
    {children}
  </S.LinkButton>
)
