import * as S from './styles'

import { E_UserStatus } from 'models/shared/app'

interface I_UserProps {
  nickname: string
  status: E_UserStatus
}

export const User = ({ nickname, status }: I_UserProps) => {
  return (
    <S.UserWrapper>
      {nickname}
      <S.UserStatus status={status}></S.UserStatus>
    </S.UserWrapper>
  )
}
