import { FC, PropsWithChildren } from 'react'

import * as S from './styles'

interface LinkButtonProps {
  onClick?: () => void
}

export const LinkButton: FC<PropsWithChildren<LinkButtonProps>> = ({ children, onClick }) => (
  <S.LinkButton whileHover={{ opacity: 0.75 }} onClick={onClick}>
    {children}
  </S.LinkButton>
)
