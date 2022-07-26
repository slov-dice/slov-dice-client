import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { E_Routes } from 'utils/constants/routes'

export const Logo = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(E_Routes.home)
  }

  return (
    <S.Container onClick={handleClick}>
      <S.Text>SD</S.Text>
    </S.Container>
  )
}
