import * as S from './styles'

import { E_Routes } from 'models/routes'

interface I_LogoProps {
  relative?: boolean
  isHeader?: boolean
}

export const Logo = ({ relative = false, isHeader = false }: I_LogoProps) => {
  return (
    <S.Wrapper relative={relative} isHeader={isHeader}>
      <S.TextLink to={E_Routes.home}>SD</S.TextLink>
    </S.Wrapper>
  )
}
