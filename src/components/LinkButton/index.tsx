import { FC, PropsWithChildren } from 'react'

import * as S from './styles'

interface LinkButtonProps {
  onClick?: () => void
}

export const LinkButton: FC<PropsWithChildren<LinkButtonProps>> = ({ children, onClick }) => (
  <S.LinkButton type='button' onClick={onClick}>
    {children}
  </S.LinkButton>
)
