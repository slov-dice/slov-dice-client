import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { E_Routes } from 'models/routes'

interface I_LogoProps {
  relative?: boolean
}

export const Logo = ({ relative = false }: I_LogoProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(E_Routes.home)
  }

  return (
    <S.Container relative={relative} onClick={handleClick}>
      <S.Text>SD</S.Text>
    </S.Container>
  )
}
