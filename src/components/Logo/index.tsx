import * as S from './styles'

import { E_Routes } from 'models/routes'

interface I_LogoProps {
  relative?: boolean
}

export const Logo = ({ relative = false }: I_LogoProps) => {
  return (
    <S.Wrapper relative={relative}>
      <S.TextLink to={E_Routes.home}>SD</S.TextLink>
    </S.Wrapper>
  )
}
