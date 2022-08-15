import * as S from './styles'

import { E_Routes } from 'models/routes'

interface I_LogoProps {
  relative?: boolean
}

export const Logo = ({ relative = false }: I_LogoProps) => {
  return (
    <S.Container relative={relative}>
      <S.Link href={E_Routes.home}>SD</S.Link>
    </S.Container>
  )
}
